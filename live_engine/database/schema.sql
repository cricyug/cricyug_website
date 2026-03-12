
CREATE TABLE live_matches(
 id SERIAL PRIMARY KEY,
 team1 TEXT,
 team2 TEXT,
 score TEXT,
 over TEXT,
 last_ball TEXT
);

CREATE TABLE ball_events(
 id SERIAL PRIMARY KEY,
 match_id INT,
 over_no INT,
 ball_no INT,
 event TEXT
);
