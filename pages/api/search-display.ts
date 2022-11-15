// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getMatchingRecipes } from "../../lib/db/recipes";

type Data = {
    name: string;
};


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method === "GET") {
        // console.log("rows", rows);

        const rows = await getMatchingRecipes(name);
        res.status(200).json(rows);
    }
}
