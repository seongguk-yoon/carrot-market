import { withIronSessionApiRoute } from "iron-session/next";
import client from "@libs/server/client";
import witeHandler, { ResponseType } from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  console.log(req.session);
  const { token } = req.body;

  const exists = await client.token.findUnique({
    where: {
      payload: token,
    },
    //  include: { user: true },
  });
  if (!exists) res.status(404).end();
  req.session.user = { id: exists?.userId };
  await req.session.save();
  res.status(200).end();
}

export default withIronSessionApiRoute(witeHandler("POST", handler), {
  cookieName: "carrot session",
  password: "3213124125125215123213123141241215413542535234534124124124124124",
});
