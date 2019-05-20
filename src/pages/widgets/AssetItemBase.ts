import { BrowserUtils, Reporter } from 'wdio-allure-ts';

const ASSETS_GRID_SELECTOR: string = "//*[@class='main-holder']";
const ASSET_FILE_SIZE_SELECTOR: string = "//*[@data-test='asset-file-size']";
const ASSET_DIMENSION_SELECTOR: string = "//*[@data-test='asset-dimensions']";
const ASSET_DURATION_SELECTOR: string = "//*[@data-test='asset-duration']";

/**
 * Asset item widget displayed in AssetsGrid
 */
export class AssetItemBase {
    protected assetItemSelector: string;

    constructor(selector: string) {
        this.assetItemSelector = selector;
    }

    /**
     * Expect asset item is visible
     */
    public isVisible(): void {
        Reporter.debug(`Validate asset item ${this.assetItemSelector} is visible`);
        BrowserUtils.waitForDisplayed(this.assetItemSelector);
    }

    /**
     * Validate asset item not visible
     */
    public notVisible(): void {
        BrowserUtils.notVisible(this.assetItemSelector);
    }

    /**
     * Click asset item
     */
    public click(): void {
        BrowserUtils.click(this.assetItemSelector);
    }

    /**
     * Click asset item
     */
    public scrollToAssetInGrid(): AssetItemBase {
        Reporter.debug(`Scroll to asset (${this.assetItemSelector}) in grid`);
        BrowserUtils.scrollToElement(ASSETS_GRID_SELECTOR, this.assetItemSelector);

        return this;
    }

    /**
     * Double-clicks asset item
     */
    public doubleClick(): void {
        BrowserUtils.doubleClick(this.assetItemSelector);
    }

    /**
     * Validate asset's format
     * @param expectedAssetFormat expected asset's format
     */
    public expectAssetFormat(expectedAssetFormat: AssetFormat): void {
        Reporter.debug(`Validate asset's format is ${expectedAssetFormat}`);

        BrowserUtils.waitForDisplayed(
            `${
                this.assetItemSelector
            }//*[@data-test='asset-format' and descendant-or-self::*[text()='${expectedAssetFormat}']]`
        );
    }

    /**
     *  Validate asset's type
     *
     * The type is part of the asset's class attribute
     * By checking if asset's class attribute has expected type value
     * @param expectedType expected asset's type
     */
    public expectAssetType(expectedType: AssetType): void {
        Reporter.debug(`Validate asset's type is ${expectedType}`);

        BrowserUtils.expectAttributeValue(this.assetItemSelector, 'class', expectedType);
    }

    /**
     * Validate asset's size as expected
     * @param expectedSize expected file size
     */
    public expectAssetSize(expectedSize: string): void {
        Reporter.debug(`Validate asset's size is: '${expectedSize}'`);
        BrowserUtils.expectText(`${this.assetItemSelector}${ASSET_FILE_SIZE_SELECTOR}`, expectedSize);
    }

    /**
     * Validate asset's dimension
     * Only image and video types have a dimension
     * Image's dimension is resolution and video is length
     *
     * @param expectedDimension asset's dimension
     */
    public expectAssetDimension(expectedDimension: string): void {
        Reporter.debug(`Validate asset's dimension is: '${expectedDimension}'`);
        BrowserUtils.expectText(`${this.assetItemSelector}${ASSET_DIMENSION_SELECTOR}`, expectedDimension);
    }

    /**
     * Validate asset's duration
     * Only image and video types have a duration
     * Image's duration is resolution and video is length
     *
     * @param expectedDuration asset's duration
     */
    public expectAssetDuration(expectedDuration: string): void {
        Reporter.debug(`Validate asset's duration is: '${expectedDuration}'`);
        BrowserUtils.expectText(`${this.assetItemSelector}${ASSET_DURATION_SELECTOR}`, expectedDuration);
    }

    /**
     * Validate asset's duration not visible
     * Like in tier 0 users
     */
    public expectAssetDurationNotVisible(): void {
        Reporter.debug("Validate asset's duration not visible");
        BrowserUtils.notVisible(`${this.assetItemSelector}${ASSET_DURATION_SELECTOR}`);
    }

    /**
     * Hover over asset item
     */
    public hover(): void {
        BrowserUtils.hover(this.assetItemSelector);
    }
}

/**
 * Asset's format types
 * like mov,mp4, mp3, jpeg e.t.c
 */
export enum AssetFormat {
    MOV = 'MOV',
    MP4 = 'MP4',
    MP3 = 'MP3',
    TXT = 'TXT',
    PDF = 'PDF',
    JPG = 'JPG',
}

/**
 * Asset's types
 *
 * audio, video, image, other
 */
export enum AssetType {
    AUDIO = 'audio',
    VIDEO = 'video',
    IMAGE = 'png',
    OTHER = 'other',
}
