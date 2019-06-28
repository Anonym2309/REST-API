const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user');
const checkAuth = require('../middleware/check-auth');

router.get("/", UserController.user_get_all_users);

router.post('/signup', UserController.user_signup);

router.post('/login', UserController.user_login);

router.get("/:userId", UserController.user_get_by_id);

router.delete("/:userId", checkAuth, UserController.user_delete_by_id);

module.exports = router;