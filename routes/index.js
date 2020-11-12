const express = require("express");
const router = express.Router();

const firebase = require("firebase");

const db = firebase.firestore();
const blogPosts = db.collection("blogPosts");

router.get("/", (req, res) => {
  const blogPostsArray = [];

  blogPosts
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        blogPostsArray.push(doc.data());
      });
      return res.send(blogPostsArray);
    })
    .catch((e) => {
      return res.send(e);
    });
});

module.exports = router;
