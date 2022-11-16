// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { createRecipe, getAllRecipes } from "../../lib/db/recipes";

type Data = {
    message: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method === "POST") {
        // console.log("req.body", req.body);

        const { name, ingredients, description, image } = req.body;
        // Process a POST request
        await createRecipe(name, ingredients, description, image);
        res.status(201).json({ message: "Successful inserting" });
    } else {
        // Handle any other HTTP method
        await getAllRecipes();
        res.status(200).json({ message: "Successful calling all recipes" });
    }
}
