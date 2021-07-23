const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.render('index.ejs')
})
app.listen(401, function (err) {
  if (err) console.log('HMMM... SOMETHING WENT WRONG')
  else console.log('NOW LISTENING ON localhost:401')
})