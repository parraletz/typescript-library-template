# Project Name

## Overview

Project Name is a simple TypeScript project that demonstrates how to create a greeting function and test it using Jest. This project utilizes SWC for efficient compilation of TypeScript and JavaScript, ensuring faster development cycles and optimized build times.

## Features

- A `greet` function that returns a greeting message.
- Unit tests for the `greet` function using Jest.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine. You can download them from [Node.js Downloads](https://nodejs.org/).

## Installation

1. Clone the repository:

```bash
   git clone https://github.com/yourusername/project-name.git
```

2. Navigate into the project directory:

```bash
    cd project-name
```

3. Install the dependencies:

```bash
pnpm install
```

## Usage

### Building the Project

To compile the code using SWC, run the following command:

```bash
pnpm build
```

This will compile the files located in the ```src``` directory and output them to the ```dist``` directory.


### Running Tests

To run the tests using Jest, execute the following command:

```bash
pnpm test
```

This will execute the tests located in the ```tests``` directory using Jest.


#### Configuration


Modify the ```.swcrc``` file to change the SWC configuration according to your project needs. Here's a sample configuration:

```json
{
  "jsc": {
    "target": "es2020",
    "parser": {
      "syntax": "typescript",
      "tsx": true,
      "decorators": true,
      "dynamicImport": true
    }
  },
  "module": {
    "type": "commonjs"
  },
  "sourceMaps": true
}
```

## Contributing


Contributions are welcome! Please follow these steps to contribute:

1. Fork the Project.
2. Create your Feature Branch (git checkout -b feature/AmazingFeature).
3. Commit your Changes (git commit -m 'Add some AmazingFeature').
4. Push to the Branch (git push origin feature/AmazingFeature).
5. Open a Pull Request.

### License
Distributed under the MIT License. See LICENSE for more information.

### Contact

Your Name - your.email@example.com
Project Link: https://github.com/yourusername/project-name


### Additional Information

To complete the `README.md` file, you might want to:

1. **Check the `src/index.ts` file**: Ensure that it exports a `greet` function. If it does, you can add more details about the function in the **Features** section.

   ```typescript src/index.ts
   export function greet(name: string): string {
       return `Hello, ${name}!`;
   }
   ```
Check the package.json file: Ensure that it includes scripts for building and testing. If not, you can add them.



```json
{
  "name": "project-name",
  "version": "1.0.0",
  "scripts": {
    "build": "swc src -d dist",
    "test": "jest"
  },
  "devDependencies": {
    "@swc/core": "^1.2.15",
    "@swc/cli": "^0.1.55",
    "jest": "^27.0.6",
    "typescript": "^4.3.5"
  }
}
```

Check the `.swcrc` file: Ensure that it exists and is properly configured. If not, create it with the sample configuration provided above.



