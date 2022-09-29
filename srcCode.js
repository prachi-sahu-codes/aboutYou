let readlineSync = require("readline-sync");

let username = readlineSync.question("What's your name ? ");
console.log("welcome " + username + "!!! \n");

readlineSync.keyInYN("Do you want to answer some questions?");

if (readlineSync.keyInYN("Are you sure Continue?") === false) {
  process.exit();
}

console.log("Lets get to know each other in detail.\n");

let listArr = [];

let quizQuestion = [
  {
    question: "(1.) Which one is your fav color?\n",
    answer: ["Blue", "Orange", "Yellow", "Pink", "Black"],
  },
  {
    question: "(2.) Which is your fav animal?\n",
    answer: ["Lion", "Elephant", "Crocodile", "Giraffe", "Hippo"],
  },
  {
    question: "(3.) Which is your fav food?\n",
    answer: [
      "Pasta",
      "Noodles",
      "Idli",
      "Dosa",
      "Dhokla",
      "Burger",
      "Sandwich",
    ],
  },
  {
    question: "(4.) Which is your fav vegetable?\n",
    answer: [
      "Bamboo shoots",
      "Lady finger",
      "Bottle Gourd",
      "Bitter gourd",
      "Cabbage",
    ],
  },
  {
    question: "(5.) Which is your fav fruit?\n",
    answer: ["Mango", "Apple", "Grapes", "Banana", "Kiwi"],
  },
];

function play(question, answer) {
  index = readlineSync.keyInSelect(answer, question);

  console.log("Ok, " + answer[index] + " goes to your list.");
  if (answer[index] === undefined) {
    listArr.push("___");
  } else {
    listArr.push(answer[index]);
  }

  console.log("------------------");
}

function quiz() {
  for (let i = 0; i < quizQuestion.length; i++) {
    let currentQuestion = quizQuestion[i];
    play(currentQuestion.question, currentQuestion.answer);
  }
}
quiz();

console.log(
  "\nWohooo!!! you've just completed this awesome quiz and your list is \n\n" +
    username +
    " : " +
    listArr +
    ".\n\n Now send its screenchot to me."
);
