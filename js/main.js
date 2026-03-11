
async function loadHomeMatches() {
  const container = document.getElementById("matches");
  const featured = document.getElementById("featuredMatch");
  const statMatches = document.getElementById("statMatches");
  const lastUpdated = document.getElementById("lastUpdated");
  const q = (document.getElementById("searchInput")?.value || "").trim().toLowerCase();

  try {
    const res = await fetch(`${CricYug.apiBase}/matches`);
    const json = await res.json();
    let matches = Array.isArray(json.data) ? json.data : [];

    if (q) {
      matches = matches.filter(m =>
        (m.name || "").toLowerCase().includes(q) ||
        (m.venue || "").toLowerCase().includes(q) ||
        (Array.isArray(m.teams) ? m.teams.join(" ").toLowerCase().includes(q) : false)
      );
    }

    if (statMatches) statMatches.textContent = String(matches.length);
    if (lastUpdated) lastUpdated.textContent = `Last updated: ${new Date().toLocaleTimeString("en-IN")}`;

    if (!matches.length) {
      container.innerHTML = '<div class="loadingCard">No matches available.</div>';
      if (featured) featured.innerHTML = '<div class="loadingCard">No featured match available.</div>';
      return;
    }

    const top = matches.find(m => m.matchStarted && !m.matchEnded) || matches[0];

    if (featured) {
      featured.innerHTML = `
        <a class="matchCard" href="match.html?id=${encodeURIComponent(top.id)}">
          <div class="between">${statusBadge(top)} <span class="miniTag">Featured AI Match</span></div>
          <h3>${escapeHtml(top.name || "Match")}</h3>
          <p class="teams">${escapeHtml(Array.isArray(top.teams) ? top.teams.join(" vs ") : "")}</p>
          <p class="venue">${escapeHtml(top.venue || "Venue unavailable")}</p>
          <div class="divider"></div>
          <p class="muted">${escapeHtml(top.status || "Status unavailable")}</p>
        </a>`;
    }

    container.innerHTML = matches.map(match => `
      <a class="matchCard" href="match.html?id=${encodeURIComponent(match.id)}">
        <div class="matchTop">${statusBadge(match)}</div>
        <h3>${escapeHtml(match.name || "Match")}</h3>
        <p class="teams">${escapeHtml(Array.isArray(match.teams) ? match.teams.join(" vs ") : "Teams unavailable")}</p>
        <p class="venue">${escapeHtml(match.venue || "Venue unavailable")}</p>
        <div class="divider"></div>
        <p class="statusText">${escapeHtml(match.status || "Status unavailable")}</p>
      </a>
    `).join("");
  } catch (e) {
    container.innerHTML = '<div class="loadingCard">Failed to load matches.</div>';
    if (featured) featured.innerHTML = '<div class="loadingCard">Failed to load featured match.</div>';
  }
}

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("searchInput")?.addEventListener("input", loadHomeMatches);
  loadHomeMatches();
  setInterval(loadHomeMatches, 60000);
});
