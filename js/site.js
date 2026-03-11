
window.CricYug = {
  apiBase: "https://cricyug-api.vercel.app/api"
};

function escapeHtml(str = "") {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function qs(name) {
  const u = new URL(window.location.href);
  return u.searchParams.get(name);
}

function statusBadge(match) {
  if (match?.matchStarted && !match?.matchEnded) {
    return '<span class="statusBadge status-live">LIVE</span>';
  }
  if (match?.matchEnded) {
    return '<span class="statusBadge status-result">RESULT</span>';
  }
  return '<span class="statusBadge status-upcoming">UPCOMING</span>';
}
