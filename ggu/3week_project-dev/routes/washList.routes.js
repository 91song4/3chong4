const express = require("express");
const router = express.Router();
const shopmiddleware = require("../middleware/auth-middleware_shop");

const WashListController = require("../controllers/wash_list.controller");
const washListController = new WashListController();
// const OwnerWashController = require("../controllers/owner_wash.controller");
// const ownerWashController = new OwnerWashController();

router.get("/wash_list", shopmiddleware, washListController.findWashAll);

router.put("/wash_list", shopmiddleware, washListController.statusUpdate);

module.exports = router;
