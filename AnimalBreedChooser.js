const readline = require('readline');

// Breads
const catbrd = ["British Shorthair", "Chartreux", "Persian", "Bengal Cat", "Bombay Cat", "Maine Coon", "Ragdoll"];
const dogbrd = ["Boxer", "Bulldog", "Cane Corso", "Beagle", "Borzoi", "Basenji", "Pug"];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Do you prefer cats or dogs? ", (preference) => {
  preference = preference.toLowerCase();

  if (preference === "cats") {
    const randomCat = catbrd[Math.floor(Math.random() * catbrd.length)];
    console.log(`You might like: ${randomCat}`);
  } else if (preference === "dogs") {
    const randomDog = dogbrd[Math.floor(Math.random() * dogbrd.length)];
    console.log(`You might like: ${randomDog}`);
  } else {
    console.log("Please enter either 'cats' or 'dogs'.");
  }

  rl.close();
});
