var mongoose = require("mongoose");
Schema = mongoose.Schema;

var storySchema = new Schema({
    title: {type : String, required: true, trim : true},
    author_Username: {type : String, required: true, trim : true},
    genre: {type : String, required: true},
    idea: {type : String, required: true},
    likes: {type : Number},
}, {
    timestamps: true,
});

//module.export allows file reading when called
const Story = mongoose.model("Story", storySchema);
module.exports = Story;