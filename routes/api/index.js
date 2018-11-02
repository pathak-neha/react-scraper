const router = require("express").Router();
const newsRoutes = require("./news");

// Book routes
router.use("/articles", newsRoutes);

module.exports = router;
