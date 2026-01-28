const fs = require('fs');
const path = require('path');

const envPath = path.resolve(__dirname, '.env');
// Write standard UTF-8 file with the variable name
fs.writeFileSync(envPath, 'GEMINI_API_KEY=', { encoding: 'utf8' });
console.log('Reset .env to UTF-8');
