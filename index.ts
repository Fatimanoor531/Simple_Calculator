#! usr/bin/env node
import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "secondNumber" },
  {
    message: "select one of the operator to perform operator",
    type: "list",
    name: "operator",
    choices: [
      "addition",
      "subtraction",
      "multiplication",
      "division",
      "exponentation",
      "modules",
    ],
  },
]);

// conditional statement
if (answer.operator === "addition") {
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "subtraction") {
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "multiplication") {
  console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "division") {
  console.log(answer.firstNumber / answer.secondNumber);
} else if (answer.operator === "exponentation") {
  console.log(answer.firstNumber ** answer.secondNumber);
} else if (answer.operator === "modules") {
  console.log(answer.firstNumber % answer.secondNumber);
} else {
  console.log("please select a valid operator");
}
