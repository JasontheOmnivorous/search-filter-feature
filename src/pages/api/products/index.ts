import { prisma } from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";

const getHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const products = await prisma.products.findMany();

  return res.status(200).send(products);
};

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    getHandler(req, res);
  } else {
    res.status(405).send("Method not defined.");
  }
};

export default handler;
