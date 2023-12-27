# Ma11y: Mutation Analysis Framework for Web Accessibility Testing

## Overview

Ma11y is a pioneering mutation analysis framework designed to evaluate the effectiveness of web accessibility testing tools. It addresses the significant gap in identifying accessibility issues on many websites, as current tools fail to detect nearly 50% of such issues. Ma11y operates through three main components: the Mutant Generator, the Tool Runner, and the Oracle.

## Table of Contents

   * [Components](#components)
      * [1. Mutant Generator](#1-mutant-generator)
      * [2. Tool Runner](#2-tool-runner)
      * [3. Oracle](#3-oracle)
   * [Application and Evaluation](#application-and-evaluation)
   * [Using Ma11y](#using-ma11y)
      * [Installation](#installation)
      * [Mutant Generator](#mutant-generator)
      * [Tool Runner](#tool-runner)
   * [Future Directions](#future-directions)

## Components

### 1. Mutant Generator

This component applies 25 mutation operators based on the WCAG 2.1 accessibility guidelines to the target website. The implementation leverages Puppeteer, a JavaScript-based headless browser, to manage dynamic website elements and prevent the creation of equivalent mutants. Key functionalities include:

- Loading and analyzing HTML DOM for mutation applicability.
- Checking element visibility and accessibility API interaction.
- Ensuring mutations introduce new and detectable accessibility issues.

### 2. Tool Runner

The Tool Runner executes various accessibility testing tools on the mutated websites. It is compatible with any testing tool that can output results in a specific JSON format. Currently integrated tools include A11yLite, Access Continuum, axe, IBM Equal Access, QualWeb, and WAVE. This component focuses on:

- Hosting mutated websites on a server.
- Transforming tool outputs into a unified JSON format.
- Mapping reported accessibility issues to mutated elements.

### 3. Oracle

The Oracle component evaluates the effectiveness of the testing tools by comparing error reports from the original and mutated websites. It assesses whether the tools can identify the issues injected by the mutation operators. Key aspects include:

- Comparing error lists for original and mutated websites.
- Determining tool success in detecting mutations.
- Utilizing a mapping list between tool-reported errors and mutation operators.

## Application and Evaluation

Ma11y has been rigorously evaluated on real-world websites. It highlights the need for more effective accessibility testing tools and demonstrates the framework's potential in practical settings.

## Using Ma11y

### Installation

Before running Ma11y, ensure that you have the latest version of Node.js installed. Then, clone the repository and install the dependencies:

```bash
npm install
```

After installing the dependencies you should manually install Chromium version using the following command:
```bash
node node_modules/puppeteer/install.js
```

Ma11y has two main parts:
1. Mutant Generator
2. Tool Runner

### Mutant Generator

Mutant Generator uses website HTML files as an input and applies mutation operators to them. Before running the Mutant Generator, you should put the websites' HTML files in the `resources/final_websites` folder. Create a folder for each website and put the HTML file (index.html) along with CSS, Javascript and all static files inside the folder.
So the content of the `resources/final_websites` folder should look like this:
    
    resources/final_websites
    ├── website1
    │   ├── index.html
    │   ├── css (optional)
    │   │   └── style.css
    │   ├── js (optional)
    │   │   └── script.js
    │   └── static (optional)
    │       └── image.png
    └── website2
        ├── index.html
        ├── css
        │   └── style.css
        ├── js
        │   └── script.js
        └── static
            └── image.png

After putting the input websites you can run the following command to apply mutation operators to them:

```bash
npm run mutant-generator
```
It will create a `results/` directory in the project root and put the mutated websites in it.
Now that you have the mutants you can run the Tool Runner. However, before running the tool runner you need to serve them either on a server or locally.

Note: If you want to serve the websites locally, make sure to disable WAVE in the configuration file. WAVE does not work on local websites.

### Tool Runner

After serving the websites configure the `websitesBaseURL` in the `config.json` file. Then, run the following command to run the Tool Runner:

```bash
npm run tool-runner
```

It will create a directory named `run_results/` in the project root and put the result in a JSON format in it.

For each website you will have a JSON file with the following format:
```json
{
     "website": {
          "mutation-operator-1": {
               "tool-1": {
                    "originalIssues": {
                         "element": "mutatedElement",
                         "failures": ["Array of failures"]
                    },
                    "mutatedIssues": {
                         "element": "mutatedElement",
                         "failures": ["Array of failures"]
                    },
                    "newIssues": [],
                    "killed": 0
               },
               "tool-2": {
                    "originalIssues": {
                         "element": "mutatedElement",
                         "failures": ["Array of failures"]
                    },
                    "mutatedIssues": {
                         "element": "mutatedElement",
                         "failures": ["Array of failures"]
                    },
                    "newIssues": [],
                    "killed": 1
               }
          }
     }
}
```

For each mutant of a website it contains the run results of the tools.
Each run result has `original_issues` which shows the accessibility issues detected by the tool of the targeted element before mutation,
`mutated_issue` which shows the accessibility issues of the mutated version,
`new_issues` is a set equals to `mutated_issues - original_issues`, and a `killed` attribute that determines whether the tool could detect the issue or not. 

Note: Running a tool runner may take a long time. You can always monitor the progress by tailing the info.log file in the project root.

## Future Directions

Ma11y sets the stage for the development of more advanced accessibility testing tools. Researchers and developers can contribute by integrating new tools and enhancing the mutation operators and evaluation methods.