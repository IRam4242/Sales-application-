// Simple HTTP server for the Sales Application
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;

const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
};

const server = http.createServer((req, res) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);

    // Parse URL and construct safe file path
    let requestPath = req.url === '/' ? '/Local/Application.html' : req.url;
    
    // Resolve and normalize paths to prevent directory traversal
    const baseDir = path.resolve(__dirname);
    const filePath = path.resolve(path.join(__dirname, requestPath));
    
    // Ensure the resolved path is within the project directory (works on all platforms)
    if (!filePath.startsWith(baseDir + path.sep) && filePath !== baseDir) {
        res.writeHead(403, { 'Content-Type': 'text/html' });
        res.end('<h1>403 - Forbidden</h1>', 'utf-8');
        return;
    }

    // Get file extension
    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = mimeTypes[extname] || 'application/octet-stream';

    // Read and serve file
    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 - File Not Found</h1>', 'utf-8');
            } else {
                res.writeHead(500);
                res.end(`Server Error: ${error.code}`, 'utf-8');
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        }
    });
});

server.listen(PORT, () => {
    console.log(`Sales Application Server is running!`);
    console.log(`Access the application at: http://localhost:${PORT}/Local/Application.html`);
    console.log(`Press Ctrl+C to stop the server.`);
});
