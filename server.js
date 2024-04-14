// PokeAPI Link
// https://pokeapi.co/

// Documentation
// https://pokeapi.co/docs/v2

const axios = require("axios");
const path = require("path");
const express = require('express');
let ejs = require('ejs');
// Init Package
const app = express();

async function makeRequestFirstFunc() {
  // Configure request
  const config = {
    method: "get", // request method (get, post, ...)
    url: "https://pokeapi.co/api/v2/pokemon/pikachu", // API link

  };
  let resFirst = await axios(config);
  return resFirst;

}
makeRequestFirstFunc();

async function makeRequestSecondFunc() {
  // Configure request
  const config = {
    method: "get", // request method (get, post, ...)
    url: "https://pokeapi.co/api/v2/pokemon/eevee", // API link
  };
  let resSecond = await axios(config);
  return resSecond;

}
makeRequestSecondFunc();

async function makeRequestThirdFunc() {
  // Configure request
  const config = {
    method: "get", // request method (get, post, ...)
    url: "https://pokeapi.co/api/v2/pokemon/garchomp", // API link
  };
  let resThird = await axios(config);
  return resThird;
 
}
makeRequestThirdFunc();

//Routes

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get("/", async (req, res) => {
  let firstFunc = await makeRequestFirstFunc();
  let secondFunc =await makeRequestSecondFunc();
  let thirdFunc = await makeRequestThirdFunc();
  res.render("view", { title: "test" , fF:firstFunc.data , sF : secondFunc.data , tF : thirdFunc.data })
})




app.listen(3001, () => {
  console.log("http://localhost:3001")
});

// note : I tried it, and I didn't come out with a result.