
const params=new URLSearchParams(location.search)
const id=params.get("id")
const API="https://cricyug-api.vercel.app/api/scorecard"
async function loadScorecard(){
const res=await fetch(API+"?id="+id)
const json=await res.json()
document.getElementById("scorecard").innerHTML="<pre>"+JSON.stringify(json.data,null,2)+"</pre>"
}
loadScorecard()
