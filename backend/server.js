
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const frontendDir = path.join(__dirname, '..', 'frontend');
const dataDir = path.join(__dirname, 'data');

app.get('/api/matches', (req, res) => {
  const data = JSON.parse(fs.readFileSync(path.join(dataDir, 'matches.json'), 'utf8'));
  res.json(data);
});

app.get('/api/players', (req, res) => {
  const data = JSON.parse(fs.readFileSync(path.join(dataDir, 'players.json'), 'utf8'));
  res.json(data);
});

app.get('/api/teams', (req, res) => {
  const data = JSON.parse(fs.readFileSync(path.join(dataDir, 'teams.json'), 'utf8'));
  res.json(data);
});

app.use(express.static(frontendDir));
app.use('/admin', express.static(path.join(__dirname, '..', 'admin')));

app.get('/', (req, res) => {
  res.sendFile(path.join(frontendDir, 'index.html'));
});

app.listen(PORT, () => {
  console.log('CricYug running on port ' + PORT);
});
