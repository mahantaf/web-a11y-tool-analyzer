# Ma11y: Mutation Analysis Framework for Web Accessibility Testing

## Overview

Ma11y is a pioneering mutation analysis framework designed to evaluate the effectiveness of web accessibility testing tools. It addresses the significant gap in identifying accessibility issues on many websites, as current tools fail to detect nearly 50% of such issues. Ma11y operates through three main components: the Mutant Generator, the Tool Runner, and the Oracle.

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

To use Ma11y for assessing a website's accessibility:

1. Prepare the website to be compatible with Ma11y's requirements.
2. Run the Mutant Generator to apply mutation operators.
3. Execute the Tool Runner with integrated accessibility testing tools.
4. Utilize the Oracle to analyze the effectiveness of these tools.

## Future Directions

Ma11y sets the stage for the development of more advanced accessibility testing tools. Researchers and developers can contribute by integrating new tools and enhancing the mutation operators and evaluation methods.

## Conclusion

Ma11y marks a significant advancement in web accessibility testing, highlighting the need for more sophisticated tools to create a universally accessible digital environment.

---

*For detailed information about each component and the evaluation process, refer to the respective sections in the project documentation.*
