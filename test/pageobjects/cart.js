import { $, browser } from '@wdio/globals';

import BasePage from './basePage.js';
import NavHeader from './navigationMenu.js';


class CartArea {

    get cartIconBtn () {
        return $('a[title="Open cart"]');
    }

    get cartSidebarMenu () {
        return $('#site-cart-sidebar');
    }

    get continueBrowsingBtn () {
        return $('a[class="cart-continue button button--fullwidth button--solid button--regular"]')
    }

    get closeShoppingSideBarBtn () {
        return $('button[class="sidebar__close"]')
    }

    get productItem() {
        return $('a[href="/collections/all/products/adolin-character-pin-series-2-013"]')
    }

    get addItemCartBtn () {
        return $('button[name="add"]')
    }
    

    async cartOpen () {
        
        await this.cartIconBtn.click();
        await expect(this.cartSidebarMenu);
        
    }
//     async cartOpenOnPages () {

//         await BasePage.o();
//         const items = this.addMultipleItems;
//             for (const item of items) {
//             await item.click();
// }
//         await expect(this.shoppingCartBtn).toBeDisplayed();
        
//     }

    async cartOpenOnAllPages () {
        await NavHeader.catalogPageOpen();
        await this.cartOpen();
        await NavHeader.homePageOpen();
        await this.cartOpen();
        await NavHeader.realmCogPageOpen();
        await this.cartOpen();
        await browser.pause(3000);

    }

    // async openCartOnPages(pages) {
    //     for (const pageOpenFunc of pages) {
    //         await pageOpenFunc(); // Navigate to the page
    //         await this.cartOpen(); // Open the cart
    //     }
    //     await browser.pause(3000); // Optional: Pause after all actions
    // }
    
    // async cartOpenOnAllPages () {
    //     const pages = [
    //         NavHeader.catalogPageOpen,
    //         NavHeader.homePageOpen,
    //         NavHeader.realmCogPageOpen
    //     ];
    //     await this.openCartOnPages(pages);
    // }
    

    

    async addItemToCart () {
        await NavHeader.catalogPageOpen();
        await this.productItem.click();
        await expect(browser.url('https://www.dragonsteelbooks.com/collections/all/products/adolin-character-pin-series-2-013'));
        await this.addItemCartBtn.click();
        await this.cartOpen();
        await browser.pause(3000);


    }


}

export default new CartArea();