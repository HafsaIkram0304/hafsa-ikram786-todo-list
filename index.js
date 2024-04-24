#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let conditions = true;
console.log(chalk.red("<<<<==================<<<<>>>>=====================>>>>"));
console.log(chalk.blue(" \n \t Welcome to Hafsa's Todo-list Aplication\t\n "));
console.log(chalk.red("<<<<==================<<<<>>>>======================>>>>"));
while (conditions) {
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.blue("Enter your New task"),
        }
    ]);
    todoList.push(addTask.task);
    console.log(chalk.yellow(`${addTask.task} Task added in Todo-list successfully`));
    let addMoreTask = await inquirer.prompt([
        {
            name: "addMore",
            type: "confirm",
            message: chalk.green("Do you want to add more task ?"),
            default: "false"
        }
    ]);
    conditions = addMoreTask.addMore;
}
console.log("your updated Todo-List ", todoList);
