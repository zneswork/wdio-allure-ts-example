// tslint:disable
import {Target, ConsoleLogHandler } from '@applitools/eyes-webdriverio';
import {Reporter} from "wdio-allure-ts";
import {EyesUtil} from "../utils/EyesUtil";
import {TestHelper} from "../utils/TestHelper";


let eyesUtil: EyesUtil;

const LOGIN_CONTAINER_SELECTOR: string = "//*[@class='login-container']";
const EMAIL_TEXT_BOX_SELECTOR: string = `${LOGIN_CONTAINER_SELECTOR}//input[@id='user_session_email']`;

/**
 * Apllitools POC class
 */
describe('Applitools POC', () => {
    before(async () => {
        eyesUtil  = new EyesUtil();
        await eyesUtil.open("Console AT POC", "ML");
        eyesUtil.forceFullPageScreenshot(false);
        eyesUtil.eyes.setLogHandler(new ConsoleLogHandler(true));
    });

    it('User Name credentials on login', async () => {
        Reporter.debug(`>>>>>> IM HERE`)
        TestHelper.login();

        Reporter.step("Applitools Eye Check");
        await eyesUtil.eyes.check("Login Credentials", Target.window().ignore($(`${EMAIL_TEXT_BOX_SELECTOR}`)));

    });

    after(async () => {
        await eyesUtil.close();
        await eyesUtil.abortIfNotClosed();
    });
});
