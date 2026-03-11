
const API="https://cricyug-api.vercel.app/api/matches"

async function loadMatches(){

const grid=document.getElementById("liveGrid")

try{

const res=await fetch(API)
const json=await res.json()

const matches=json.data||[]

grid.innerHTML=matches.map(m=>`
<a class="card" href="match.html?id=${m.id}">
<h3>${m.name}</h3>
<p>${m.status}</p>
</a>
`).join("")

}catch{
grid.innerHTML="Failed to load matches"
}

}

loadMatches()
