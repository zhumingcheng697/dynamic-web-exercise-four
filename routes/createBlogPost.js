const express = require("express");
const router = express.Router();

const firebase = require("firebase");

const db = firebase.firestore();
const blogPosts = db.collection("blogPosts");

const form = `
  <style>
    body {
      align-items: center;
      display: flex;
      justify-content: center;
      min-height: 100vh;
    }

    form {
      display: flex;
      flex-direction: column;
    }

    form * {
      margin: 5px 0;
    }
  </style>
  <form action="/create/submit">
    <input type="text" name="title" placeholder="Title" />
    <input type="text" name="author" placeholder="Author" />
    <input type="text" name="body" placeholder="Body" />
    <button type="submit">Submit Post</button>
  </form>
`;

router.get("/", (req, res) => res.send(form));

router.get("/submit", (req, res) => {
  const queryParam = req.query;
  const idFromTitle = queryParam.title.replace(/\s+/g, "-").toLowerCase();

  blogPosts
    .doc(idFromTitle)
    .set(queryParam)
    .then(() => res.send("Submission Succeeded"))
    .catch((e) => res.send(`Submission Failed: ${e}`));
});

module.exports = router;
