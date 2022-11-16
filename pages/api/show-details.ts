// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getRecipeById } from "../../lib/db/recipes";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "GET") {
        const { recipeId } = req.query;
        const row = await getRecipeById(recipeId as string);

        res.status(200).json(row);
    }
}
