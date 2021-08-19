
import { assert, expect } from 'chai';
import commonUtil from '../../utilities/common-util';
import Page from './page';

class LandingPage extends Page  {
  /**
  * define elements
  */

  get acceptCookie(){return $("button[title='Accept']");}


  get navHeaderBar(){ return $("nav[role='navigation']");}
  get navHeaderBarLogo(){return $("nav[role='navigation']  a[data-autoid ='nav:siteNavLogoSmall']"); }
  get navHeaderCar(){ return $("button[data-autoid='nav:topNavCarMenu']");}

  
  // H2 Text
  get h2Text(){return $("section[data-autoid='ModelIntro']>h2");}

  // Video 
  get video(){return $("video[role='video']");}
  get videoFormat(){return $("video[role='video']>source");}
  get btnWatchStory(){ return $("#Video-1 .a.cl > button");}

  //icon Texts
  get iconTexts(){return $$("#IconCallouts-1 .a > em[class*=a]");}



  open () {
      super.open('https://www.volvocars.com/intl/v/car-safety/a-million-more');      
      browser.pause(20000);
     // browser.maximizeWindow();
  }

  acceptCookieBanner(){
    this.acceptCookie.isDisplayed();
    this.acceptCookie.click();
    browser.pause(10000);
  }

  validateLogo(){
    this.navHeaderBarLogo.isDisplayed();
    //console.log("navbar-----",this.navHeaderBarLogo.isDisplayed())
    assert.isTrue(this.navHeaderBarLogo.isDisplayed());
  }
  
  validateOurCarIsPresent(){
    assert.isTrue(this.navHeaderCar.isDisplayed());


  }

  validateVideoPressenceAndFormat(){
    assert.isTrue(this.video.isDisplayed());
    assert.equal(this.videoFormat.getAttribute('type'),'video/mp4',"Video Format is MP4");
   
  }

  validateVideoWatch(){
    assert.isTrue(this.btnWatchStory.isDisplayed());
    assert.equal(this.btnWatchStory.getText(),"WATCH THE STORY","Text is Watch the story");
    this.btnWatchStory.click();

  }

  saveLogoImage(){
    browser.saveElement(this.navHeaderBarLogo,'Logo',{resizeDimensions: { 
      top: 10, 
      right: 5, 
      bottom: 30, 
      left: 10,
    }})
  }

  saveFullPage(){
    browser.saveFullPageScreen('FullPage', {
  		fullPageScrollTimeout: 3000,
  	});
  }

  validateLogoImage(){

    expect(browser.checkElement(this.navHeaderBarLogo, 'Logo', {
  		ignoreAntialiasing: true,
  		
  	})).toEqual(0)
  }

  validateFullPage(){
    expect(browser.checkFullPageScreen('FullPage',{
      ignoreColors:true
    })).toEqual(0)
  }


}

export default new LandingPage();
