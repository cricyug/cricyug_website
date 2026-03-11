
async function loadMatchPage() {
  const id = qs("id");
  if (!id) {
    document.getElementById("matchTitle").textContent = "Match ID missing";
    return;
  }
  try {
    const res = await fetch(`${CricYug.apiBase}/match?id=${encodeURIComponent(id)}`);
    const json = await res.json();
    const match = json.data || null;

    if (!match) {
      document.getElementById("matchTitle").textContent = "Match not found";
      return;
    }

    document.getElementById("matchTitle").textContent = match.name || "Match";
    document.getElementById("matchTeams").textContent = Array.isArray(match.teams) ? match.teams.join(" vs ") : "Teams unavailable";
    document.getElementById("matchStatus").textContent = match.status || "Status unavailable";
    document.getElementById("matchVenue").textContent = match.venue || "Venue unavailable";
    document.getElementById("matchType").textContent = match.matchType || "N/A";
    document.getElementById("matchDate").textContent = match.date || "N/A";
    document.getElementById("scoreBtn").href = `scorecard.html?id=${encodeURIComponent(id)}`;

    const score = Array.isArray(match.score) ? match.score : [];
    document.getElementById("scoreWrap").innerHTML = score.length
      ? score.map(s => `<div class="infoRow"><div><div class="infoLabel">${escapeHtml(s.inning || "Inning")}</div><div class="infoValue">${escapeHtml((s.r ?? "-") + "/" + (s.w ?? "-"))}</div></div><div class="infoValue">${escapeHtml((s.o ?? "-") + " ov")}</div></div>`).join("")
      : '<div class="loadingCard">Score not available yet.</div>';

    let insight = "Pre-match data is loading.";
    if (match.matchEnded) insight = "Completed match. CricYug AI marks this as a finished contest.";
    else if (match.matchStarted) insight = "Live match detected. CricYug AI will track momentum and pressure.";
    document.getElementById("aiInsight").textContent = insight;
  } catch (e) {
    document.getElementById("matchTitle").textContent = "Failed to load match";
  }
}
window.addEventListener("DOMContentLoaded", loadMatchPage);
