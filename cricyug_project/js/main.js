
const API="https://cricyug-api.vercel.app/api/matches"
const grid=document.getElementById("liveGrid")
async function loadMatches(){
try{
const res=await fetch(API)
const json=await res.json()
const matches=json.data||[]
grid.innerHTML=matches.map(m=>`
<a class="card" href="match.html?id=${m.id}">
<h3>${m.name}</h3>
<p>${m.teams.join(" vs ")}</p>
<p>${m.status}</p>
</a>`).join("")
}catch(e){grid.innerHTML="Matches failed to load"}
}
loadMatches()
