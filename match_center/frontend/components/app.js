
async function loadScorecard(){
 const el=document.getElementById("scorecard")
 try{
  const r=await fetch("http://localhost:5000/api/scorecard")
  const j=await r.json()

  const m=j.data

  el.innerHTML=`
  <div class="card">
   <h3>${m.team1} vs ${m.team2}</h3>
   <div>Score: ${m.score}</div>
   <div>Overs: ${m.overs}</div>
   <div>Top Batter: ${m.topBatter}</div>
   <div>Top Bowler: ${m.topBowler}</div>
  </div>`

 }catch(e){
  el.innerHTML="Match center offline"
 }
}

loadScorecard()
