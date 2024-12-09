const express = require("express");
const app = express();
const port = 3001;

let gitData = {
  login: "rahul-kap",
  id: 77953683,
  node_id: "MDQ6VXNlcjc3OTUzNjgz",
  avatar_url: "https://avatars.githubusercontent.com/u/77953683?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/rahul-kap",
  html_url: "https://github.com/rahul-kap",
  followers_url: "https://api.github.com/users/rahul-kap/followers",
  following_url:
    "https://api.github.com/users/rahul-kap/following{/other_user}",
  gists_url: "https://api.github.com/users/rahul-kap/gists{/gist_id}",
  starred_url: "https://api.github.com/users/rahul-kap/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/rahul-kap/subscriptions",
  organizations_url: "https://api.github.com/users/rahul-kap/orgs",
  repos_url: "https://api.github.com/users/rahul-kap/repos",
  events_url: "https://api.github.com/users/rahul-kap/events{/privacy}",
  received_events_url: "https://api.github.com/users/rahul-kap/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: null,
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 0,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2021-01-25T05:53:28Z",
  updated_at: "2024-02-10T13:31:06Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get('/test' ,(req, res) =>{
     res.send("<h1>Test 1 </h1>")
} )

app.get("/git/user/rk" , (req,res) =>{
   res.send(gitData)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
