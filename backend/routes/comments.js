const router = require("express").Router();
let Comment = require("../models/comment.model");

router.route("/").get((req, res) => {
    Comment.find()
        .then(comments => res.json(comments))
        .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
    const story_Title = req.body.story_Title;
    const author_Username = req.body.author_Username;
    const comment = req.body.comment;


    const newComment = new Comment({story_Title, author_Username, comment});

    newComment.save()
        .then(() => res.json("created comment!"))
        .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;