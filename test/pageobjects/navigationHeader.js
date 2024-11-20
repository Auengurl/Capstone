import { browser } from '@wdio/globals';
import { $ } from '@wdio/globals';
import BasePage from './basePage';



class NavHeader extends BasePage{

    get homeBtn () {
        return $('#logo');
    }

    get homeHeader () {
        return $('#menu-item-home');
    }

    get catalogHeader () {
        return $('#menu-item-catalog');
    }

    get readCogHeader () {
        return $('menu-item-read-the-cognitive-realm');
    }


  

    async menuHeadersOpen () {
        await this.openBasePage();
        await this.catalogHeader.click();
        await expect(browser.url('https://www.dragonsteelbooks.com/collections/all'));
    }
    
}

export default new NavHeader();
