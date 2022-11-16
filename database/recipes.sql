DROP TABLE IF EXISTS recipes;

CREATE TABLE recipes(
    id SERIAL PRIMARY KEY,
    -- creator INTEGER NOT NULL REFERENCES users(id),
    name VARCHAR,
    ingredients TEXT, 
    description TEXT,
    img_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);