import http from 'node:http';

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

function corsHeaders(res, origin) {
  res.setHeader('Access-Control-Allow-Origin', origin || '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

const server = http.createServer((req, res) => {
  const origin = req.headers.origin;

  if (req.method === 'OPTIONS') {
    corsHeaders(res, origin);
    res.writeHead(204);
    return res.end();
  }

  corsHeaders(res, origin);

  if (req.url === '/api') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ message: 'Hello from the API!' }));
  }

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from Node.js boilerplate!\n');
});

server.listen(PORT, () => {
  console.log(`Server running in ${NODE_ENV} mode on http://localhost:${PORT}`);
});

export default server;
