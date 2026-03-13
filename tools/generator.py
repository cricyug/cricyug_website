
import json, os

base = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
data_dir = os.path.join(base, "data")
tpl_dir = os.path.join(base, "tools", "templates")

players = json.load(open(os.path.join(data_dir, "players.json"), encoding="utf-8"))
teams = json.load(open(os.path.join(data_dir, "teams.json"), encoding="utf-8"))
matches = json.load(open(os.path.join(data_dir, "matches.json"), encoding="utf-8"))

player_tpl = open(os.path.join(tpl_dir, "player.html"), encoding="utf-8").read()
team_tpl = open(os.path.join(tpl_dir, "team.html"), encoding="utf-8").read()
match_tpl = open(os.path.join(tpl_dir, "match.html"), encoding="utf-8").read()

def write_page(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)

for p in players:
    page = player_tpl
    for k, v in p.items():
        page = page.replace("{{"+k+"}}", str(v))
    filename = p["name"].lower().replace(" ", "-") + ".html"
    write_page(os.path.join(base, "players", filename), page)

for t in teams:
    page = team_tpl
    for k, v in t.items():
        page = page.replace("{{"+k+"}}", str(v))
    filename = t["team"].lower().replace(" ", "-") + ".html"
    write_page(os.path.join(base, "teams", filename), page)

for m in matches:
    page = match_tpl
    for k, v in m.items():
        page = page.replace("{{"+k+"}}", str(v))
    filename = m["team1"].lower().replace(" ", "-") + "-vs-" + m["team2"].lower().replace(" ", "-") + ".html"
    write_page(os.path.join(base, "matches", filename), page)

print("CricYug pages generated successfully")
