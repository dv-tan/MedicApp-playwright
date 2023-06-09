import config from "../../playwright.config";

config.testDir = '../specs';
config.use = {
    headless: false,
    env: 'stage',
    baseUrl: 'http://omega-stage.qa.nolimit.school',
    loginUrl: 'http://omega-stage.qa.nolimit.school/sign-in',
    apiUrl: 'http://omega-stage.qa.nolimit.school/back-office/api',
    singUp: 'http://omega-stage.qa.nolimit.school/sign-up',
    registrationUrl: 'http://omega-stage.qa.nolimit.school/sign-up'
};

module.exports = config;