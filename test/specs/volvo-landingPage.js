import { assert, expect } from "chai";
import volvoLandingPage from "../pageobjects/volvo-landingPage"


describe("Volvo Campaign Landing Page Validations",()=>{

    before("Launch Volvo Campaign Landing Page",()=>{
        volvoLandingPage.open();
        volvoLandingPage.acceptCookieBanner();
    })
  
    it("Validate Landing Page",()=>{
        volvoLandingPage.validateLogo();
    })

    it("Validate our car is displyed",()=>{
        volvoLandingPage.validateOurCarIsPresent();
    })

    it("Validate Video Pressence and Format",()=>{
        volvoLandingPage.validateVideoPressenceAndFormat();

    })

    it("Validate Video Watch ",()=>{
        volvoLandingPage.validateVideoWatch();
    })
})