DROP TABLE IF EXISTS recipes;

CREATE TABLE recipes(
    id SERIAL PRIMARY KEY,
    creator INTEGER NOT NULL REFERENCES users(id),
    recipename VARCHAR,
    preptime TEXT,
    ingredients TEXT,
    description TEXT,
    img_url VARCHAR,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);