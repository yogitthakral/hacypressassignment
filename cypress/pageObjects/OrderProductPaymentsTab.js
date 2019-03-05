var  genericFunctions =require('../common/genericFunctions.js')


class OrderProductPaymentsTab extends genericFunctions{
    
    constructor(){
        super();
        this.payViaWire_link="//a[@class='bankwire']";
        this.orderConfirmation_btn="//*[@id='cart_navigation']/button";
        this.productCompletionPageHeading="h1.page-heading";
        this.shippingTabHeading="li.step_done.step_done_last.four";
        this.paymentTabHeading="li#step_end.step_current.last";
        this.orderCompletionMessage=".cheque-indent > .dark";
    
    
    }



    click_payViaWire_link() {
		super.clickOnElement(this.payViaWire_link);
	}
	
	click_orderConfirmation_btn() {
		super.clickOnElement(this.orderConfirmation_btn);
	}
	
	getText_productCompletionPageHeading(message) {
		return super.getWebElementFromCss(this.productCompletionPageHeading).should('have.text', message);;
	}
	
	isVisible_shippingTabHeading() {
		 super.getWebElementFromCss(this.shippingTabHeading).should('be.visible');;
	}
	
	isVisible_paymentTabHeading() {
		 super.getWebElementFromCss(this.paymentTabHeading).should('be.visible');;
	}
	
	isVisible_orderCompletionMessage() {
		 super.getWebElementFromCss(this.orderCompletionMessage).should('be.visible');;
	}

}
module.exports =  OrderProductPaymentsTab;