import { BrowserUtils, Reporter, TestUtils } from "wdio-allure-ts";

import { TodoAngularPage } from "../pages/TodoAngularPage";
import { describeCommon } from "../utils/TestHelper";

const TODO_MVC_BASE_URL: string = "http://todomvc.com/";

/**
 * Example of test with common describe usage
 */
describeCommon("TodoAngularTest", () => {
  it("Add new ToDo", () => {
    Reporter.step("Validate url");
    BrowserUtils.expectCurrentUrl(TODO_MVC_BASE_URL);

    Reporter.step("Navigate to ToDoMVC Angular implementation");
    TodoAngularPage.navigate();

    const todoValue: string = TestUtils.randomString(10);

    Reporter.step(`Add new todo with text ${todoValue}`);
    TodoAngularPage.addNewToDo(todoValue);

    Reporter.step("Validate new added todo is visible");
    TodoAngularPage.todo(todoValue).isVisible();
  });

  /**
   * TearDown reporter
   */
  afterEach(() => {
    TodoAngularPage.navigate();

    TestUtils.randomString(10);
    const todoValue: string = TestUtils.randomString(10);
    Reporter.step(`Add new todo with text ${todoValue}`);
    TodoAngularPage.addNewToDo(todoValue);

    TodoAngularPage.removeAll();
    TodoAngularPage.expectListEmpty();
  });
});
