const Comment = require('../models/commentsModels');

const addToExistingComment = async (req, res) => {
    const { newComment, commentId } = req.body;
    try {
        const existComment = await Comment.findById(commentId);
        if (!existComment) return res.status(400).json({ success: false, error: 'No comment found' });

        const _newComment = new Comment({ ...newComment, date: new Date() });
        existComment.subcomments.push(_newComment);

        await existComment.save();
        res.json({ success: true, data: existComment });
    } catch (e) {
        res.status(400).json({ success: false, error: e.toString() });
    }
};

const newComment = async (req, res) => {
    const { newComment } = req.body;
    try {
        const comment = new Comment({ ...newComment, date: new Date() });
        await comment.save();
        res.json({ success: true, data: comment });
    } catch (e) {
        res.status(400).json({ success: false, error: e.toString() });
    }
};

const getAllComments = async (req, res) => {
    try {
        const allComments = await Comment.find();
        res.json({ success: true, data: allComments });
    } catch (e) {
        res.status(400).json({ success: false, error: e.toString() });
    }
};

module.exports = {
    addToExistingComment,
    newComment,
    getAllComments
};
