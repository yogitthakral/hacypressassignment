var  genericFunctions =require('../common/genericFunctions.js')


class CategoryPage extends genericFunctions{
    
    constructor(){
        super();
        this.faded_thsirt_link="//h5/a[@title='Faded Short Sleeve T-shirts']";
    }



    click_faded_thsirt_link(){
        super.clickOnElement(this.faded_thsirt_link);
    }

}
module.exports =  CategoryPage;