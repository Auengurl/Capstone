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
    
    get allProdsMenuDrop () {
        return $('a[title="All Products"]')
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

    // async selectCategoryMenu () {
    //     await this.openPage();
    //     await this.catalogHeaderLink.click();
    //     await this.categoriesMenu.click();
    //     await this.category.click();
    //     await browser.pause(3000);

    // }

    async subMenuOpen() {
        await this.openPage;

        // Hover over the Catalog menu to open the dropdown
        const catalogMenu = await $('#menu-item-catalog > a'); // Selector for "Catalog"
        await catalogMenu.moveTo();

        // Wait for the "All Products" submenu to appear
        const allProducts = await $('a[title="All Products"]');
        await allProducts.waitForDisplayed();
        await allProducts.moveTo();

        await browser.pause(3000);
    

    // Wait for the "Leatherbound Books" menu item to appear
    const leatherboundBooksMenu = await $('#SiteNavLabel-all-products-classic');
    await leatherboundBooksMenu.waitForDisplayed();
    await leatherboundBooksMenu.moveTo();


    // Click on the "Leatherbound Books" menu item
    await leatherboundBooksMenu.click();

    // Optionally, verify that the correct page loaded
    await expect(browser.url('https://www.dragonsteelbooks.com/collections/leatherbound-books'));
    }

}

export default new NavHeader();
