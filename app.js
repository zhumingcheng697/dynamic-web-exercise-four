const express = require("express");
const firebase = require("firebase");

const app = express();
const port = Number(process.env.PORT) || 4000;

const firebaseConfig = {
  apiKey: "AIzaSyDFfaEAriMEB07dFW1IhSzx0MfzGraF7JE",
  authDomain: "dynamic-web-exercise-four-mz.firebaseapp.com",
  databaseURL: "https://dynamic-web-exercise-four-mz.firebaseio.com",
  projectId: "dynamic-web-exercise-four-mz",
  storageBucket: "dynamic-web-exercise-four-mz.appspot.com",
  messagingSenderId: "30300233541",
  appId: "1:30300233541:web:98acb0571efc2adf04e82c",
};

firebase.initializeApp(firebaseConfig);

const indexRoute = require("./routes/index");
const postRoute = require("./routes/post");
const createRoute = require("./routes/createBlogPost");

app.use("/", indexRoute);
app.use("/post", postRoute);
app.use("/create", createRoute);

app.listen(port, () => {
  console.log(`Exercise Four is running at localhost:${port}`);
});
