
class genericFunctions {



openUrl(url){
cy.visit(url);
}

getUrl(){
    return cy.url();
}

clickOnElement(xpath){
    cy.xpath(xpath).click();
}

type(element,valueToType){
cy.xpath(element).type(valueToType);
}

selectFromDown(xpath,valueToSelect){
    cy.xpath(xpath).select(valueToSelect)
}

getWebElementFromXpath(xpath){
    return cy.xpath(xpath)
}

getWebElementFromCss(cssSelector){
    return cy.get(cssSelector, {timeout: 10000})
}

returnRandomEmail(){
    return `kiosk-${new Date().getTime()}@yopmail.com`
}






}

 module.exports = genericFunctions;