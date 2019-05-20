import { BrowserUtils, Reporter, SpecialKeys } from "wdio-allure-ts";

/**
 * Text box widget
 */
export class TextBox {
  private readonly selector: string;
  constructor(selector: string) {
    this.selector = selector;
  }

  /**
   * Add value passed to function and add 'Enter' to submit the text
   * @param value value to add to text box
   */
  public addValue(value: string): void {
    Reporter.debug("Will add text to text box");
    BrowserUtils.setValue(this.selector, `${value}${SpecialKeys.ENTER}`);
  }

    /**
     * Add text to text box
     * @param value text to add
     */
    public setValue(value: string): TextBox {
        Reporter.debug("Will add text to text box");
        BrowserUtils.setValue(this.selector, value);

        return this;
    }
}
