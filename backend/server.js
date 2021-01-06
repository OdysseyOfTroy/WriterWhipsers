const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.port || 9000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB connected")
});

//routes =======================================================================================

const usersRouter = require("./routes/users");
const storiesRouter = require("./routes/stories");
const commentsRouter = require("./routes/comments");

app.use("/users", usersRouter);
app.use("/stories", storiesRouter);
app.use("/comments", commentsRouter);

//startup =======================================================================================
app.listen(port, () => {
    console.log("Server is running on port:" + port)
});