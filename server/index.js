//////////////////////////
// Imports
//////////////////////////

const path = require("path");
const express = require("express");
require("dotenv").config();

//////////////////////////
// Constants
//////////////////////////

const port = 8080;
const pathToDistFolder = path.join(__dirname, "../frontend/dist");
const app = express();
const { API_KEY } = process.env;

//////////////////////////
// Middleware/Controllers
//////////////////////////

const serveStatic = express.static(pathToDistFolder);

//we make this asyncronous since we are fetching to the api
const serveGifs = async (req, res, next) => {
  try {
    const url = `https://api.giphy.com/v1/gifs/trending?limit=3&rating=g&api_key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    res.send(data);
  } catch (error) {
    res.status(503).send(error);
    //res.send(res.status(503));
  }
};

app.use(serveStatic);
app.get("/api/gifs", serveGifs);

//////////////////////////
// Listener
//////////////////////////

app.listen(port, () => console.log(`listening at http://localhost:${port}`));

//
