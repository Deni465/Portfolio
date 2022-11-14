// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { createRecipe, getAllRecipes } from "../../lib/db/recipes";

type Data = {
    name: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method === "POST") {
        // Process a POST request
        await createRecipe();
        res.status(201).json({ name: "John Doe" });
    } else {
        // Handle any other HTTP method
        await getAllRecipes();
        res.status(200).json({ name: "John Doe" });
    }
}
