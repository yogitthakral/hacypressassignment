var genericFunctions = require('../common/genericFunctions.js')


class LoginPage extends genericFunctions {

    constructor() {
        super();
        this.signup_email_InputField = "//input[@id='email_create']";
        this.signup_submit_btn = "//button[@id='SubmitCreate']";
        this.login_email_InputField = "//input[@id='email']";
        this.login_passwd_InputField = "//input[@id='passwd']";
        this.login_submit_btn = "//button[@id='SubmitLogin']";
    }


    fill_login_email_InputField(email) {
		super.type(this.login_email_InputField, email);
	}
    fill_login_passwd_InputField(password) {
		super.type(this.login_passwd_InputField, password);
	}
	
    click_login_submit_btn() {
		super.clickOnElement(this.login_submit_btn);
	}
		
    fill_random_signup_email_InputField() {
		super.type(this.signup_email_InputField, super.returnRandomEmail());
	}
	
    click_signup_submit_btn() {
		super.clickOnElement(this.signup_submit_btn);
	}

}
module.exports =  LoginPage;