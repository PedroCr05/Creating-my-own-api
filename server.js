const express = require("express");
const PORT = process.env.PORT || 3001;

const app = express();

// localhost:3001/
app.get(`/`, (req, res) => {
    res.send(`You're a wizard, Harry!`)
})

// localhost:3001/favorite-food
app.get(`/favorite-food`, (req, res) => {
    res.send(` Favorite food is Takoyaki `);
})

app.get(`/favorite-movie`, (req, res) => {

})

// localhost:3001/about-me
app.get(`/about-me`, (req, res) => {
    res.json({ 
        name: `Pedro Cruz`, 
        age: 19 
    });
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});