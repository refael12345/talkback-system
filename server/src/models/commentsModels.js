const mongoose = require('mongoose');

const subcommentSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    commentTitle: {
        type: String,
        required: true,
    },
    commentText: {
        type: String,
        required: true,
    }
}, { _id: false });

const commentSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        index: true // Add index for better performance on queries
    },
    date: {
        type: Date,
        required: true,
        default: Date.now // Set default value
    },
    commentTitle: {
        type: String,
        required: true,
    },
    commentText: {
        type: String,
        required: true,
    },
    subcomments: [subcommentSchema]
}, { timestamps: true }); // Add timestamps for createdAt and updatedAt

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;