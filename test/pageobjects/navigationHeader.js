import { browser } from '@wdio/globals';
import { $ } from '@wdio/globals';
import BasePage from './basePage';



export default class NavHeader {
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
        await BasePage.openBasePage();
        await this.catalogHeader.click();
        await expect(browser.url('https://www.dragonsteelbooks.com/collections/all'));
    }
    
}

