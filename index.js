const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

// Define a function that capitalizes the first letter of a given string
const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// Define a function that takes an array of strings and returns a new array
// with the strings capitalized in title case
const titleCased = () => {
  return tutorials.map((tutorial) => {
    // Split the tutorial string into an array of words
    const words = tutorial.split(" ");
    // Map over the array of words and capitalize each word
    const capitalizedWords = words.map((word) => capitalize(word));
    // Join the capitalized words back into a string
    return capitalizedWords.join(" ");
  });
};

console.log(titleCased());
