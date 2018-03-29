# UI E2E Automation
------------
E2E UI automation module for Node.js. It makes it possible to write fast and easy [Selenium](https://en.wikipedia.org/wiki/Selenium_(software)) UI tests

Uses:
[WebdriverIO](http://webdriver.io/ "WebdriverIO") as a base WebDriver implementation.
[TypeScript](https://www.typescriptlang.org/ "TypeScript") for easier development process.
[Mocha](https://mochajs.org/ "Mocha")  as a test runner
[Allure Reporter ](https://github.com/webdriverio/wdio-allure-reporter "Allure Reporter ") for nice tests result representation

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
### Prerequisites

[NodeJs](https://nodejs.org/en/ "NodeJs") runtime engine
[Chrome](https://www.google.com/chrome/ "Chrome")  for tests execution
[FireFox](https://www.mozilla.org/en-US/ "FireFox")  for tests execution and display allure reporter
[Java](http://www.oracle.com/technetwork/java/index.html "Java") for selenium grid and report generation 

------------
**Steps:**
**Install packages:**
> npm install

**Build:**
> npm run build

**Start Selenium grid:** *(start grid in separate terminal)*
> npm run grid

**Execute test suite:** *(npm test)
> npm run suite todoMvcTestSuite

**Execute single test:**
> npm run spec ./lib/tests/TodoAngularTest.js

**Show report:** *require installed java and firefox*
> npm run report


**Additional commands can be found in the package.json**
## Code Structure

### Tests
Test located under **/test** folder and file names ends with `Test.ts`
Each test class should have only 1 test, to keep it more readable and in case of failure we'll rerun only one test and not all tests in class(Mocha limitation)

##### Naming convention in tests:
 Describe should hold name of the tests suite and it will be represented in report as one suite, and each test should hold file name of the test class
 While multiple tests in one class is possible, rerunning such class on failure will rerun all the tests
**Example** where `TodoAngularTest` is a suite name and test file name is `TodoAngularTest.ts`
 ```javascript
   describe('TodoAngularTest', () => {
        it('Check URL', () => {
            //some test implementation
        });
    });
```
### Pages
We use Page Object Model for our tests and all page classes located under /pages folder. Each class represent an UI object/functionality.
For example: LoginPage.ts  has next methods : navigate, login, isLoaded since those 3 are the main login page responsibility


### WebDriverIO wrapper
The heart of the framework. Wraps webdriverIO for cleaner tests and pages implementation with logs and and stability improvements.
**WebDriverIo *browser* object should be used only in this class**

## Related project
`https://github.com/cloudinary/wdio-allure-ts`