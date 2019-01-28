import express from 'express';
import http from 'http';

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'ci with travis' });
});


const port = '8000';
app.set('port', port);

const server = http.createServer(app);
server.listen(port);


export default server;
