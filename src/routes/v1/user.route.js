const express = require("express");
const validate = require("../../middlewares/validate");
const userValidation = require("../../validations/user.validation");
const userController = require("../../controllers/user.controller");
const router = express.Router();
const auth = require("../../middlewares/auth");
// TODO: CRIO_TASK_MODULE_UNDERSTANDING_BASICS - Implement a route definition for `/v1/users/:userId`
router.get(
    "/:userId",
    // CRIO_SOLUTION_START_MODULE_AUTH
    auth,
    // CRIO_SOLUTION_END_MODULE_AUTH
    validate(userValidation.getUser),
    userController.getUser
  );

router.put(
  "/:userId",
  auth,
  validate(userValidation.setAddress),
  userController.setAddress
);

module.exports = router;
