const express = require("express");
const router = express.Router();
const { processData } = require("../controllers/bfhlController");

// POST /bfhl
router.post("/", processData);

// GET /bfhl
router.get("/", (req, res) => {
  res.status(200).json({
    operation_code: 1,
  });
});

module.exports = router;
