const express = require("express");
const { PrismaClient } = require("@prisma/client");
const bodyParser = require("body-parser");
const router = require("./router /router");

const prisma = new PrismaClient();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.post("/users", async (req, res) => {
  try {
    const { name, email } = req.body;
    // Tạo người dùng mới bằng Prisma
    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    });
    console.log(req.body);
    res.json({
      status: 201,
      user: user,
      message: "create user success !",
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Error creating user" });
  }
});

app.use(router);
const port = 3001;
app.listen(port, () => {
  console.log(`server running on ${port}`);
});
