var Homepage = require('../pageObjects/Homepage.js')
var LoginPage = require('../pageObjects/LoginPage.js')
var CreateAccountPage = require('../pageObjects/CreateAccountPage.js')
var MyAccountPage = require('../pageObjects/MyAccountPage.js')
var CategoryPage = require('../pageObjects/CategoryPage.js')
var ProductPage = require('../pageObjects/ProductPage.js')
var ShoppingCartSummaryPage = require('../pageObjects/ShoppingCartSummaryPage.js')
var OrderProductAddressTab = require('../pageObjects/OrderProductAddressTab.js')
var OrderProductShippingTab = require('../pageObjects/OrderProductShippingTab.js')
var OrderProductPaymentsTab = require('../pageObjects/OrderProductPaymentsTab.js')
var NavBar = require('../pageObjects/NavBar.js')


class pageCollection {

    constructor(){
        this.homepageObj= new Homepage();
        this.loginPageObj= new LoginPage();
        this.createAccountPageObj= new CreateAccountPage();
        this.myAccountPageObj= new MyAccountPage();
        this.categoryPageObj=new CategoryPage();
        this.productPageObj=new ProductPage();
        this.shoppingCartSummaryPageObj=new ShoppingCartSummaryPage();
        this.orderProductAddressTabObj=new OrderProductAddressTab();
        this.orderProductShippingTabObj=new OrderProductShippingTab();
        this.orderProductPaymentsTabObj=new OrderProductPaymentsTab();
        this.navBarObj=new NavBar();
    }

    get getNavBar(){
        return this.navBarObj;
    }

    get getOrderProductPaymentsTab(){
        return this.orderProductPaymentsTabObj;
    }


    get getOrderProductShippingTab(){
        return this.orderProductShippingTabObj;
    }

    get getOrderProductAddressTab(){
        return this.orderProductAddressTabObj;
    }

    get getShoppingCartSummaryPage(){
        return this.shoppingCartSummaryPageObj;
    }

    get getProductPage(){
        if(!this.productPageObj){
            this.productPageObj= new ProductPage();
        }
        return this.productPageObj;
    }

    get getCategoryPage(){
        return this.categoryPageObj;
    }

    get getHomepage(){
        return this.homepageObj;
    }
    get getLoginPage(){
        return this.loginPageObj;
    }

    get getCreateAccountPage(){
        return this.createAccountPageObj;
    }

    get getMyAccountPage(){
        return this.myAccountPageObj;
    }
}

module.exports= new pageCollection();