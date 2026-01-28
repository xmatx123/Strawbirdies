const fs = require('fs');
const path = require('path');

const envPath = path.resolve(__dirname, '.env');

try {
    // Read as UTF-16LE since we detected that signature
    const content = fs.readFileSync(envPath, 'utf16le');
    console.log('Read content (length):', content.length);

    // Clean it up - sometimes BOM stays or other artifacts
    let cleanContent = content.trim();
    // If it starts with BOM char (FEFF decoded), remove it? 
    // Usually readFileSync removes BOM if encoding is specified, but let's be safe.
    if (cleanContent.charCodeAt(0) === 65279) {
        cleanContent = cleanContent.slice(1);
    }

    console.log('Content preview:', cleanContent.substring(0, 20));

    // Write back as UTF-8
    fs.writeFileSync(envPath, cleanContent, 'utf8');
    console.log('Successfully converted .env to UTF-8');

} catch (err) {
    console.error('Error during conversion:', err);
}
