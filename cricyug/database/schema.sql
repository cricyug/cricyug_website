
CREATE TABLE matches(id SERIAL PRIMARY KEY,team1 TEXT,team2 TEXT,score TEXT,status TEXT,venue TEXT);
CREATE TABLE players(id SERIAL PRIMARY KEY,name TEXT,country TEXT,runs INT,wickets INT);
CREATE TABLE teams(id SERIAL PRIMARY KEY,name TEXT,country TEXT);
CREATE TABLE commentary(id SERIAL PRIMARY KEY,match_id INT,over_no INT,ball_no INT,event TEXT);
