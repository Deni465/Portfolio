// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getMatchingRecipes } from "../../lib/db/recipes";

type Data = any[];

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method === "GET") {
        // console.log("rows", rows);
        console.log(req.query);
        const { recipeName } = req.query;
        const rows = await getMatchingRecipes((recipeName as string) || "");
        res.status(200).json(rows || []);
    }
}
