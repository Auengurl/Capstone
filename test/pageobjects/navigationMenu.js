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
    
    get menuItems () {
        return [$('a[title="LEATHERBOUND BOOKS"]'),
        $('a[title="YEAR OF SANDERSON"]'),
        $('a[title="PRINTED BOOKS"]'),
        $('a[title="DIGITAL BOOKS"]'),
        $('a[title="NEW PRODUCTS"]'),
        $('a[title="SWAG"]'),
        $('a[title="APPAREL"]'),
        $('a[title="DECALS AND STICKERS"]'),
        $('a[title="TOYS, GAMES, AND PUZZLES"]'),
        $('a[title="ART PRINTS"]'),
        $('a[title="BROTHERWISE GAMES"]'),
        $('a[title="EXTERNAL VENDORS"]')
        ];
    }

    get expectedUrls () {
        return [$('https://www.dragonsteelbooks.com/collections/leatherbound-books'),
        $('https://www.dragonsteelbooks.com/collections/the-year-of-sanderson'),
        $('https://www.dragonsteelbooks.com/collections/printed-books'),
        $('https://www.dragonsteelbooks.com/collections/ebooks'),
        $('https://www.dragonsteelbooks.com/collections/new-items'),
        $('https://www.dragonsteelbooks.com/collections/swag'),
        $('https://www.dragonsteelbooks.com/collections/apparel'),
        $('https://www.dragonsteelbooks.com/collections/decals-stickers'),
        $('https://www.dragonsteelbooks.com/collections/puzzles'),
        $('https://www.dragonsteelbooks.com/collections/art-prints'),
        $('https://www.dragonsteelbooks.com/collections/brotherwise-games'),
        $('https://www.dragonsteelbooks.com/collections/external_vendors'),
        ];
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


    }

    async selectProductSubMenuOpen() {
        await this.subMenuOpen();

    // Wait for the "Leatherbound Books" menu item to appear
        const leatherboundBooksMenu = await $('a[title="LEATHERBOUND BOOKS"]');
        // await leatherboundBooksMenu.waitForDisplayed();
        await leatherboundBooksMenu.moveTo();
        await browser.pause(3000);


        // Click on the "Leatherbound Books" menu item
        await leatherboundBooksMenu.click();

        // Optionally, verify that the correct page loaded
        await expect(browser.url('https://www.dragonsteelbooks.com/collections/leatherbound-books'));
        await browser.pause(3000);
    }

    // async selectProductSubMenuOpen() {
    //     // Call the function to open the submenu
    //     await this.subMenuOpen();
    
    //     // Get all product menu items
    //     const menuItems = this.menuItems;
    
    //     // Define expected URLs corresponding to each menu item
    //     const expectedUrls = this.expectedUrls;

    //     // Loop through each menu item and click it
    //     for (let i = 0; i < menuItems.length; i++) {
    //         const menuItem = menuItems[i];
    //         const expectedUrl = expectedUrls[i];
    
    //         // Wait for the menu item to be displayed and hover over it
    //         await menuItem.waitForDisplayed({ timeout: 5000 });
    //         await menuItem.moveTo();
    //         await browser.pause(1000); // Optional: pause for better visibility during testing
    
    //         // Click the menu item
    //         await menuItem.click();
    
    //         // Verify the URL is correct
    //         await expect(browser).toHaveUrl(expectedUrl);
    
    //         // Navigate back to the main page or re-open the submenu if needed
            
    //         await this.subMenuOpen();
    //     }
    // }
    

    // async selectProductSubMenuOpen(menuItems, expectedUrls) {
    //     await this.subMenuOpen();

    //     // Loop through each menu item and perform actions
    //     for (let i = 0; i < menuItems.length; i++) {
    //         const menuItem = menuItems[i];
    //         const expectedUrl = expectedUrls[i];
    
    //         await menuItem.waitForDisplayed({ timeout: 5000 });
    //         await menuItem.moveTo();
    //         await menuItem.click();
    
    //         // Verify the URL
    //         await expect(browser).toHaveUrl(expectedUrl);
    
    //         // Navigate back and reset the state
            
    //         await this.subMenuOpen();
    //     }
    // }

}

export default new NavHeader();
