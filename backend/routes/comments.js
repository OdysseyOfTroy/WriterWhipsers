const router = require("express").Router();
let Comment = require("../models/comment.model");

router.route("/").get((req, res) => {
    Comment.find()
        .then(comments => res.json(comments))
        .catch(err => res.status(400).json("Error: " + err));
});

//get comments by story_id
router.route("/:story_id").get((req, res) => {
    Comment.find({story_id: req.params.story_id})
        .then(comments => res.json(comments))
        .catch(err => res.status(400).json("Error: " + err));
});

//add comments to stories
router.route("/add").post((req, res) => {
    const story_id = req.body.story_id;
    const author_Username = req.body.author_Username;
    const comment = req.body.comment;


    const newComment = new Comment({story_id, author_Username, comment});

    newComment.save()
        .then(() => res.json("created comment!"))
        .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;