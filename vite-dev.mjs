import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';


// __dirname is not defined in ES module scope
// so we need to use the import.meta.url
// to get the current file path
const __dirname = path.dirname(new URL(import.meta.url).pathname);
function setProdValue(value) {
    const filePath = path.join(__dirname, 'config', 'env.php');
    const content = `<?php\n\nreturn [\n    "PROD" => ${value},\n];\n`;
    fs.writeFileSync(filePath, content);
}
const viteServer = spawn('vite', [], {
    shell: true,
    stdio: 'inherit',
});

setProdValue(false);
process.on('SIGINT', () => {
    viteServer.kill('SIGINT');
});
viteServer.on('close', () => {
    console.log('');
    console.log('**************');
    console.log(`vite server exited, running build to switch to production`);
    console.log('**************');
    console.log('');

    const build = spawn('bun run build', [], { shell: true, stdio: 'inherit' });

    build.on('close', () => {
        console.log('');
        console.log('**************');
        console.log(`build is complete`);
        console.log('**************');
        setProdValue(true);    
    });
});
