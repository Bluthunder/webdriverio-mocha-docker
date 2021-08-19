import assert       from 'assert';
import volvoLandingPage from '../pageobjects/volvo-landingPage.js';
import LandingPage from '../pageobjects/volvo-landingPage.js';



describe('UI level Validations', ()=> {
  
  before("Launch Landing Page",()=>{
    volvoLandingPage.open();
    volvoLandingPage.acceptCookieBanner();
  })

  it("Logo Image",()=> {

    volvoLandingPage.saveLogoImage();
    volvoLandingPage.validateLogoImage();
    
  })

  it("FullPage",()=>{
    volvoLandingPage.saveFullPage();
    volvoLandingPage.validateFullPage();
  })

});
