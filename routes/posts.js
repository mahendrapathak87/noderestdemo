const express = require('express');

const postsController = require('../controllers/posts')

const router = express.Router();

router.get('/posts',postsController.postsController);

router.post('/posts',postsController.savePostsController);

module.exports = router;