const WebSocket = require('ws');
const net = require('net');

const PORT = process.env.PORT || 8080;
const MC_HOST = 'overclock.dathost.net';
const MC_PORT = 17930;

const wss = new WebSocket.Server({ port: PORT }, () => {
  console.log(`Eagler proxy listening on port ${PORT}`);
});

wss.on('connection', (ws) => {
  console.log('Client attempting connection...');
  
  const client = net.connect(MC_PORT, MC_HOST, () => {
    console.log('Connected to target Minecraft server');
  });

  ws.on('message', (msg) => client.write(msg));
  client.on('data', (data) => {
    if (ws.readyState === WebSocket.OPEN) {
      ws.send(data);
    }
  });

  ws.on('close', () => client.end());
  client.on('close', () => ws.close());
  ws.on('error', () => client.destroy());
  client.on('error', () => ws.close());
});
