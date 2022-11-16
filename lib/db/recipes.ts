import connection from "../db";

///////////////////// ADD /////////////////////

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
    ingredients: string,
    description: string,
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

///////////////////// SEARCH /////////////////////

export async function showLatestRecipe() {
    try {
        const results = await connection?.query(
            "SELECT * FROM recipes ORDER BY id DESC;"
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

///////////////////// SEARCH /////////////////////

export async function getRecipeById(id: string) {
    try {
        const results = await connection?.query(
            "SELECT * FROM recipes WHERE id = $1",
            [id]
        );
        return results?.rows[0];
    } catch (error) {
        console.log("error in getting recipe by id", error);
    }
}
