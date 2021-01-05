var mongoose = require("mongoose");
Schema = mongoose.Schema;

var storySchema = new Schema({
    Title: {type : String, required: true, trim : true},
    Author_Username: {type : String, required: true, index: { unique: true}, trim : true},
    Genre: {type : String, required: true},
    Idea: {type : String, required: true},
    likes: {type : Number},
}, {
    timestamps: true,
});

//module.export allows file reading when called
const Story = mongoose.model("Story", userSchema);
module.exports = Story;