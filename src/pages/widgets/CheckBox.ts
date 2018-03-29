import { BrowserUtils, Reporter } from "wdio-allure-ts";

/**
 * CheckBox widget
 */
export class CheckBox {
  private selector: string;
  constructor(selector: string) {
    this.selector = selector;
  }

  /**
   * Click CheckBox
   */
  public click(): void {
    Reporter.debug("Will click check box");
    BrowserUtils.click(this.selector);
  }
}
