const JavaScriptObfuscator = require('javascript-obfuscator');
const fs = require('fs');
const path = require('path');

const jsDir = path.join(__dirname, '..', 'build', 'static', 'js');

fs.readdirSync(jsDir).forEach(file => {
    const fullPath = path.join(jsDir, file);
    if (file.endsWith('.js')) {
        const content = fs.readFileSync(fullPath, 'utf8');
        const obfuscated = JavaScriptObfuscator.obfuscate(content, {
            compact: true,
            controlFlowFlattening: true,
            deadCodeInjection: true,
            stringArrayEncoding: ['base64'],
            rotateStringArray: true,
            stringArray: true,
            selfDefending: true,
        });

        fs.writeFileSync(fullPath, obfuscated.getObfuscatedCode(), 'utf8');
        console.log(`✅ Obfuscated: ${file}`);
    }
});
