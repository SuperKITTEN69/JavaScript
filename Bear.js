const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Do you like bears? (yes/no) ", (answer) => {
  if (answer.toLowerCase() === "yes") {
    const bearAscii = `
     ʕ•ᴥ•ʔ
   Here's a bear for you!
    `;
    console.log(bearAscii);
  } else {
    console.log("No bear for you then. 🐾");
  }
  rl.close();
});
