
const params = new URLSearchParams(location.search);
const id = params.get("id");
const API = "https://cricyug-api.vercel.app/api/scorecard?id=";

async function loadScore() {
  try {
    const res = await fetch(API + encodeURIComponent(id || ""));
    const json = await res.json();
    document.getElementById("scorecard").innerHTML =
      "<pre>" + JSON.stringify(json.data ?? json, null, 2) + "</pre>";
  } catch (e) {
    document.getElementById("scorecard").innerText = "Failed to load scorecard.";
  }
}
loadScore();
