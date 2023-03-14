import { NextApiRequest, NextApiResponse } from "next";
import { firestore } from "lib/firebase";
export default function (req: NextApiRequest, res: NextApiResponse) {
  return res.json("probando");
}
