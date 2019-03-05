var  genericFunctions =require('../common/genericFunctions.js')


class OrderProductAddressTab extends genericFunctions{
    
    constructor(){
        super();
        this.proceedToCheckout_btn="//button[@name='processAddress']";
    }



    click_proceedToCheckout_btn() {
		super.clickOnElement(this.proceedToCheckout_btn);
	}

}
module.exports =  OrderProductAddressTab;