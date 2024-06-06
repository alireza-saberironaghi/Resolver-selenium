![Selenium](https://github.com/alireza-saberironaghi/Resolver-selenium/assets/98224391/b3001ded-791b-4a98-a7b9-a3424c696c70)

# Resolver Technical Assessment (Selenium with Java)

This repository is created to complete the technical assessment for the QA Engineer position at Resolver.

The repository utilizes Selenium with Java and is organized into several key parts:

- The first part is the test script that is implemented. 
  You can find the test script in the [`IndexTest.java`](https://github.com/alireza-saberironaghi/Resolver-selenium/blob/main/src/test/java/resolver2/resolver2/IndexTest.java) file.
- The next part is the helper base for test file. 
  The helper base file can be found in the [`HelperBase.java`](https://github.com/alireza-saberironaghi/Resolver-selenium/blob/main/src/main/java/helperbase/HelperBase.java).
- All the page objects are organized in separate files in the [`pageobjects`](https://github.com/alireza-saberironaghi/Resolver-selenium/tree/main/src/main/java/resolver2/pageobjects) directory.
- The guide file, which contains details on test cases and requirements, can be found in the [`guide.html`](https://alexqa.io/Resolver/guide.html) file.
- The index file, which details the system under test, can be found in the [`index.html`](https://alexqa.io/Resolver/index.html) file.

## Sample Result

Here is a sample picture of the test result:

![report](https://github.com/alireza-saberironaghi/Resolver-selenium/assets/98224391/6af16b6e-a888-4fa8-b917-5c87b86c0125)

## Installation

If you want to run the tests from your local machine, follow the steps below.

1. Clone the repository:
    ```bash
    git clone https://github.com/alireza-saberironaghi/Resolver-selenium.git
    cd Resolver-selenium
    ```

2. Ensure you have Maven installed. If not, install it from [Maven official website](https://maven.apache.org/download.cgi).

3. Install dependencies and build the project:
    ```bash
    mvn clean install
    ```

## Execution

To execute the tests, you can use the following commands.

1. Run tests:
    ```bash
    mvn test
    ```

## Project Structure

- **Test Script**: Located in the [`IndexTest.java`](https://github.com/alireza-saberironaghi/Resolver-selenium/blob/main/src/test/java/resolver2/resolver2/IndexTest.java) file.
- **Helper Base**: Common helper functions are in the [`HelperBase.java`](https://github.com/alireza-saberironaghi/Resolver-selenium/blob/main/src/main/java/helperbase/HelperBase.java).
- **Page Objects**: Organized in separate files under the [`pageobjects`](https://github.com/alireza-saberironaghi/Resolver-selenium/tree/main/src/main/java/resolver2/pageobjects) directory.
- **Guide**: Contains details on test cases and requirements in the [`guide.html`](https://alexqa.io/Resolver/guide.html) file.
- **Index**: Details the system under test in the [`index.html`](https://alexqa.io/Resolver/index.html) file.

## Good Practices

The project adheres to several good practices to ensure maintainability, readability, and efficiency:
- **KISS (Keep It Simple, Stupid)**: The test scripts are kept simple and straightforward, avoiding unnecessary complexity.
- **DRY (Don't Repeat Yourself)**: Common functionalities are abstracted into helper functions to avoid repetition.
- **Readability**: Code is written in a clear and readable manner, with meaningful variable and function names.
- **Maintainability**: The project is organized in a modular way, making it easy to update and maintain.
- **Consistent Naming Conventions**: Consistent naming conventions are used throughout the project to enhance clarity and understanding.
- **Comments and Documentation**: Proper comments and documentation are provided to explain the purpose and functionality of different parts of the code.
- **Scalability**: The test framework is designed to easily accommodate additional test cases and functionalities as the project grows.
- **Performance and Efficiency**: Test scripts are optimized to run efficiently, minimizing execution time while ensuring comprehensive test coverage.
- **Test Data Management**: Test data is managed effectively to ensure tests are independent, repeatable, and consistent.
- **Single Responsibility Principle (SRP)**: Each module or class has a single responsibility, making the codebase easier to understand, maintain, and extend.

## Conclusion

This project is a demonstration of using Selenium with Java to automate tests for Resolver. The structure follows best practices to ensure maintainability and readability of the test code.
