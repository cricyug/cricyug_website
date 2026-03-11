
const params=new URLSearchParams(location.search)
const id=params.get("id")

const API="https://cricyug-api.vercel.app/api/matches"

async function loadMatch(){

const res=await fetch(API)
const json=await res.json()

const match=json.data.find(m=>m.id===id)

if(!match)return

document.getElementById("title").innerText=match.name
document.getElementById("teams").innerText=match.teams.join(" vs ")
document.getElementById("status").innerText=match.status

document.getElementById("scoreBtn").href="scorecard.html?id="+match.id

}

loadMatch()
