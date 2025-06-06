const readline = require('readline');

// Cat breed info
const catBreeds = {
  "british shorthair": {
    origin: "United Kingdom",
    temperament: "Calm, Loyal, Independent",
    description: "A plush-coated, round-faced cat known for its easygoing nature."
  },
  "chartreux": {
    origin: "France",
    temperament: "Quiet, Affectionate, Intelligent",
    description: "Known for its woolly blue-gray coat and sweet personality."
  },
  "persian": {
    origin: "Iran (Persia)",
    temperament: "Gentle, Quiet, Sweet",
    description: "Famous for their long fur and round faces, Persians are laid-back companions."
  },
  "bengal cat": {
    origin: "United States",
    temperament: "Energetic, Alert, Curious",
    description: "Looks like a wild leopard, but loves to play and climb in your home."
  },
  "bombay cat": {
    origin: "United States",
    temperament: "Outgoing, Curious, People-oriented",
    description: "A sleek black cat bred to resemble a mini-panther with a loving attitude."
  },
  "maine coon": {
    origin: "United States",
    temperament: "Gentle, Friendly, Playful",
    description: "One of the largest domestic cats; fluffy, kind, and dog-like."
  },
  "ragdoll": {
    origin: "United States",
    temperament: "Docile, Affectionate, Relaxed",
    description: "Known for going limp when picked up, they’re sweet and cuddly."
  }
};

// Dog breed info
const dogBreeds = {
  "boxer": {
    origin: "Germany",
    temperament: "Energetic, Friendly, Loyal",
    description: "A strong, playful dog with a protective nature and boundless energy."
  },
  "bulldog": {
    origin: "England",
    temperament: "Gentle, Calm, Courageous",
    description: "Stocky and loyal, Bulldogs are loving companions with a laid-back attitude."
  },
  "cane corso": {
    origin: "Italy",
    temperament: "Protective, Intelligent, Reserved",
    description: "A muscular guardian dog known for its devotion and strength."
  },
  "beagle": {
    origin: "United Kingdom",
    temperament: "Curious, Merry, Friendly",
    description: "Small hounds with great noses and friendly personalities."
  },
  "borzoi": {
    origin: "Russia",
    temperament: "Elegant, Quiet, Independent",
    description: "Graceful and swift, Borzois are sighthounds with a calm temperament."
  },
  "basenji": {
    origin: "Central Africa",
    temperament: "Independent, Alert, Quiet",
    description: "Known as the 'barkless dog', Basenjis are clever and catlike."
  },
  "pug": {
    origin: "China",
    temperament: "Charming, Mischievous, Loving",
    description: "Small dogs with big personalities and signature wrinkly faces."
  }
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask for animal preference
rl.question("Do you prefer cats or dogs? ", (preference) => {
  preference = preference.trim().toLowerCase();

  if (preference === "cats") {
    rl.question("Enter a cat breed: ", (breedInput) => {
      const breed = breedInput.trim().toLowerCase();
      const info = catBreeds[breed];

      if (info) {
        console.log(`\nBreed: ${breedInput}`);
        console.log(`Origin: ${info.origin}`);
        console.log(`Temperament: ${info.temperament}`);
        console.log(`Description: ${info.description}`);
      } else {
        console.log("\nCat breed not found. Try 'Persian', 'Ragdoll', 'Maine Coon', etc.");
      }

      rl.close();
    });

  } else if (preference === "dogs") {
    rl.question("Enter a dog breed: ", (breedInput) => {
      const breed = breedInput.trim().toLowerCase();
      const info = dogBreeds[breed];

      if (info) {
        console.log(`\nBreed: ${breedInput}`);
        console.log(`Origin: ${info.origin}`);
        console.log(`Temperament: ${info.temperament}`);
        console.log(`Description: ${info.description}`);
      } else {
        console.log("\nDog breed not found. Try 'Pug', 'Boxer', 'Beagle', etc.");
      }

      rl.close();
    });

  } else {
    console.log("Please enter either 'cats' or 'dogs'.");
    rl.close();
  }
});

// All info was taken from the internet, im sorry if something is wrong.
