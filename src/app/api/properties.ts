import { NextApiRequest, NextApiResponse } from "next";
import { PropertyList } from "../../../types/property"
import { property } from "../../../public/data/data.json"
export default function handler(req: NextApiRequest, res: NextApiResponse<PropertyList>) {
   res.status(200).json(property)
}

