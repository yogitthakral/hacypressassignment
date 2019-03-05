var genericFunctions = require('../common/genericFunctions.js')


class MyAccountPage extends genericFunctions {

    constructor() {
        super();
        this.myAccount_pageHeading = "h1.page-heading";
        this.myAccount_name = ".account > span";
        this.myAccount_welcome_message = "p.info-account";
        this.logout_Link = "a.logout";
    }

    click_logout_Link(){
        super.getWebElementFromCss(logout_Link).click();
    }

    Assert_myAccount_pageHeading(message) {
        super.getWebElementFromCss(this.myAccount_pageHeading).should('have.text', message);
    }

    Assert_myAccount_name(message) {
         super.getWebElementFromCss(this.myAccount_name).should('have.text', message);
    }


    Assert_myAccount_welcome_message(message) {
         super.getWebElementFromCss(this.myAccount_welcome_message).should('contain', message);
    }

    isVisible_logout_Link() {
     super.getWebElementFromCss(this.logout_Link).should('be.visible');
    }




}
module.exports =  MyAccountPage;