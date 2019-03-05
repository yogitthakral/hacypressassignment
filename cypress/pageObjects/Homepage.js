var  genericFunctions =require('../common/genericFunctions.js')


class Homepage extends genericFunctions{
    
    constructor(){
        super();
        this.login_btn="//a[@class='login']";
    }



    click_login_btn() {
		super.clickOnElement(this.login_btn);
	}

}
module.exports =  Homepage;