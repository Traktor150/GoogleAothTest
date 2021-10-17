'use strict';

const express = require('express');
const router = express.Router();

const index_controller = require('../controller/homeController');

router.get('/', index_controller.index);
router.get('/loggedIn', index_controller.loggedIn);
router.get('/policy', index_controller.policy);
router.get('/terms', index_controller.terms);

module.exports = router;