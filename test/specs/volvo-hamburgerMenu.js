import hamburgerMenu from "../pageobjects/volvo-hamburgerMenu"
import volvoLandingPage from "../pageobjects/volvo-landingPage"


describe("Volvo Hamburger Menu Validations",()=>{

    before("Launch Application",()=>{
        volvoLandingPage.open();
        volvoLandingPage.acceptCookieBanner();

    })

    it("Verify Our cars hamburger menu",()=>{
        hamburgerMenu.verifyPressenceAndClick();
    })
})
