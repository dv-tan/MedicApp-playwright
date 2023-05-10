const { test, expect, request } = require('@playwright/test');
const { RegistrationPage } = require('../pages/registrationPage');
const { users } = require('../../test-data/users');
const { userData } = require('../../test-data/data');
const config = require("../../playwright.config");

let registrationPage;
const user = users[config.default.use.env].user;


test.describe('Registration tests', () => {

    test.beforeEach(async ({ page }) => {
        registrationPage = new RegistrationPage(page);
        await registrationPage.open();
    });

    test.only('Registration with valid data', async ({ page }) => {
        await registrationPage.registration(userData.generatedFullName, userData.generatedEmail, userData.password);
        await expect(page).toHaveURL('http://omega-stage.qa.nolimit.school/sign-in');
    });

    test('Open Sing In Page', async ({ page }) => {
        await registrationPage.openSingInPage();
        await expect(page).toHaveURL('http://omega-stage.qa.nolimit.school/sign-in');
    });
});
