const express = require("express");
const app = express();
const port = 3000;

const jokes = [
  {
    id: 1,
    title: "Joke One ",
    content: "this is first Joke ",
  },
  {
    id: 2,
    title: "Joke two ",
    content: "this is second Joke ",
  },
  {
    id: 3,
    title: "Joke three ",
    content: "this is thired Joke ",
  },
  {
    id: 4,
    title: "Joke Four ",
    content: "this is fourth Joke ",
  },
  {
    id: 5,
    title: "Joke five ",
    content: "this is fifth Joke ",
  },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get('/api/jokes' , (req, res) =>{
      res.send(jokes)
})

app.get("/api/age", (req, res) => {
   res.send("22")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
