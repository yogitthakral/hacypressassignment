var  genericFunctions =require('../common/genericFunctions.js')


class NavBar extends genericFunctions{
    
    constructor(){
        super();
        this.Women_Link_NavBar="//a[text()='Women']";
    }



    click_Women_Link_NavBar() {
		super.clickOnElement(this.Women_Link_NavBar);
	}

}
module.exports =  NavBar;