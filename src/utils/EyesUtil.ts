//tslint:disable
import {Eyes} from '@applitools/eyes-webdriverio';
import {Reporter} from "wdio-allure-ts";

const API_KEY : string = '4DfnpDsj20GEYEzjDPfvSCQYp8uZ654WLBxHfrQJIyI110';
const SCREEN_WIDTH: number = 1024;
const SCREEN_HEIGHT: number = 768;

/**
 * Class wraps the Applitools util for UI or Images comparison
 */
export class EyesUtil {

    public eyes: Eyes;

    constructor() {
        this.eyes = new Eyes();
        this.eyes.setApiKey(API_KEY);
    }

    public async open(testDesc: string, testName: string, boudingBoxObj?: { width: number; height: number }) : Promise<any> {
        return this.eyes.open(browser, testName, testDesc, boudingBoxObj === undefined ? {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} : boudingBoxObj).then(Reporter.debug("Eyes opened"));
    }

    public close() : Promise<any> {
        return this.eyes.close();
    }

    public abortIfNotClosed() : Promise<any> {
        return this.eyes.abortIfNotClosed();
    }

    public forceFullPageScreenshot(onOff : boolean) : Promise<any> {
        this.eyes.setHideScrollbars(onOff);

        return this.eyes.setForceFullPageScreenshot(onOff);
    }//matchtimeout
}
