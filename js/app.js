
const sampleMatches = [
  {team1:"India",team2:"Australia",score:"145/3 (15.2)",status:"Live",venue:"Mumbai"},
  {team1:"England",team2:"Pakistan",score:"-",status:"Upcoming",venue:"Lords"},
  {team1:"New Zealand",team2:"South Africa",score:"-",status:"Upcoming",venue:"Auckland"}
];

function renderHomeMatches(){
  const el = document.getElementById("matches");
  if(!el) return;
  el.innerHTML = sampleMatches.map(m => `
    <div class="card">
      <h3>${m.team1} vs ${m.team2}</h3>
      <div><b>Score:</b> ${m.score}</div>
      <div><b>Status:</b> ${m.status}</div>
      <div><b>Venue:</b> ${m.venue}</div>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", renderHomeMatches);
