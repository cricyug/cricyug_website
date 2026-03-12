
async function loadMatches(){
 const el=document.getElementById("matches")
 try{
  const r=await fetch("http://localhost:5000/api/matches")
  const j=await r.json()

  el.innerHTML=j.data.map(m=>`
   <div class="card">
     <b>${m.team1} vs ${m.team2}</b>
     <div>Status: ${m.status}</div>
     <div>Score: ${m.score}</div>
     <div>Venue: ${m.venue}</div>
   </div>
  `).join("")
 }catch(e){
  el.innerHTML="API offline"
 }
}

loadMatches()
