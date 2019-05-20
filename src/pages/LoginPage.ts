
import { BrowserUtils, Reporter } from 'wdio-allure-ts';
import {IUser, TestHelper} from "../utils/TestHelper";
import {urlUtil} from "../utils/urlUtil";
import {TextBox} from "./widgets/TextBox";
//import {Button} from "./widgets/Button";


const LOGIN_CONTAINER_SELECTOR: string = "//*[@class='login-container']";
const EMAIL_TEXT_BOX_SELECTOR: string = `${LOGIN_CONTAINER_SELECTOR}//input[@id='user_session_email']`;
const PASSWORD_TEXT_BOX_SELECTOR: string = `${LOGIN_CONTAINER_SELECTOR}//input[@id='user_session_password']`;
//const SIGN_IN_BUTTON_SELECTOR: string = `${LOGIN_CONTAINER_SELECTOR}//button[@type='submit']`;

/**
 * Login page
 */
class LoginPageClass {
    private email: TextBox = new TextBox(EMAIL_TEXT_BOX_SELECTOR);
    //private signInButton: Button = new Button(SIGN_IN_BUTTON_SELECTOR);
    private password: TextBox = new TextBox(PASSWORD_TEXT_BOX_SELECTOR);

    /**
     * Navigate to login page url
     * Its url comes from config file and depend on deployed environment
     */
    public navigate(): LoginPage {
        Reporter.step('Get User');
        TestHelper.getUser();
        Reporter.step('Navigate to login page ');
        BrowserUtils.navigateToUrl(urlUtil.loginUrl());

        return this;
    }

    /**
     * Validate page is loaded - checks that current url match login page url
     */
    public isLoaded(): LoginPage {
        BrowserUtils.expectCurrentUrl(urlUtil.loginUrl());

        return this;
    }

    /**
     * Login with user credentials
     * Set email, password and click submit button
     * Validate redirection to console
     * @param user user to login with
     */
    public login(user: IUser): void {
        const email: string = user.name;
        const password: string = user.password;
        Reporter.step(`Login with ${email}`);
        this.isLoaded();

        Reporter.debug('Set email');
        this.email.setValue(email);

        Reporter.debug('Set password');
        this.password.setValue(password);

        //Reporter.debug('Click Sign in button');
        // this.signInButton.click(); //Once logged in, button should not be visible
        // this.signInButton.notVisible();
    }

}

export const loginPage: LoginPage = new LoginPageClass();
export type LoginPage = LoginPageClass;
