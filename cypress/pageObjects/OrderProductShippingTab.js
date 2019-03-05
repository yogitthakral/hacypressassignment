var  genericFunctions =require('../common/genericFunctions.js')


class OrderProductShippingTab extends genericFunctions{
    
    constructor(){
        super();
        this.tnc_checkbox="//div[@id='uniform-cgv']";
        this.proceedToCheckout_btn="//button[@name='processCarrier']";
    }



    click_tnc_checkbox() {
		super.clickOnElement(this.tnc_checkbox);
	}
	
	click_proceedToCheckout_btn() {
		super.clickOnElement(this.proceedToCheckout_btn);
	}

}
module.exports =  OrderProductShippingTab;