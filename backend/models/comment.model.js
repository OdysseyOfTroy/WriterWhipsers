var mongoose = require("mongoose");
Schema = mongoose.Schema;

var commentSchema = new Schema({
    story_id: {type : String, required: true, trim : true},
    author_Username: {type : String, required: true, trim : true},
    comment: {type : String, required: true},
}, {
    timestamps: true,
});

//module.export allows file reading when called
const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;