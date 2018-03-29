import { BrowserUtils } from "wdio-allure-ts";

/**
 * fd
 */
export class ToDoItem {
  private selector: string;

  constructor(todoValue: string) {
    this.selector = `//*[contains(@ng-repeat,'todo in todos ') and descendant-or-self::*[text()='${todoValue}']]`;
  }

  public isVisible(): void {
    BrowserUtils.isVisible(this.selector);
  }
}
