// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getMatchingRecipes, showLatestRecipe } from "../../lib/db/recipes";

type Data = {
    message: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method === "GET") {
        console.log("req.query", req.query);
        const rows = await showLatestRecipe();
        res.status(200).json(rows);
    } else {
        await getMatchingRecipes(name);
        res.status(200).json({ message: "getting the matches" });
    }
}
