
const params = new URLSearchParams(location.search);
const id = params.get("id");
const API = "https://cricyug-api.vercel.app/api/matches";

async function loadMatch() {
  try {
    const res = await fetch(API);
    const json = await res.json();
    const match = Array.isArray(json.data) ? json.data.find(m => String(m.id) === String(id)) : null;
    if (!match) {
      document.getElementById("title").innerText = "Match not found";
      return;
    }
    document.getElementById("title").innerText = match.name || "Match";
    document.getElementById("teams").innerText = Array.isArray(match.teams) ? match.teams.join(" vs ") : "";
    document.getElementById("status").innerText = match.status || "";
    document.getElementById("scoreBtn").href = "scorecard.html?id=" + encodeURIComponent(match.id);
  } catch (e) {
    document.getElementById("title").innerText = "Failed to load match";
  }
}
loadMatch();
