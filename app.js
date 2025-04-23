// index.js
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Sita Ram Ji...');
});

app.get('/about', (req, res) => {
  res.send('About Us...');
});

app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}`);
});
