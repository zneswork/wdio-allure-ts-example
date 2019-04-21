import { BrowserUtils } from "wdio-allure-ts";

/**
 * fd
 */
export class ToDoItem {
  private readonly selector: string;

  constructor(todoValue: string) {
    this.selector = `//*[contains(@ng-repeat,'todo in todos ') and descendant-or-self::*[text()='${todoValue}']]`;
  }

  public isVisible(): void {
    BrowserUtils.isDisplayed(this.selector);
  }
}
