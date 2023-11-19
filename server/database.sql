CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  username VARCHAR(28) not NULL UNIQUE,
  passhash VARCHAR NOT NULL
);

INSERT INTO users(username, passhash) values($1, $2);