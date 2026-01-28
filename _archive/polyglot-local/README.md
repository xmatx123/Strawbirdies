# Polyglot-Local (CLI Prototype)

A "Zero-UI" language learning prototype that simulates a telephone conversation with an AI Tutor.

## Prerequisites

### 1. Install Node.js
Ensure you have Node.js v18 or higher installed.

### 2. Install SoX (Sound eXchange)
This project relies on `sox` for real-time audio sample rate conversion. You must have `sox` installed and available in your system PATH.

**Windows:**
1. Download the SoX binaries from [SourceForge](https://sourceforge.net/projects/sox/files/sox/).
2. Extract the zip file.
3. Add the extracted folder to your System PATH environment variable.
4. Verify by running `sox --version` in your terminal.

**macOS:**
```bash
brew install sox
```

**Linux:**
```bash
sudo apt-get install sox libsox-fmt-all
```

### 3. Audio Drivers
- **Windows:** Ensure you have a working microphone and speaker default device.
- **Linux:** You may need ALSA configured (`sudo apt-get install libasound2-dev`).

## Setup

1.  Navigate to the project directory:
    ```bash
    cd polyglot-local
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Configure API Key:
    - Copy `.env.example` to `.env`.
    - Add your Google Gemini API Key to `.env`.

## Usage

1.  Run the application:
    ```bash
    node index.js
    ```
2.  Start talking! The CLI will remain mostly blank to simulate a "blind" phone call.
3.  To end the call, press `Ctrl+C`. You will see a performance summary.

## Configuration
- Modify `system_prompt.txt` to change the AI's persona.
