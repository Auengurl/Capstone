import { $, browser } from '@wdio/globals';
import NavHeader from './navigationMenu.js';


class CartArea {

    get cartIconBtn () {
        return $('a[title="Open cart"]');
    }

    get cartSidebarMenu () {
        return $('#site-cart-sidebar');
    }

    get cartPageBtn () {
        return $('a[href="/cart"]')
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
    
    get removeItemCartBtn () {
        return $('a[data-href="/cart/change?line=1&quantity=0"]')
    }

    get cartItem () {
        return $('div[data-title="Adolin Character Pin - Series 2, #012 "]')
    }

    get inputNumberBox () {
        return $('input[data-href="/cart/change?line=1&quantity=$qty"]')
    }

    get checkOutBtn () {
        return $('button[name="checkout"]')
    }

    get shippingPageLink () {
        return $('a[href="/policies/shipping-policy"]')
    }

    

    async cartOpen () {
        await this.cartIconBtn.click();
        await expect(this.cartSidebarMenu);
    }

    async cartSideBarClose() {
        if (await this.closeShoppingSideBarBtn.isDisplayed()) {
          await this.closeShoppingSideBarBtn.moveTo();
          await this.closeShoppingSideBarBtn.click();
        } else {
          console.error('Close button not visible or interactable');
        }
      }


    async cartOpenOnAllPages() {

        const pages = [
            { name: 'Catalog Page', openPage: async () => await NavHeader.catalogPageOpen() },
            { name: 'Home Page', openPage: async () => await NavHeader.homePageOpen() },
            { name: 'The Cognitive Realm Page', openPage: async () => await NavHeader.realmCogPageOpen() },
            { name: 'Auction | Wind and Truth', openPage: async () => await NavHeader.auctionPageOpen() },
        ];

        for (const page of pages) {
            try {
                await page.openPage(); 
                await this.cartOpen(); // Open the cart
                await this.cartSideBarClose(); // Close the cart
                
            } catch (error) {
                console.error(`Error on ${page.name}:`, error);
            }
    
        }
    }
    

    async addItemToCart () {
        await NavHeader.catalogPageOpen();
        await this.productItem.click();
        await expect(browser.url('https://www.dragonsteelbooks.com/collections/all/products/adolin-character-pin-series-2-013'));
        await this.addItemCartBtn.click();
        await this.cartOpen();
    }

    async removeItmFromCart () {
        await this.addItemToCart();
        await this.removeItemCartBtn.click();
    }

    async changeCartItemQuantity (newQuantity) {
        await this.addItemToCart();
        await this.inputNumberBox.click();
        await this.inputNumberBox.setValue('');
        await this.inputNumberBox.setValue(newQuantity);
        const updatedValue = await this.inputNumberBox.getValue();
            if (updatedValue != newQuantity) {
                throw new Error(`Failed to update the quantity. Current value: ${updatedValue}`);
        }
    }

    async cartPageOpen () {
        await this.addItemToCart();
        await this.cartPageBtn.click();
        await expect(browser.url('https://www.dragonsteelbooks.com/cart'));
    }

   

    async checkoutPage () {
        await this.checkOutBtn.click();
        await expect(browser.url('https://www.dragonsteelbooks.com/checkout/'))
    }

    async checkOutFromCartPage () {
        await this.cartPageOpen();
        await this.checkoutPage();
    }

    async checkOutFromSideCartMenu () {
        await this.addItemToCart();
        await this.checkoutPage();
    }

    async shippingPageOpen() {
        await this.cartPageOpen();
        await this.shippingPageLink.click();
    }
}

export default new CartArea();