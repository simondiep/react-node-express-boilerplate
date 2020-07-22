import express from "express";

const app = express();
const server = require("http").createServer(app);

const PORT = process.env.PORT || 3001;
const path = require("path");

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.json());
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.get("/username", function (req, res, next) {
  res.send("Simon");
});

// start the app
server.listen(PORT, (error) => {
  if (error) {
    return console.log("something bad happened", error);
  }
  console.log("listening on " + PORT + "...");
});
