
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/css', express.static(path.join(__dirname, '..', '..', 'frontend', 'css')));
app.use('/js', express.static(path.join(__dirname, '..', '..', 'frontend', 'js')));
app.use('/players', express.static(path.join(__dirname, '..', '..', 'frontend', 'players')));
app.use('/teams', express.static(path.join(__dirname, '..', '..', 'frontend', 'teams')));
app.use('/matches', express.static(path.join(__dirname, '..', '..', 'frontend', 'matches')));
app.use('/scorecard', express.static(path.join(__dirname, '..', '..', 'frontend', 'scorecard')));
app.use('/admin', express.static(path.join(__dirname, '..', '..', 'admin')));

app.get('/api/matches', (req, res) => {
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'matches.json'), 'utf8'));
  res.json(data);
});

app.get('/api/players', (req, res) => {
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'players.json'), 'utf8'));
  res.json(data);
});

app.get('/api/teams', (req, res) => {
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'teams.json'), 'utf8'));
  res.json(data);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'index.html'));
});

app.get('/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'index.html'));
});

app.get('/players.html', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'players.html'));
});

app.get('/teams.html', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'teams.html'));
});

app.get('/matches.html', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'matches.html'));
});

app.get('/news.html', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'news.html'));
});

app.listen(PORT, () => console.log('CricYug upgrade platform running on port ' + PORT));
