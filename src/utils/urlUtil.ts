import {BrowserUtils} from 'wdio-allure-ts';

const CONSOLE: string = 'console';
const LOGIN: string = 'users/login';

/**
 *  An abstraction on top of our host.
 *  Instead of crafting urls directly every time
 */
class UrlUtilClass {
    private testBaseUrl: string;

    constructor() {
        const userBaseUrl: string ="https://cloudinary.com/";
        if (userBaseUrl === undefined) {
            throw new Error("Missing test base url.");
        }
        this.testBaseUrl = BrowserUtils.normalizeUrl(userBaseUrl);
    }

    public consoleUrl(): string {
        return `${this.testBaseUrl}/${CONSOLE}`;
    }

    public loginUrl(): string {
        return `${this.testBaseUrl}/${LOGIN}`;
    }

}

export const urlUtil: UrlUtilClass = new UrlUtilClass();
