import { BrowserUtils, Reporter } from "wdio-allure-ts";
import { ToDoItem } from "./ToDoItem";
import { Button } from "./widgets/Button";
import { CheckBox } from "./widgets/CheckBox";
import { TextBox } from "./widgets/TextBox";

const TODO_ANGULAR_URL: string = "http://todomvc.com/examples/angularjs/#/";
const NEW_TODO_TEXTBOX_SELECTOR: string =
  "//input[contains(@class,'new-todo')]";
const newTodoTextBox: TextBox = new TextBox(NEW_TODO_TEXTBOX_SELECTOR);

/**
 * TODOmvc Angular page functionality
 */
export namespace TodoAngularPage {
  /**
   * Navigate to the page
   */
  export function navigate(): void {
    BrowserUtils.navigateToUrl(TODO_ANGULAR_URL);
  }

  /**
   * Add new todo item
   */
  export function addNewToDo(value: string): void {
    newTodoTextBox.addValue(value);
  }

  /**
   * Get Todo by it text value
   * @param todoValue Todo item's string
   */
  export function todo(todoValue: string): ToDoItem {
    return new ToDoItem(todoValue);
  }

  /**
   * Remove all todo from list
   */
  export function removeAll(): void {
    Reporter.debug("Click toggle all check box");
    toggleAllCheckBox().click();
    clearCompletedButton().click();
  }

  /**
   * Validate list is empty
   */
  export function expectListEmpty(): void {
    clearCompletedButton().notVisible();
  }

  /**
   * Toggle all checkbox
   */
  function toggleAllCheckBox(): CheckBox {
    return new CheckBox("//*[@for='toggle-all']");
  }

  /**
   * Clear all button
   */
  function clearCompletedButton(): Button {
    return new Button("//button[@class='clear-completed']");
  }
}
