#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log("=".repeat(60));
console.log(chalk.bgCyanBright("\t\t UMAIRS - word counter"));
console.log("=".repeat(60));

//for taking input
let answer = await inquirer.prompt([
    {
        name:"sentence",
        type:"input",
        message:"Enter a sentence :"
    }
])

//triming sentence and spliting it in words
let words = answer.sentence.trim().split(" ");

console.log(chalk.blue("=".repeat(60)));
console.log(chalk.bold("- Sentence Words :"));
console.log(words);
console.log(chalk.bold(`\n word count: ${words.length} `));
console.log(chalk.blue("=".repeat(60)));



