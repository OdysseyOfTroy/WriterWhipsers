const router = require("express").Router();
let Story = require("../models/story.model");


//get all stories
router.route("/").get((req, res) => {
    Story.find()
        .then(stories => res.json(stories))
        .catch(err => res.status(400).json("Error: " + err));
});

//add story
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

//get story by id
router.route("/:id").get((req, res) => {
    Story.findById(req.params.id)
        .then(story => res.json(story))
        .catch(err => res.status(400).json("Error: " + err));
});

//delete story by id
router.route("/:id").delete((req, res) => {
    Story.findByIdAndDelete(req.params.id)
        .then(story => res.json("story deleted"))
        .catch(err => res.status(400).json("Error: " + err));
});

//update story
router.route("/update/:id").post((req, res) => {
    Story.findById(req.params.id)
        .then(story => {
            story.title = req.body.title;
            story.author_Username = req.body.author_Username;
            story.genre = req.body.genre;
            story.idea = req.body.idea;
            story.likes = Number(req.body.likes);

            story.save()
                .then(() => res.json("story updated!"))
                .catch(err => res.status(400).json("Error: " + err));
        })
        .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;