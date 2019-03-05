var pageCollection = require('../common/pageCollection.js')
var generic = require('../common/genericFunctions.js')
var registerObj = require('../testData.json')

// As a new user on the website > Search for an item on the website > checkout > register and
// complete the order

describe("Automation Practice Tasks", () => {
    var genericObj = new generic();

    before(() => {
        cy.log("before started");

    });
    after(() => {
        cy.log("after running");
    });
    beforeEach(() => {
        cy.log("beforeEach started");
        genericObj.openUrl('http://automationpractice.com');
    });
    afterEach(() => {
        cy.log("afterEach running");
    });

    it('Verify That User is able to sign in to the application', () => {
        pageCollection.getHomepage.click_login_btn();
        pageCollection.getLoginPage.fill_login_email_InputField('hA_challenge_1551553374999@yopmail.com');
        pageCollection.getLoginPage.fill_login_passwd_InputField('QWERTY');
        pageCollection.getLoginPage.click_login_submit_btn();
        pageCollection.getMyAccountPage.Assert_myAccount_pageHeading('My account');
        pageCollection.getMyAccountPage.Assert_myAccount_name('Firstname Lastname');
        pageCollection.getMyAccountPage.Assert_myAccount_welcome_message('Welcome to your account.');
        pageCollection.getMyAccountPage.isVisible_logout_Link();
        genericObj.getUrl().should('include', 'controller=my-account');
    });

    // Login to the account for an existing user > search for an item on the website > checkout to
    // complete the order

    it('Verify that user logs in , searches the product and able to complete the order', () => {
        pageCollection.getHomepage.click_login_btn();
        pageCollection.getLoginPage.fill_login_email_InputField('hA_challenge_1551553374999@yopmail.com');
        pageCollection.getLoginPage.fill_login_passwd_InputField('QWERTY');
        pageCollection.getLoginPage.click_login_submit_btn();
        pageCollection.getNavBar.click_Women_Link_NavBar();
        pageCollection.getCategoryPage.click_faded_thsirt_link();
        pageCollection.getProductPage.click_addToCart_btn();
        pageCollection.getProductPage.click_proceedToCheckout_btn();
        pageCollection.getShoppingCartSummaryPage.click_proceedToCheckout_btn();
        pageCollection.getOrderProductAddressTab.click_proceedToCheckout_btn();
        pageCollection.getOrderProductShippingTab.click_tnc_checkbox();
        pageCollection.getOrderProductShippingTab.click_proceedToCheckout_btn();
        pageCollection.getOrderProductPaymentsTab.click_payViaWire_link();
        pageCollection.getOrderProductPaymentsTab.click_orderConfirmation_btn();
        pageCollection.getOrderProductPaymentsTab.getText_productCompletionPageHeading("Order confirmation");
        pageCollection.getOrderProductPaymentsTab.isVisible_shippingTabHeading();
        pageCollection.getOrderProductPaymentsTab.isVisible_paymentTabHeading();
        pageCollection.getOrderProductPaymentsTab.isVisible_orderCompletionMessage();
        genericObj.getUrl().should('include', 'controller=order-confirmation');
    });

    it('user registers on the website and gets autologged in to the account', () => {
        var name = registerObj[0].FirstName;
        var surname = registerObj[0].LastName;
        pageCollection.getHomepage.click_login_btn();
        pageCollection.getLoginPage.fill_random_signup_email_InputField();
        pageCollection.getLoginPage.click_signup_submit_btn();
        pageCollection.getCreateAccountPage.fill_registerForm(registerObj);
        pageCollection.getMyAccountPage.Assert_myAccount_pageHeading("My account");
        pageCollection.getMyAccountPage.Assert_myAccount_name(name + " " + surname);
        pageCollection.getMyAccountPage.Assert_myAccount_welcome_message('Welcome to your account.');
        pageCollection.getMyAccountPage.isVisible_logout_Link();
        genericObj.getUrl().should('include', "controller=my-account");

    });


    it('Verify that a non-logged in user searches the product and is able to complete the order by signining in before order completion', () => {

        pageCollection.getNavBar.click_Women_Link_NavBar();
        pageCollection.getCategoryPage.click_faded_thsirt_link();
        pageCollection.getProductPage.click_addToCart_btn();
        pageCollection.getProductPage.click_proceedToCheckout_btn();
        pageCollection.getShoppingCartSummaryPage.click_proceedToCheckout_btn();
        pageCollection.getLoginPage.fill_login_email_InputField('hA_challenge_1551553374999@yopmail.com');
        pageCollection.getLoginPage.fill_login_passwd_InputField('QWERTY');
        pageCollection.getLoginPage.click_login_submit_btn();
        pageCollection.getOrderProductAddressTab.click_proceedToCheckout_btn();
        pageCollection.getOrderProductShippingTab.click_tnc_checkbox();
        pageCollection.getOrderProductShippingTab.click_proceedToCheckout_btn();
        pageCollection.getOrderProductPaymentsTab.click_payViaWire_link();
        pageCollection.getOrderProductPaymentsTab.click_orderConfirmation_btn();
        pageCollection.getOrderProductPaymentsTab.getText_productCompletionPageHeading("Order confirmation");
        pageCollection.getOrderProductPaymentsTab.isVisible_shippingTabHeading();
        pageCollection.getOrderProductPaymentsTab.isVisible_paymentTabHeading();
        pageCollection.getOrderProductPaymentsTab.isVisible_orderCompletionMessage();
        genericObj.getUrl().should('include', 'controller=order-confirmation');
    });


    it('Verify that a unregistered user searches the product and is able to complete the order by doing registration before order completion', () => {

        pageCollection.getNavBar.click_Women_Link_NavBar();
        pageCollection.getCategoryPage.click_faded_thsirt_link();
        pageCollection.getProductPage.click_addToCart_btn();
        pageCollection.getProductPage.click_proceedToCheckout_btn();
        pageCollection.getShoppingCartSummaryPage.click_proceedToCheckout_btn();
        pageCollection.getLoginPage.fill_random_signup_email_InputField();
        pageCollection.getLoginPage.click_signup_submit_btn();
        pageCollection.getCreateAccountPage.fill_registerForm(registerObj);
        pageCollection.getOrderProductAddressTab.click_proceedToCheckout_btn();
        pageCollection.getOrderProductShippingTab.click_tnc_checkbox();
        pageCollection.getOrderProductShippingTab.click_proceedToCheckout_btn();
        pageCollection.getOrderProductPaymentsTab.click_payViaWire_link();
        pageCollection.getOrderProductPaymentsTab.click_orderConfirmation_btn();
        pageCollection.getOrderProductPaymentsTab.getText_productCompletionPageHeading("Order confirmation");
        pageCollection.getOrderProductPaymentsTab.isVisible_shippingTabHeading();
        pageCollection.getOrderProductPaymentsTab.isVisible_paymentTabHeading();
        pageCollection.getOrderProductPaymentsTab.isVisible_orderCompletionMessage();
        genericObj.getUrl().should('include', 'controller=order-confirmation');
    });

});
