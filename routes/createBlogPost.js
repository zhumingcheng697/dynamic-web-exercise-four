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
  <form>
    <input type="text" name="title" placeholder="Title" />
    <input type="text" name="author" placeholder="Author" />
    <input type="text" name="body" placeholder="Body" />
    <button type="submit">Submit Post</button>
  </form>
`;

router.get("/", (req, res) => res.send(form));

module.exports = router;
