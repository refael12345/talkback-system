const express = require('express');
const { addToExistingComment, newComment, getAllComments } = require('../controllers/commentsControllers');
const router = express.Router();

router.post('/add-to-existing-comment', addToExistingComment);
router.post('/new-comment', newComment);
router.get('/get-all-comments', getAllComments);

module.exports = router;
