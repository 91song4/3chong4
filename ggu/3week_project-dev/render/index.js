const { Router } = require("express");
const express = require("express");
const app = express();
const router = express.Router();
const { cookeParser } = require("cookie-parser");

router.get("/", (req, res) => {
  res.render("login.ejs");
});
router.get("/mypage", (req, res) => {
  res.render("mypage.ejs");
});
router.get("/laundry_add", (req, res) => {
  res.render("laundry_add.ejs");
});
router.get("/my_info_edit", (req, res) => {
  res.render("my_info_edit.ejs");
});
router.get("/my_info_edit_shop", (req, res) => {
  res.render("my_info_edit_shop.ejs");
});
router.get("/my_review", (req, res) => {
  res.render("my_review.ejs");
});
router.get("/register", (req, res) => {
  res.render("register.ejs");
});
router.get("/review_write", (req, res) => {
  res.render("review_write.ejs");
});
router.get("/shop_review", (req, res) => {
  res.render("shop_review.ejs");
});
router.get("/shop_wash_list", (req, res) => {
  res.render("shop_wash_list.ejs");
});
router.get("/shop_wash_status", (req, res) => {
  res.render("shop_wash_status.ejs");
});
router.get("/logout", (req, res) => {
  res.clearCookie("id");
  res.clearCookie("token");
  res.clearCookie("pw");
  res.render("logout.ejs");
});

module.exports = router;
