// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getMatchingRecipes, showLatestRecipe } from "../../lib/db/recipes";

// type Data = {
//     message: string;
// };
// const rows: {
//     name?: string;
//     ingredients?: string;
//     description?: string;
//     img_url?: string;
// } = { name: "", ingredients: "", description: "", img_url: "" };

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "GET") {
        // console.log("rows", rows);
        const rows = await showLatestRecipe();
        res.status(200).json(rows);
    }
}
