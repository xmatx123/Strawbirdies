const WebSocket = require('ws');
const fs = require('fs');

class PolyglotClient {
    constructor(apiKey, systemPromptPath) {
        this.apiKey = apiKey;
        this.systemPrompt = fs.existsSync(systemPromptPath) ? fs.readFileSync(systemPromptPath, 'utf8') : '';
        this.ws = null;
        this.conversationHistory = [];
        this.isConnected = false;
        this.onAudioData = null; // Callback for receiving audio
    }

    connect() {
        const host = 'generativelanguage.googleapis.com';
        const path = `/ws/google.ai.generativelanguage.v1alpha.GenerativeService.BidiGenerateContent?key=${this.apiKey}`;
        const url = `wss://${host}${path}`;

        this.ws = new WebSocket(url);

        this.ws.on('open', () => {
            console.log('Connected to Gemini Live API');
            this.isConnected = true;
            this.sendSetup();
            // Trigger the AI to speak first by sending a hidden system/user event
            setTimeout(() => this.sendText("The user has picked up the phone. Greet them as instructed."), 500);
        });

        this.ws.on('message', (data) => {
            this.handleMessage(data);
        });

        if (!this.apiKey || this.apiKey.length < 10) {
            console.error("Warning: API Key appears invalid or too short.");
        } else {
            console.log("API Key loaded (length: " + this.apiKey.length + ")");
        }

        this.ws.on('close', (code, reason) => {
            console.log(`Disconnected from Gemini Live API. Code: ${code}`);
            if (code === 1011) {
                console.error("\n❌ ERROR: QUOTA EXCEEDED (Code 1011)");
                console.error("Your API key has hit its usage limit. Please check your Google AI Studio quota or billing details.");
            } else {
                console.log(`Reason: ${reason}`);
            }
            this.isConnected = false;
        });

        this.ws.on('error', (error) => {
            console.error('WebSocket error:', error);
        });
    }

    sendSetup() {
        const setupMessage = {
            setup: {
                model: "models/gemini-2.0-flash-exp",
                generation_config: {
                    response_modalities: ["AUDIO"],
                    speech_config: {
                        voice_config: {
                            prebuilt_voice_config: {
                                voice_name: "Puck"
                            }
                        }
                    }
                },
                system_instruction: {
                    parts: [{ text: this.systemPrompt }]
                }
            }
        };
        this.ws.send(JSON.stringify(setupMessage));
    }

    sendAudioChunk(base64Audio) {
        if (!this.isConnected) return;

        const msg = {
            realtime_input: {
                media_chunks: [
                    {
                        mime_type: "audio/pcm;rate=16000",
                        data: base64Audio
                    }
                ]
            }
        };
        this.ws.send(JSON.stringify(msg));
    }

    sendText(text) {
        if (!this.isConnected) return;
        const msg = {
            client_content: {
                turns: [{
                    role: "user",
                    parts: [{ text: text }]
                }],
                turn_complete: true
            }
        };
        this.ws.send(JSON.stringify(msg));
    }

    handleMessage(data) {
        try {
            // Blob to text if needed, or just parse if it's string
            const msgStr = data.toString();
            const msg = JSON.parse(msgStr);

            // Store for analysis (simplified)
            if (msg.serverContent && msg.serverContent.modelTurn) {
                this.conversationHistory.push({ role: 'model', content: msg.serverContent.modelTurn });
            }

            // Handle Audio
            if (msg.serverContent && msg.serverContent.modelTurn && msg.serverContent.modelTurn.parts) {
                for (const part of msg.serverContent.modelTurn.parts) {
                    if (part.inlineData && part.inlineData.mimeType.startsWith('audio/pcm')) {
                        if (this.onAudioData) {
                            const audioBuffer = Buffer.from(part.inlineData.data, 'base64');
                            this.onAudioData(audioBuffer);
                        }
                    }
                }
            }

            // Handle TurnComplete (if needed) or Interruption quirks
        } catch (e) {
            console.error("Error parsing message:", e);
        }
    }

    async generateFinalReport() {
        if (!this.isConnected) {
            return { error: "Not connected to generate report" };
        }

        console.log("Generating post-call analysis...");

        const analysisPrompt = `
        The call has ended. You must now act as the "Post-Call Analyst".
        Analyze the conversation history (system and user interactions) that just occurred.
        
        Output a valid JSON object with the following keys:
        {
          "conversationSummary": "One sentence summary of what we talked about.",
          "protocol": {
            "good": ["List of things the user did well (grammar, vocab, tone)..."],
            "bad": ["List of mistakes or areas for improvement..."],
            "follow_up_hook": "A motivating sentence to encourage the user to call again. e.g. 'Next time let's practice ordering food!'"
          },
          "mistakeLog": [
             {"error": "User said...", "correction": "Should have said...", "explanation": "Why..."}
          ],
          "fluencyScore": 8
        }
        
        Do not output markdown code blocks, just raw JSON.
        `;

        // Send the text prompt to the model
        const msg = {
            client_content: {
                turns: [{
                    role: "user",
                    parts: [{ text: analysisPrompt }]
                }],
                turn_complete: true
            }
        };

        return new Promise((resolve) => {
            let jsonBuffer = "";

            // Temporary listener for the final response
            const reportListener = (data) => {
                try {
                    const msgStr = data.toString();
                    const msg = JSON.parse(msgStr);

                    if (msg.serverContent && msg.serverContent.modelTurn && msg.serverContent.modelTurn.parts) {
                        for (const part of msg.serverContent.modelTurn.parts) {
                            if (part.text) {
                                jsonBuffer += part.text;
                            }
                        }
                    }

                    if (msg.serverContent && msg.serverContent.turnComplete) {
                        this.ws.off('message', reportListener);
                        try {
                            // Clean up markdown code blocks if present
                            const cleanJson = jsonBuffer.replace(/```json/g, '').replace(/```/g, '').trim();
                            const report = JSON.parse(cleanJson);
                            resolve(report);
                        } catch (e) {
                            console.error("Failed to parse report JSON:", e);
                            resolve({ error: "Failed to parse report", raw: jsonBuffer });
                        }
                    }
                } catch (e) {
                    // Ignore
                }
            };

            this.ws.on('message', reportListener);
            this.ws.send(JSON.stringify(msg));

            // Timeout fallback
            setTimeout(() => {
                this.ws.off('message', reportListener);
                resolve({ error: "Report generation timed out" });
            }, 30000);
        });
    }
}

module.exports = PolyglotClient;
