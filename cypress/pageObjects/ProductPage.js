var  genericFunctions =require('../common/genericFunctions.js')


class ProductPage extends genericFunctions{
    
    constructor(){
        super();
        this.addToCart_btn="//button[@name='Submit']";
        this.proceedToCheckout_btn=".button-medium > span";
    }



    click_addToCart_btn() {
		super.clickOnElement(this.addToCart_btn);
		
	}
	click_proceedToCheckout_btn() {
		super.getWebElementFromCss(this.proceedToCheckout_btn).click();
	}

}
module.exports =  ProductPage;