const express = require("express");
const PORT = process.env.PORT || 3001;

const app = express();

// localhost:3001/
app.get(`/`, (req, res) => {
    res.send(`You're a wizard, Harry!`)
});

// localhost:3001/favorite-food
app.get(`/favorite-food`, (req, res) => {
    res.send(`Favorite food is Takoyaki!`);
});

// localhost:3001/favorite-movie
app.get(`/favorite-movie`, (req, res) => {
    res.send(`My favorite movie would probably be Chappie!`)
});

// localhost:3001/contact
app.get(`/contact`, (req, res) => {
    res.send(`If by any chance you are reaching to me. My best source of contact is through my email:`)
});

// localhost:3001/about-me
app.get(`/about-me`, (req, res) => {
    res.json({ 
        name: `Pedro Cruz`, 
        age: 19 
    });
});



// localhost:3001/movies
app.get(`/movies`, (req, res) => {
    const movies =
    [{
        title: `Free Guy`,
        releaseDate: `August 13, 2021`,
        duration: `155 minutes`,
      },
      {
        title: `Punisher: War Zone`,
        releaseDate: `December 5, 2008`,
        duration: `107 minutes`,
      },
      {
        title: `The Wolverine`,
        releaseDate: `July 26, 2013`,
        duration: `126 minutes`,
    }];
    res.json(movies.find((movie) => movie.title === req.query.title));
});

// localhost:3001/movies
app.get("/article/:slug", (req, res) => {
  res.send(req.params.slug);
});

// localhost:3001/message
app.get("/message/:id", (request, response) => {
  console.log(` Getting a message with the id of ${request.params.id} `);
  response.send({ msg: `Message with an id of ${request.params.id} found.` });
});

// localhost:3001/dogs
app.get(`/dogs`, (req, res) => {
    res.send(`Australian Cattle`);
});

// localhost:3001/cats
app.get(`/cats/:catName`, (req, res) => {
    res.send(`My cat's name is ${req.params.catName}!`);
});

// localhost:3001/towns
app.post(`/towns`, (req, res) => {
    res.json({
        town: `Arleta`
    });
});

// localhost:3001/profile/update/pedrocr05
app.put(`/profile/update/:username`, (req, res) => {
    res.send(`User profile with the username of ${req.params.username} has been updated.`);
});

app.put(`profile/update/:firstName/:lastName/:age`, (req, res) => {

    res.send(`User profile name has been updated with ${firstName}, ${lastName}, with the age of ${age}`);
})

app.get(`/*`, (req, res) => {
    res.send(`404-page-not-found`);
})

// localhost: 3001/tacos/hard-shell/beef
app.delete(`/tacos/:type/:tacoId`, (req, res) => {
    res.send(`I deleted the ${req.params.type} with an id of ${req.query.tacoId}.`);
});

app.get("/find", (request, response) => {
//   console.log(
//     `Finding someone with a name of ${request.query.myName} and an age of ${request.query.myAge}`
//   );
//   response.send({
//     msg: `${request.query.myName} is ${request.query.myAge} years old.`,
//   });
    response.send(request.query);
});



app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});