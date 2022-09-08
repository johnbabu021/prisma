import { PrismaClient } from "@prisma/client";
import express, { Express, Request, Response } from "express";

const prisma = new PrismaClient();

const app: Express = express();
app.use(express.json());
app.post("/signup", async (req, res) => {
  const userData = await prisma.johny.create({
    data: {
      friends: req.body.friends,
    },
  });
  res.send(userData);
});
app.get("/", async (req, res) => {
  const data = await prisma.johny.findMany();
  //   console.log(data);
  res.send(data);
});
async function main() {
  // ... you will write your Prisma Client queries here
  //   const johny = await prisma.johny.update({
  //     where: { id: 1 },
  //     data: {
  //       friends: ["mari", "jeve"],
  //     },
  //   });

  // console.log(johny);
  const data = await prisma.johny.findMany();
  console.log(data);

  //   const insertJohny = await prisma.johny.create({
  //     data: {
  //       friends: ["dileep", "devean"],
  //     },
  //   });
  //   console.log(insertJohny);
}

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });

app.listen(3000, () => {
  console.log("app listening to port 3000");
});
