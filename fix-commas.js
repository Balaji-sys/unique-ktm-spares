const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'lib', 'products.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Fix the pattern where } is followed by featured: without a comma
// This regex looks for closing brace, newline, whitespace, then 'featured:' 
content = content.replace(/(\s+})\r?\n(\s+featured:)/g, '$1,\r\n$2');

fs.writeFileSync(filePath, content, 'utf8');
console.log('✅ Fixed all missing commas in products.ts');
