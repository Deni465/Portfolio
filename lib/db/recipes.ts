import connection from "../db";

export async function getAllRecipes() {
    const results = await connection?.query("SELECT * FROM recipes;");
    console.log(results);
    return results?.rows;
}

export async function createRecipe(
    name: string,
    ingredients: any,
    description: any,
    img_url: string
) {
    const results = await connection?.query(
        "INSERT INTO recipes (name, ingredients, description, img_url) VALUES ($1, $2, $3, $4) RETURNING *;",
        [name, ingredients, description, img_url]
    );
    console.log(results);
    return results?.rows;
}
