var genericFunctions = require('../common/genericFunctions.js')


class CreateAccountPage extends genericFunctions {

    constructor() {
        super();
        this.gender_Mr_radioBtn = "input#id_gender1";
        this.gender_Mrs_radioBtn = "input#id_gender2";
        this.customerFirstName_InputField = "//input[@id='customer_firstname']";
        this.customerLastName_InputField = "//input[@id='customer_lastname']";
        this.password_InputField = "//input[@id='passwd']";
        this.dob_days_dropdown = "//select[@id='days']";
        this.dob_months_dropdown = "//select[@id='months']";
        this.dob_years_dropdown = "//select[@id='years']";
        this.company_inputField = "//input[@id='company']";
        this.address1_inputField = "//input[@id='address1']";
        this.address2_inputField = "//input[@id='address2']";
        this.city_inputField = "//input[@id='city']";
        this.state_drop_down = "//select[@id='id_state']";
        this.postcode_inputField = "//input[@id='postcode']";
        this.other_inputField = "//textarea[@id='other']";
        this.phone_inputField = "//input[@id='phone']";
        this.phone_mobile_inputField = "//input[@id='phone_mobile']";
        this.alias_inputField = "//input[@id='alias']";
        this.submitAccount_btn = "//button[@id='submitAccount']";
    }


	 click_gender_radioBtn(gender) {
		if(gender.toUpperCase()==="MALE") {
			super.getWebElementFromCss(this.gender_Mr_radioBtn).click();
		}else {
		super.getWebElementFromCss(this.gender_Mrs_radioBtn).click();
	}}
	
	 fill_customerFirstName_InputField(value_To_Fill) {
		super.type(this.customerFirstName_InputField, value_To_Fill);
	}
	
	 fill_customerLastName_InputField(value_To_Fill) {
		super.type(this.customerLastName_InputField, value_To_Fill);
	}
	
	 fill_password_InputField(value_To_Fill) {
		super.type(this.password_InputField, value_To_Fill);
	}
	
	 fill_company_inputField(value_To_Fill) {
		super.type(this.company_inputField, value_To_Fill);
	}
	
	 fill_address1_inputField(value_To_Fill) {
		super.type(this.address1_inputField, value_To_Fill);
	}
	
	 fill_address2_inputField(value_To_Fill) {
		super.type(this.address2_inputField, value_To_Fill);
	}
	
	 fill_city_inputField(value_To_Fill) {
		super.type(this.city_inputField, value_To_Fill);
	}
	
	 fill_postcode_inputField(value_To_Fill) {
		super.type(this.postcode_inputField, value_To_Fill);
	}
	
	 fill_other_inputField(value_To_Fill) {
		super.type(this.other_inputField, value_To_Fill);
	}
	
	 fill_phone_inputField(value_To_Fill) {
		super.type(this.phone_inputField, value_To_Fill);
	}
	
	 fill_phone_mobile_inputField(value_To_Fill) {
		super.type(this.phone_mobile_inputField, value_To_Fill);
	}
	
	 fill_alias_inputField(value_To_Fill) {
		super.type(this.alias_inputField, value_To_Fill);
	}
	
	 select_state_drop_down(value_To_Select) {
		super.selectFromDown(this.state_drop_down, value_To_Select);
	}
	
	
	 click_submitAccount_btn() {
		this.clickOnElement(this.submitAccount_btn);
    }


    select_dob_from_dropdown(dob_with_hyphen_separator) {
        var dobArray=dob_with_hyphen_separator.split("\\-");
        if(dobArray.length===3){
            super.selectFromDown(dob_days_dropdown,dobArray[0]);
            super.selectFromDown(dob_months_dropdown,dobArray[1]);
            super.selectFromDown(dob_years_dropdown,dobArray[2]);
        }
    }
	
	



 fill_registerForm(registerObject) {
	this.click_gender_radioBtn(registerObject[0].Gender);
	this.fill_customerFirstName_InputField(registerObject[0].FirstName);
	this.fill_customerLastName_InputField(registerObject[0].LastName);
	this.fill_password_InputField(registerObject[0].Password);
	this.select_dob_from_dropdown(registerObject[0].DOB);
	this.fill_company_inputField(registerObject[0].Company);
	this.fill_address1_inputField(registerObject[0].Address1);
	this.fill_address2_inputField(registerObject[0].Address2);
	this.fill_city_inputField(registerObject[0].City);
	this.select_state_drop_down(registerObject[0].State);
	this.fill_postcode_inputField(registerObject[0].Postcode);
	this.fill_other_inputField(registerObject[0].Other);
	this.fill_phone_inputField(registerObject[0].Phone);
	this.fill_phone_mobile_inputField(registerObject[0].Mobile);
	this.fill_alias_inputField(registerObject[0].Alias);
	this.click_submitAccount_btn();
	
}
}
module.exports =  CreateAccountPage;