import { $, browser } from '@wdio/globals';
import BasePage from './basePage';


class NavHeader extends BasePage{

    get homeLogoBtn () {
        return $('#logo');
    }

    get homeHeaderLink () {
        return $('#menu-item-home');
    }

    get catalogHeaderLink () {
        return $('#menu-item-catalog');
    }

    get realmCogHeaderLink () {
        return $('li[id="menu-item-read-the-cognitive-realm"]');
    }

    get categoriesMenu() {
        return $('.babymenu')
    }
    get category () {
        return $('');

    }

    
    async homePageOpen () {
        await this.openPage(this.homeHeaderLink, 'https://www.dragonsteelbooks.com/');
    }

    async catalogPageOpen() {
        await this.openPage(this.catalogHeaderLink, 'https://www.dragonsteelbooks.com/collections/all');
    }

    async realmCogPageOpen () {
        await this.openPage(this.realmCogHeaderLink, 'https://www.dragonsteelbooks.com/blogs/the-cognitive-realm');
    }

    async selectCategoryMenu () {
        await this.catalogHeaderLink.click();
        await this.categoriesMenu.click();
        await this.category.click();
        await browser.pause(3000);

    }
}

export default new NavHeader();
