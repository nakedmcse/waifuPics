import express from "express";

const router = express.Router();

router.post("/", function (req, res, next) {
    res.send("respond with a resource");
});

export default router;
