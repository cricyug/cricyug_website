
CREATE TABLE matches(
 id SERIAL PRIMARY KEY,
 team1 TEXT,
 team2 TEXT,
 venue TEXT
);

CREATE TABLE players(
 id SERIAL PRIMARY KEY,
 name TEXT,
 country TEXT
);

CREATE TABLE teams(
 id SERIAL PRIMARY KEY,
 name TEXT,
 country TEXT
);
