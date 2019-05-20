import {BrowserUtils, TestUtils} from 'wdio-allure-ts';
import {loginPage} from "../pages/LoginPage";
import { urlUtil } from './urlUtil';

export interface IUser {
    name?: string;
    password?: string;
    baseUrl?: string;
}

/**
 * Holds common methods for tests
 */
namespace TestHelper {

    export function getUser() : IUser {

        return {name: TestUtils.randomString(6), password:TestUtils.randomString(6), baseUrl:"https://cloudinary.com/"};
    }
    /**
     * Login with User
     */
    export function login(): void {

        loginPage.navigate();

        loginPage.login(getUser());

        BrowserUtils.expectCurrentUrl(urlUtil.loginUrl());
    }
}

export { TestHelper };
