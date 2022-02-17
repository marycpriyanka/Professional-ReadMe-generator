const inquirer = require("inquirer");
const fs = require("fs");

const createReadMeText = (title, description, installation, usage, license, contribution, test, username, email) => {
    const badge = `https://img.shields.io/badge/${license}-blue.svg`;
    license = license.replace("-", " ");
    license = license.replace("_", " ");
    return `# ${title}
![badge](${badge})

## Description

${description}

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${installation}

## Usage

${usage}

## License

${title} is available under the ${license}.

## How to Contribute

${contribution}

## Tests

${test}

## Questions

https://github.com/${username}

For any addditional questions, reach me at ${email}.`
} 

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
        choices: ["None", "Apache-License_2.0", "GNU-General-Public-License_v3.0", "MIT-License", 'BSD-2_Clause-"Simplified"-License', 
            'BSD-3_Clause-"New"-or-"Revised"-License', "Boost-Software-License_1.0", "Creative-Commons-Zero_v1.0-Universal", "Eclipse-Public-License_2.0",
            "GNU-Affero-General-Public-License_v3.0", "GNU-General-Public-License_v2.0", "GNU-Lesser-General-Public-License_v2.1", "Mozilla-Public-License_2.0", "The Unlicense"]
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
    const readMeText = createReadMeText(response.title, response.description, response.installation, response.usage, response.license, 
        response.contribution, response.test, response.username, response.email);
    fs.writeFile("README.md", readMeText, err => {
        if (err) {
            console.log(err);
        }
        else
        {
            console.log("Successfully created ReadMe file!");
        }
    })
}).catch (function (error) {
    console.log(error);
});