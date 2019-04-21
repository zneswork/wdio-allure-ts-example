import { BrowserUtils, Reporter } from "wdio-allure-ts";

/**
 * Button widget
 */
export class Button {
  private readonly selector: string;
  constructor(selector: string) {
    this.selector = selector;
  }

  /**
   * Click the button
   */
  public click(): void {
    Reporter.debug("Will click button");
    BrowserUtils.click(this.selector);
  }

  /**
   * Validate button not visible
   */
  public notVisible(): void {
    Reporter.debug("Validate button not visible");
    BrowserUtils.notVisible(this.selector);
  }
}
