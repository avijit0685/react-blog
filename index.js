var express = require("express");
var app = express();
const mongoose = require("mongoose");

const connect = mongoose
  .connect(
    "mongodb+srv://umongo:U4JVLVFvFVpxC0jO@reactblogdb.oqymn.mongodb.net/blogDB?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

// respond with "hello world" when a GET request is made to the homepage
app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(5000);
