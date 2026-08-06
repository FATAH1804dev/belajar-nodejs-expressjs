import express from "express";

const app = express();
const port = 3000;

app.listen(port, () => {
  console.info(`Server running on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/eka", (req, res) => {
  res.send("Hello eka");
});
