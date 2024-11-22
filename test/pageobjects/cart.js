import { $, browser } from '@wdio/globals';

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

    

    async cartOpen () {
        
        await this.cartIconBtn.click();
        await expect(this.cartSidebarMenu);
        
    }

    async cartOpenOnAllPages () {
        await NavHeader.catalogPageOpen();
        await this.cartOpen();
        await NavHeader.homePageOpen();
        await this.cartOpen();
        await NavHeader.realmCogPageOpen();
        await this.cartOpen();
        await browser.pause(3000);

    }

    async addItemToCart () {

    }


}

export default new CartArea();