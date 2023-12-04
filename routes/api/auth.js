const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers/auth");

const {
  validateBodyForPost,
  //   validateBodyForPatch,
  //   invalidId,
} = require("../../middleWare");

const schemas = require("../../schemas/auth");

router.post(
  "/register",
  validateBodyForPost(schemas.registerSchema),
  ctrl.register
);

module.exports = router;
