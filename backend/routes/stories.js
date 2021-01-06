const router = require("express").Router();
let Story = require("../models/story.model");

router.route("/").get((req, res) => {
    Story.find()
        .then(stories => res.json(stories))
        .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
    const title = req.body.title;
    const author_Username = req.body.author_Username;
    const genre = req.body.genre;
    const idea = req.body.idea;
    const likes = Number(req.body.likes);

    const newStory = new Story({title, author_Username, genre, idea, likes});

    newStory.save()
        .then(() => res.json("created story!"))
        .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
    Story.findById(req.params.id)
        .then(story => res.json(story))
        .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
    Story.findByIdAndDelete(req.params.id)
        .then(story => res.json("story deleted"))
        .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;