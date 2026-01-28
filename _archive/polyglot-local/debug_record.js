const record = require('node-record-lpcm16');
console.log('Record exports:', record);
console.log('Type of record:', typeof record);
if (record && typeof record === 'object') {
    console.log('Keys:', Object.keys(record));
}
