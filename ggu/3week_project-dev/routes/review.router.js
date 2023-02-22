const express = require("express");
const router = express.Router();
const shopmiddleware = require("../middleware/auth-middleware_shop");

const ReviewController = require('../controllers/review.controller');
const reviewController = new ReviewController();

router.get('/shopReview',shopmiddleware ,reviewController.reviewList);

module.exports = router;