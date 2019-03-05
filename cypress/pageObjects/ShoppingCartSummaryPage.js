var  genericFunctions =require('../common/genericFunctions.js')


class ShoppingCartSummaryPage extends genericFunctions{
    
    constructor(){
        super();
        this.proceedToCheckout_btn="//p[contains(@class,'cart_navigation')]/a[@title='Proceed to checkout']";

    }



    click_proceedToCheckout_btn() {
		super.clickOnElement(this.proceedToCheckout_btn);
	}

}
module.exports =  ShoppingCartSummaryPage;