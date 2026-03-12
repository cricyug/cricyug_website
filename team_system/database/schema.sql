
CREATE TABLE teams(
 id SERIAL PRIMARY KEY,
 name TEXT,
 country TEXT,
 matches INT,
 wins INT,
 ranking INT
);

CREATE TABLE squad(
 id SERIAL PRIMARY KEY,
 team_id INT,
 player TEXT,
 role TEXT
);
