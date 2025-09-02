const express = require("express");
const app = express();
const port = 3000;


app.get("/greetings/:username", (req, res) => {
    const { username } = req.params;

    const responses = [
        `Hello there, ${username}!`,
        `What a delight it is to see you once more, ${username}.`,
        `Warm greetings, ${username}!`,
        `Welcome back, ${username}, hope you’re having a wonderful day!`
    ];

    // Pick one at random for variety
    const message = responses[Math.floor(Math.random() * responses.length)];

    res.send(message);
});



app.get("/roll/:number", (req, res) => {
    const { number } = req.params;


    const NaN = parseInt(number, 10);
    if (isNaN(NaN)) {
        return res.send("You must specify a number.");
    }


    const rolled = Math.floor(Math.random() * (max + 1));

    res.send(`You rolled a ${rolled}.`);
});



app.get("/collectibles/:item", (req, res) => {
    const collectibles = [
        { name: 'shiny ball', price: 5.95 },
        { name: 'autographed picture of a dog', price: 10 },
        { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
    ];

    const { item } = req.params;
    const index = parseInt(item, 10);


    if (isNaN(index )|| index < 0 || index >= collectibles.length) {
        return res.send("This item is not yet in stock. Check back soon!");
    } else {
         const item = collectibles[index];
        return res.send(`So, you want the ${item.name}? For ${item.price}, it can be yours!`);

    }
})




const shoes = [
  { name: "Birkenstocks", price: 50, type: "sandal" },
  { name: "Air Jordans", price: 500, type: "sneaker" },
  { name: "Air Mahomeses", price: 501, type: "sneaker" },
  { name: "Utility Boots", price: 20, type: "boot" },
  { name: "Velcro Sandals", price: 15, type: "sandal" },
  { name: "Jet Boots", price: 1000, type: "boot" },
  { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];


app.get("/shoes", (req, res) => {
  let { "min-price": minPrice, "max-price": maxPrice, type } = req.query;

  let filteredShoes = shoes;

  if (minPrice) {
    filteredShoes = filteredShoes.filter(shoe => shoe.price >= parseFloat(minPrice));
  }

  if (maxPrice) {
    filteredShoes = filteredShoes.filter(shoe => shoe.price <= parseFloat(maxPrice));
  }

  if (type) {
    filteredShoes = filteredShoes.filter(shoe => shoe.type.toLowerCase() === type.toLowerCase());
  }
  res.json(filteredShoes);
});



    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });