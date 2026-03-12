
async function loadMatch(){
 const el=document.getElementById("match")
 try{
  const r=await fetch("http://localhost:5000/api/live")
  const j=await r.json()

  const m=j.data

  el.innerHTML=`
  <div class="card">
   <h3>${m.team1} vs ${m.team2}</h3>
   <div>Score: ${m.score}</div>
   <div>Over: ${m.over}</div>
   <div>Last Ball: ${m.lastBall}</div>
  </div>`

 }catch(e){
  el.innerHTML="Live engine offline"
 }
}

loadMatch()
setInterval(loadMatch,3000)
