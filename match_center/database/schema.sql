
CREATE TABLE scorecards(
 id SERIAL PRIMARY KEY,
 team1 TEXT,
 team2 TEXT,
 score TEXT,
 overs TEXT,
 top_batter TEXT,
 top_bowler TEXT
);

CREATE TABLE player_stats(
 id SERIAL PRIMARY KEY,
 player TEXT,
 runs INT,
 wickets INT
);
