
async function fetchJSON(path){
  const r = await fetch(path);
  if(!r.ok) throw new Error('Failed '+path);
  return r.json();
}

async function loadHome(){
  const el = document.getElementById('matches');
  if(!el) return;
  try{
    const matches = await fetchJSON('/api/matches');
    el.innerHTML = matches.map(m => `
      <div class="card">
        <b>${m.team1} vs ${m.team2}</b>
        <div>Score: ${m.score}</div>
        <div>Status: ${m.status}</div>
        <div class="small">${m.venue}</div>
      </div>
    `).join('');
  }catch(e){
    el.innerHTML = '<div class="card">Could not load matches.</div>';
  }
}

async function loadList(apiPath, targetId, renderer){
  const el = document.getElementById(targetId);
  if(!el) return;
  try{
    const data = await fetchJSON(apiPath);
    el.innerHTML = data.map(renderer).join('');
  }catch(e){
    el.innerHTML = '<div class="card">Could not load data.</div>';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadHome();
});
