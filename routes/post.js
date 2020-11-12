const express = require("express");
const router = express.Router();

const firebase = require("firebase");

const db = firebase.firestore();
const blogPosts = db.collection("blogPosts");

router.get("/", (req, res) => {
  return res.send("No Id Provided");
});

router.get("/:id", (req, res) => {
  const queryId = req.params.id;

  blogPosts
    .doc(queryId)
    .get()
    .then((doc) => {
      if (doc.exists) {
        return res.send(doc.data());
      } else {
        return res.send("Document does not exist");
      }
    })
    .catch((e) => {
      return res.send(e);
    });
});

module.exports = router;
