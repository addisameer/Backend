require('dotenv').config()
const express = require('express')
const app = express()


const githubData ={
    "login": "addisameer",
    "id": 122872814,
    "node_id": "U_kgDOB1Lj7g",
    "avatar_url": "https://avatars.githubusercontent.com/u/122872814?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/addisameer",
    "html_url": "https://github.com/addisameer",
    "followers_url": "https://api.github.com/users/addisameer/followers",
    "following_url": "https://api.github.com/users/addisameer/following{/other_user}",
    "gists_url": "https://api.github.com/users/addisameer/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/addisameer/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/addisameer/subscriptions",
    "organizations_url": "https://api.github.com/users/addisameer/orgs",
    "repos_url": "https://api.github.com/users/addisameer/repos",
    "events_url": "https://api.github.com/users/addisameer/events{/privacy}",
    "received_events_url": "https://api.github.com/users/addisameer/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Sameer Addi",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 13,
    "public_gists": 0,
    "followers": 1,
    "following": 0,
    "created_at": "2023-01-17T09:53:48Z",
    "updated_at": "2024-06-13T11:33:08Z"
  
}

app.get('/', (req, res) => {
  res.send('<h1>Hello Server!</h1>')
})

app.get('/github',(req,res)=> {
  res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})