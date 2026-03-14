
import json, os

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(BASE, 'backend', 'data')
FRONT = os.path.join(BASE, 'frontend')

for folder in ['players', 'teams', 'matches']:
    os.makedirs(os.path.join(FRONT, folder), exist_ok=True)

players = json.load(open(os.path.join(DATA, 'players.json'), encoding='utf-8'))
teams = json.load(open(os.path.join(DATA, 'teams.json'), encoding='utf-8'))
matches = json.load(open(os.path.join(DATA, 'matches.json'), encoding='utf-8'))

for p in players:
    open(os.path.join(FRONT, 'players', p['slug'] + '.html'), 'w', encoding='utf-8').write(f"<h1>{p['name']}</h1>")

for t in teams:
    open(os.path.join(FRONT, 'teams', t['slug'] + '.html'), 'w', encoding='utf-8').write(f"<h1>{t['name']}</h1>")

for m in matches:
    open(os.path.join(FRONT, 'matches', m['slug'] + '.html'), 'w', encoding='utf-8').write(f"<h1>{m['match']}</h1>")

print('CricYug SEO pages regenerated')
