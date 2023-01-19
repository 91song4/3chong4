const express = require("express");
const router = express.Router();

const shopMiddleware = require("../middleware/auth-middleware_shop.js");
const OwnerWashController = require("../controllers/owner_wash.controller");
const ownerWashController = new OwnerWashController();

router.get(
  "/wash_list/:wash_id",
  shopMiddleware,
  ownerWashController.getOwnerWashById
);
router.put(
  "/wash_list/:wash_id",
  shopMiddleware,
  ownerWashController.statusUpdate
);

module.exports = router;
