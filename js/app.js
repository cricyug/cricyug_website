
console.log("CricYug Platform Loaded")

async function loadMatches(){
 try{
   const res = await fetch('data/matches.json')
   const data = await res.json()
   const el = document.getElementById("liveMatches")
   if(!el) return
   el.innerHTML = data.map(m=>`
     <div class="card">
       <b>${m.match}</b>
       <div>Status: ${m.status}</div>
     </div>
   `).join("")
 }catch(e){
   console.log(e)
 }
}

document.addEventListener("DOMContentLoaded",loadMatches)
