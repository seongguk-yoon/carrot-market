import client from "@libs/server/client";
import witeHandler from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, phone } = req.body;
  const payload = phone ? { phone: +phone } : { email };

  const user = await client.user.upsert({
    where: {
      ...payload,
    },
    create: {
      name: "Gguk",
      ...payload,
    },

    update: {},
  });
  console.log(user);

  // if (phone) {
  //   user = await client.user.upsert({
  //     where: {
  //       phone: +phone,
  //     },
  //     create: {
  //       name: "seong",
  //       phone: +phone,
  //     },
  //     update: {},
  //   });
  // } else if (email) {
  //   user = await client.user.upsert({
  //     where: {
  //       email,
  //     },
  //     create: {
  //       name: "네이놈",
  //       email,
  //     },
  //     update: {},
  //   });
  // }

  // if (email) {
  //   user = await client.user.findUnique({
  //     where: {
  //       email,
  //     },
  //   });
  //   if (user) console.log("이미유저네요?");
  //   if (!user) {
  //     console.group("없읍니다. 생성완료요~");
  //     user = await client.user.create({
  //       data: {
  //         name: "seongguk",
  //         email,
  //       },
  //     });
  //   }
  //   console.log(user);
  // }

  // if (phone) {
  //   user = await client.user.findUnique({
  //     where: {
  //       phone: +phone,
  //     },
  //   });
  //   if (user) console.log("이미유저네요?");
  //   if (!user) {
  //     console.group("없읍니다. 생성완료요~");
  //     user = await client.user.create({
  //       data: {
  //         name: "seongguk",
  //         phone: +phone,
  //       },
  //     });
  //   }
  //   console.log(user);
  // }

  return res.status(200).end();
}

export default witeHandler("POST", handler);
