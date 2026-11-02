'use strict';
// Minimal static server for Render Web Services. No packages required.
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = __dirname;
const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
};
const server = http.createServer((req, res) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.writeHead(405, {'Allow':'GET, HEAD'}).end();
    return;
  }
  let pathname;
  try { pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname); }
  catch { res.writeHead(400).end('Bad request'); return; }
  if (pathname.includes('\0')) { res.writeHead(400).end(); return; }
  const file = path.resolve(root, '.' + (pathname.endsWith('/') ? pathname + 'index.html' : pathname));
  if (!file.startsWith(root + path.sep)) { res.writeHead(403).end('Forbidden'); return; }
  fs.stat(file, (err, stat) => {
    if (err || !stat.isFile()) { res.writeHead(404).end('Not found'); return; }
    const mime = types[path.extname(file).toLowerCase()] || 'application/octet-stream';
    const headers = {
      'Content-Type': mime,
      'X-Content-Type-Options': 'nosniff',
      'Cache-Control': /\.(webp|png|svg|jpg|jpeg|ico)$/.test(file) ? 'public, max-age=86400' : 'no-cache',
    };
    res.writeHead(200, headers);
    if (req.method === 'HEAD') {res.end(); return;}
    fs.createReadStream(file).pipe(res);
  });
});
const port = Number(process.env.PORT) || 3000;
server.listen(port, '0.0.0.0', () => console.log(`Portfolio ready on port ${port}`));
