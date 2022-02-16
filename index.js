const inquirer = require("inquirer");
const fs = require("fs");

// Takes the user input using inquirer
inquirer.prompt([
    {
        message: "What is the title of your project?",
        type: "input",
        name: "title"
    },
    {
        message: "Describe your project.",
        type: "input",
        name: "description"
    },
    {
        message: "What are the installation instructions?",
        type: "input",
        name: "installation"
    },
    {
        message: "Enter the usage information.",
        type: "input",
        name: "usage"
    },
    {
        message: "What are the contribution guidelines?",
        type: "input",
        name: "contribution"
    },
    {
        message: "What are the test instructions",
        type: "input",
        name: "test"
    },
    {
        message: "Choose license for your application.",
        type: "list",
        name: "license",
        choices: ["None", "Apache License 2.0", "GNU General Public License v3.0", "MIT License", 'BSD 2-Clause "Simplified" License', 
            'BSD 3-Clause "New" or "Revised" License', "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0",
            "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser General Public License v2.1", "Mozilla Public License 2.0", "The Unlicense"]
    },
    {
        message: "Enter your GitHub username.",
        type: "input",
        name: "username"
    },
    {
        message: "Enter your email address.",
        type: "input",
        name: "email"
    }
]).then (function (response) {

}).catch (function (error) {
    console.log(error);
});