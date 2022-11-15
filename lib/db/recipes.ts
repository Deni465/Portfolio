import connection from "../db";

export async function getAllRecipes() {
    try {
        const results = await connection?.query("SELECT * FROM recipes;");
        console.log(results);
        return results?.rows;
    } catch (error) {
        console.log("error in selecting all recipes", error);
    }
}

export async function createRecipe(
    name: string,
    ingredients: any,
    description: any,
    img_url: string
) {
    try {
        const results = await connection?.query(
            "INSERT INTO recipes (name, ingredients, description, img_url) VALUES ($1, $2, $3, $4) RETURNING *;",
            [name, ingredients, description, img_url]
        );
        console.log(results);
        return results?.rows;
    } catch (error) {
        console.log("error in creating recipe", error);
    }
}

export async function showLatestRecipe() {
    try {
        const results = await connection?.query(
            "SELECT * FROM recipes ORDER BY id DESC LIMIT 6;"
        );
        return results?.rows;
    } catch (error) {
        console.log("error in getting latest recipes", error);
    }
}

export async function getMatchingRecipes(name: string) {
    try {
        const results = await connection?.query(
            "SELECT * FROM recipes WHERE name ILIKE $1",
            [name + "%"]
        );
        return results?.rows;
    } catch (error) {
        console.log("error in getting matching recipes", error);
    }
}
