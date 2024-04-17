#! /usr/bin/env node 
//printing greetings Text.
console.log(chalk.bold.rgb(204, 204, 204)(chalk.yellowBright.bold("\n\t Step into Arisha's CLI Word Counter app! Simplifying word counting for you.\n\t")));
//importing chalk
import chalk from "chalk";
//importing inquirer.
import inquirer from "inquirer";
//Declaring a const "answer" 
const answer = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: chalk.blue.bold("Enter Your Sentence To Count The Words: ")
    }
]);
const words = answer.Sentence.trim().split(" ");
//printing the array or words.
console.log(words);
//printing the word count
console.log(chalk.magenta.bold `\nYour sentence word count is ${words.length}`);
