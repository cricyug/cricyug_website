
import json, os

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(BASE, 'backend', 'data')
FRONT = os.path.join(BASE, 'frontend')

players = json.load(open(os.path.join(DATA, 'players.json'), encoding='utf-8'))
teams = json.load(open(os.path.join(DATA, 'teams.json'), encoding='utf-8'))
matches = json.load(open(os.path.join(DATA, 'matches.json'), encoding='utf-8'))

os.makedirs(os.path.join(FRONT, 'players'), exist_ok=True)
os.makedirs(os.path.join(FRONT, 'teams'), exist_ok=True)
os.makedirs(os.path.join(FRONT, 'matches'), exist_ok=True)

for p in players:
    html = f"""<!DOCTYPE html><html><head><meta charset='UTF-8'><title>{p['name']} | CricYug</title><link rel='stylesheet' href='/css/style.css'></head><body><div class='container'><h1>{p['name']}</h1><div class='card'>Country: {p['country']}</div><div class='card'>Runs: {p['runs']}</div></div></body></html>"""
    open(os.path.join(FRONT, 'players', p['slug'] + '.html'), 'w', encoding='utf-8').write(html)

for t in teams:
    html = f"""<!DOCTYPE html><html><head><meta charset='UTF-8'><title>{t['team']} | CricYug</title><link rel='stylesheet' href='/css/style.css'></head><body><div class='container'><h1>{t['team']}</h1><div class='card'>Captain: {t['captain']}</div></div></body></html>"""
    open(os.path.join(FRONT, 'teams', t['slug'] + '.html'), 'w', encoding='utf-8').write(html)

for m in matches:
    html = f"""<!DOCTYPE html><html><head><meta charset='UTF-8'><title>{m['team1']} vs {m['team2']} | CricYug</title><link rel='stylesheet' href='/css/style.css'></head><body><div class='container'><h1>{m['team1']} vs {m['team2']}</h1><div class='card'>Venue: {m['venue']}</div><div class='card'>Score: {m['score']}</div></div></body></html>"""
    open(os.path.join(FRONT, 'matches', m['slug'] + '.html'), 'w', encoding='utf-8').write(html)

print('CricYug pages generated successfully')
