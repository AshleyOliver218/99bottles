//import express
const express = require('express')

//instantiate
const app = express()
const port = 3000

//routes
app.get('/', (req, res) => { 
    res.send(`
      <h1>99 Bottles of beer on the wall</h1>
      <a href="/98" >take on down, pass it around </a>
    `);
  });

  app.get('/:numberOfBottles', (req, res) =>{
    if(req.params.numberOfBottles <= 0) {
        res.send(`<h1>There are no bottles of beer on the wall</h1>
        <a href="/">99 more beers!</a> `)
        
    } else {
        // let nextNumberOfBottles = req.params.numberOfBottles - 1
        console.log(req.params.numberOfBottles)
        res.send(`
        <h1>${req.params.numberOfBottles} Bottles of beer on the wall</h1>
        <h2>${req.params.numberOfBottles} Bottles of beer...</h2>
        <a href="/${req.params.numberOfBottles -1}">take on down, pass it around</a>
        `)
    }
  })

//listen
app.listen(port, () => {
    console.log(`listening on port, ${port}`)
})