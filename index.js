require('dotenv').config()
const express = require('express')
const app = express()




app.get('/', (req, res) => {
  res.send('<h1>Hiii Nidhi!</h1>')
})

app.get('/neha', (req, res) => {
  res.send('<h1>Hiii Neha!</h1>')
})
app.get('/vikash', (req, res) => {
  res.send('<h1>Hiii vikash!</h1>')
})
app.get('/sugam', (req, res) => {
  res.send('<h1>Hiii sugam!</h1>')
})
app.get('/signup',(req,res) =>{
    res.send('Signu Page')
})
app.get('/login',(req,res) => {
  res.send('Login Page')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})