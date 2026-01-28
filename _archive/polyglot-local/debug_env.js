const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

console.log('--- Environment Diagnostic ---');
console.log('CWD:', process.cwd());
console.log('__dirname:', __dirname);

const envPath = path.resolve(process.cwd(), '.env');
console.log('Expected .env path:', envPath);

if (!fs.existsSync(envPath)) {
    console.error('ERROR: .env file does NOT exist at expected path.');
} else {
    console.log('SUCCESS: .env file exists.');

    // Read raw content
    const rawContent = fs.readFileSync(envPath);
    console.log('File size:', rawContent.length, 'bytes');
    console.log('First 50 bytes (hex):', rawContent.subarray(0, 50).toString('hex'));
    console.log('Raw Content Preview (utf8):', rawContent.toString('utf8').substring(0, 50));

    // Try parsing manually
    const parsed = dotenv.parse(rawContent);
    console.log('Dotenv manual parse result keys:', Object.keys(parsed));
    if (parsed.GEMINI_API_KEY) {
        console.log('Manual parse: GEMINI_API_KEY found. Length:', parsed.GEMINI_API_KEY.length);
    } else {
        console.log('Manual parse: GEMINI_API_KEY NOT found.');
    }

    // Try standard loading
    const configResult = dotenv.config();
    if (configResult.error) {
        console.log('dotenv.config() returned error:', configResult.error);
    } else {
        console.log('dotenv.config() loaded keys:', Object.keys(configResult.parsed));
    }

    // Check process.env
    if (process.env.GEMINI_API_KEY) {
        console.log('Final process.env.GEMINI_API_KEY is SET. Length:', process.env.GEMINI_API_KEY.length);
    } else {
        console.log('Final process.env.GEMINI_API_KEY is NOT SET.');
    }
}
console.log('------------------------------');
