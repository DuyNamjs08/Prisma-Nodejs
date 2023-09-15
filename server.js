const express = require("express");
const { PrismaClient, Prisma } = require("@prisma/client");

const prisma = new PrismaClient();

const app = express();

app.get("/", (req, res) => {
  res.json({
    name: "hello",
  });
});
const port = 3001;
app.listen(port, () => {
  console.log(`server running on ${port}`);
});
