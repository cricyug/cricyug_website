
async function loadHome(){
  try{
    const res = await fetch('/api/matches');
    const data = await res.json();
    const el = document.getElementById('liveMatches');
    if(!el) return;
    el.innerHTML = data.map(m => `
      <div class="card">
        <b>${m.match}</b>
        <div>Status: ${m.status}</div>
        <div>Score: ${m.score}</div>
        <small>${m.venue}</small>
      </div>
    `).join('');
  }catch(e){
    const el = document.getElementById('liveMatches');
    if(el) el.innerHTML = '<div class="card">Could not load live matches.</div>';
  }
}
document.addEventListener('DOMContentLoaded', loadHome);
