
import { assert } from 'chai';
import Page from './page';

class HamburgerMenu extends Page{
    
    get hamburgerMenu(){return $("button[data-autoid='nav:siteNavHamburgerIcon']");}
    get hamburgerMenuOptions(){return $$("button[data-autoid='nav:sideNavLinksMenuDrawer']");}
    get hamburgerMenuFooter(){return $$("div[data-autoid='nav:sideNavFooterContainer']");}
    get hamburgerMenuMarketName(){ return $("p[data-autoid='nav:sideNavMarketName']");}

    //Buy Side Menu
    get navSideTitleBuy(){return $("p[data-autoid='nav:sideNavTitle']");}
    get navSideBuyH3(){return $$("div[data-autoid='nav:sideNavLinksMenuDraw']>h3");}
    get navSideBuyA(){return $$("div[data-autoid='nav:sideNavLinksMenuDraw']>a");}


    verifyPressenceAndClick(){

        try {
            assert.isTrue(this.hamburgerMenu.isDisplayed());
            assert.isTrue(this.hamburgerMenu.isClickable());
            this.hamburgerMenu.click();
        } catch (error) {
            console.log(error);
        }
                
    }

    

}

export default new HamburgerMenu();