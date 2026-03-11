
async function loadScorecardPage() {
  const id = qs("id");
  if (!id) {
    document.getElementById("scorecardBox").textContent = "Match ID missing";
    return;
  }
  try {
    const res = await fetch(`${CricYug.apiBase}/scorecard?id=${encodeURIComponent(id)}`);
    const json = await res.json();
    const data = json.data ?? json;
    document.getElementById("scorecardBox").innerHTML =
      "<pre>" + escapeHtml(JSON.stringify(data, null, 2)) + "</pre>";
  } catch (e) {
    document.getElementById("scorecardBox").textContent = "Failed to load scorecard";
  }
}
window.addEventListener("DOMContentLoaded", loadScorecardPage);
