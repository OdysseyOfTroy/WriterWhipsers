var mongoose = require("mongoose");
Schema = mongoose.Schema;

var commentSchema = new Schema({
    Story_Title: {type : String, required: true, trim : true},
    Author_Username: {type : String, required: true, index: { unique: true}, trim : true},
    Comment: {type : String, required: true},
}, {
    timestamps: true,
});

//module.export allows file reading when called
const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;