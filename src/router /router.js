const express = require("express");
const { PrismaClient } = require("@prisma/client");
const router = express.Router();
const prisma = new PrismaClient();
router.get("/users", async (req, res) => {
  try {
    const listUser = await prisma.user.findMany();
    console.log("listUser", listUser);
    res.json({
      user: listUser,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      error: "ko the get user",
    });
  }
});
module.exports = router;
