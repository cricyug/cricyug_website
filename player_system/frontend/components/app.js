
async function loadPlayer(){
 const el=document.getElementById("player")
 try{
  const r=await fetch("http://localhost:5000/api/player")
  const j=await r.json()

  const p=j.data

  el.innerHTML=`
  <div class="card">
   <h3>${p.name}</h3>
   <div>Country: ${p.country}</div>
   <div>Matches: ${p.matches}</div>
   <div>Runs: ${p.runs}</div>
   <div>Wickets: ${p.wickets}</div>
  </div>`

 }catch(e){
  el.innerHTML="Player system offline"
 }
}

loadPlayer()
