import { BrowserUtils, Reporter } from "wdio-allure-ts";

const TODO_MVC_BASE_URL: string = "http://todomvc.com/";
const CLOUDINARY_URL: string = "https://cloudinary.com/";

/**
 * An example of test that does not use common describe
 */
describe("FailingTest", () => {
  beforeEach("Navigate", () => {
    Reporter.step(`Navigate to ${CLOUDINARY_URL}`);
    BrowserUtils.navigateToUrl(CLOUDINARY_URL);
  });
  /**
   * This one will pass
   */
  it("Check URL", () => {
    Reporter.step("Validate url");
    BrowserUtils.expectCurrentUrl(CLOUDINARY_URL);
  });

  /**
   * Will fail
   */
  it("Will Fail", () => {
    Reporter.step("Validate url - expected to fail");
    BrowserUtils.expectCurrentUrl(TODO_MVC_BASE_URL);
  });
});
