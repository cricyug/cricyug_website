
async function loadTeam(){
 const el=document.getElementById("team")
 try{
  const r=await fetch("http://localhost:5000/api/team")
  const j=await r.json()

  const t=j.data

  el.innerHTML=`
  <div class="card">
   <h3>${t.name}</h3>
   <div>Country: ${t.country}</div>
   <div>Matches: ${t.matches}</div>
   <div>Wins: ${t.wins}</div>
   <div>Ranking: ${t.ranking}</div>
  </div>`

 }catch(e){
  el.innerHTML="Team system offline"
 }
}

loadTeam()
