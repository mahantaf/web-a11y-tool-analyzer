
# Ma11y Framework Documentation

## Overview

Ma11y is a comprehensive mutation analysis framework designed for evaluating web accessibility testing tools. This document provides detailed information about each of the framework's main components: the Mutant Generator, the Tool Runner, and the Oracle.

## Mutant Generator

### Functionality
- The Mutant Generator is responsible for applying mutation operators to web pages.
- It uses 25 distinct mutation operators, derived from WCAG 2.1 guidelines.

### Implementation
- Implemented using Puppeteer, a headless browser, to load and manipulate the HTML DOM of websites.
- It checks for the applicability of each mutation operator, ensuring that mutations are meaningful and detectable.

### Key Features
- Dynamic handling of web elements to accommodate runtime changes.
- Visibility checks and accessibility API interactions to ensure the effectiveness of mutations.

## Tool Runner

### Functionality
- Executes various accessibility testing tools on mutated websites.
- It can integrate any testing tool capable of outputting results in a specified JSON format.

### Integration
- Currently integrates tools like A11yLite, Access Continuum, axe, IBM Equal Access, QualWeb, and WAVE.
- Converts the output of these tools into a unified JSON format for consistency.

### Key Features
- Hosts mutated websites on a server for testing.
- Maps reported accessibility issues to their corresponding mutated elements in the DOM.

## Oracle

### Functionality
- Compares error reports from original and mutated websites to assess tool effectiveness.
- Determines whether the tools successfully identified the issues introduced by the mutation operators.

### Process
- Utilizes a mapping list between tool-reported errors and mutation operators.
- Analyzes the differences in reported errors to conclude the detection of mutations.

### Key Features
- Effective comparison methodology to evaluate tool performance.
- Detailed mapping and analysis to ensure accurate assessment of mutation detection.

## Installation and Setup

To set up and run the Ma11y framework, follow these steps:
1. Clone the repository and navigate to the project directory.
2. Install the required dependencies using `npm install`.
3. Run the Mutant Generator, Tool Runner, and Oracle using their respective npm scripts.

## Contribution and Extension

Developers and researchers are encouraged to contribute to Ma11y by:
- Integrating new accessibility testing tools.
- Enhancing mutation operators and evaluation methods.
- Improving the overall framework based on evolving web accessibility standards.

## Conclusion

Ma11y serves as a vital tool in advancing web accessibility testing, providing insights into the effectiveness of current testing tools and paving the way for the development of more robust solutions.

---

*This document provides a high-level overview of the Ma11y framework's components. For more detailed technical information, please refer to the source code and specific component documentation.*
