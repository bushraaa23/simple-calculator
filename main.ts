#! /usr/bin/env node

import inquirer from "inquirer"; 
import chalk from "chalk";

const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "secondNumber" },
  {
    message: "Select one of the operators to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

// condition statement
if (answer.operator === "Addition") {
  console.log( chalk.blue (answer.firstNumber + answer.secondNumber) );
} else if (answer.operator === "Subtraction") {
  console.log( chalk.yellow(answer.firstNumber - answer.secondNumber));
} else if (answer.operator === "Multiplication") {
  console.log( chalk.green(answer.firstNumber * answer.secondNumber));
}
 else if (answer.operator === "Division") {
  console.log( answer.firstNumber / answer.secondNumber);
} else { 
console.log("Please select valid operator")
} 
