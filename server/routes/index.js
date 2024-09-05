const express = require("express");
const router = express.Router();
const { validationResult } = require("express-validator");

const categoryRoutes = require("./category");
const productRoutes = require("./product");

// Controller
const UserController = require("../controllers/user");

// midleware
const authentication = require("../midleware/authentication");

// validator
const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            status: false,
            message: "Bad request",
            errors: errors.array(),
        });
    }
    next();
};
const {
    userLoginValidator,
    userRegisterValidator,
} = require("../validator/userValidator");

// router auth
router.post("/login", userLoginValidator, validate, UserController.loginUser);
router.post(
    "/register",
    userRegisterValidator,
    validate,
    UserController.registerUser
);

// router.use(authentication);
// Route untuk CRUD Category
router.use("/categories", authentication, categoryRoutes);
router.use("/products", authentication, productRoutes);

module.exports = router;
