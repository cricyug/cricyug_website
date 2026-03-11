
const API = "https://cricyug-api.vercel.app/api/matches";

async function loadMatches() {
  const container = document.getElementById("matches");
  try {
    const res = await fetch(API);
    const data = await res.json();
    const matches = Array.isArray(data.data) ? data.data : [];
    if (!matches.length) {
      container.innerHTML = '<div class="loadingCard">No matches available.</div>';
      return;
    }
    container.innerHTML = matches.map(match => `
      <a class="matchCard" href="match.html?id=${encodeURIComponent(match.id)}">
        <div class="matchTop">
          <span class="statusBadge">${match.matchStarted && !match.matchEnded ? "LIVE" : match.matchEnded ? "RESULT" : "UPCOMING"}</span>
        </div>
        <h3>${match.name || "Match"}</h3>
        <p class="teams">${Array.isArray(match.teams) ? match.teams.join(" vs ") : "Teams unavailable"}</p>
        <p class="venue">${match.venue || "Venue unavailable"}</p>
        <div class="divider"></div>
        <p class="statusText">${match.status || "Status unavailable"}</p>
      </a>
    `).join("");
  } catch (err) {
    container.innerHTML = '<div class="loadingCard">Failed to load matches.</div>';
  }
}
loadMatches();
setInterval(loadMatches, 120000);
