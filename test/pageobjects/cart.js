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
        return $('a[href="/cart"]');
    }

    get continueBrowsingBtn () {
        return $('a[class="cart-continue button button--fullwidth button--solid button--regular"]');
    }

    get closeShoppingSideBarBtn () {
        return $('button[class="sidebar__close"]');
    }

    get productItem() {
        return $('a[href="/collections/all/products/adolin-character-pin-series-2-013"]');
    }

    get addItemCartBtn () {
        return $('button[name="add"]');
    }
    
    get removeItemCartBtn () {
        return $('a[title="Remove"]');
    }

    get emptyCartMessage () {
        return $("//div[@class='cart__items' and contains(text(), 'Your cart is currently empty.')]");
    }

    get cartItem () {
        return $('div[data-title="Adolin Character Pin - Series 2, #012 "]');
    }

    get inputNumberBox () {
        return $('input[data-href="/cart/change?line=1&quantity=$qty"]');
    }

    get cartCount () {
        return $('span[data-header-cart-count]');
    } 

    get increaseItemBtn () {
        return $('button[class="qty-button qty-plus no-js-hidden"]');
    }

    get decreaseItemBtn () {
        return $('button[class="qty-button qty-minus no-js-hidden"]');
    }

    get checkOutBtn () {
        return $('button[name="checkout"]');
    }

    get shippingPageLink () {
        return $('a[href="/policies/shipping-policy"]');
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
        // await expect.url('')
      }


    async cartSideMenuOpenOnAllPages() {

        const pages = [
            { name: 'Catalog Page', openNavigationHeaderPage: async () => await NavHeader.catalogPageOpen() },
            { name: 'Home Page', openNavigationHeaderPage: async () => await NavHeader.homePageOpen() },
            { name: 'The Cognitive Realm Page', openNavigationHeaderPage: async () => await NavHeader.realmCogPageOpen() },
            { name: 'Auction | Wind and Truth', openNavigationHeaderPage: async () => await NavHeader.auctionPageOpen() },
        ];

        for (const page of pages) {
            try {
                await page.openNavigationHeaderPage(); 

                await this.cartOpen(); 
                await expect(this.cartOpen).toBeVisible();

                await this.cartSideBarClose();
                await expect(this.cartOpen).not.toBeVisible()
                
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
        await expect(this.productItem).toBeDisplayed();

        await this.cartOpen();
        await expect(this.cartOpen).toBeDisplayed();
    }

    async removeItemFromSideCart () {
        await this.addItemToCart();
        await this.removeItemCartBtn.waitForClickable({ timeout: 5000 });
        await this.removeItemCartBtn.click();
        await expect(this.emptyCartMessage).toBeDisplayed(); 
    }

    async changeCartSideMenuItemQuantity (newQuantity) {
        await this.addItemToCart();
        await this.inputNumberBox.click();
        await this.inputNumberBox.setValue(newQuantity);
        const updatedValue = await this.inputNumberBox.getValue();
            if (updatedValue != newQuantity) {
                throw new Error(`Failed to update the quantity. Current value: ${updatedValue}`);
        }
        await browser.waitUntil(async () => {
            const cartCount = await this.cartCount.getText();
            return parseInt(cartCount) === parseInt(newQuantity);
        }, {
            timeout: 5000,
            timeoutMsg: `The cart count did not update to ${newQuantity} as expected.`
        });
        
        const cartCountText = await this.cartCount.getText();
        await expect(parseInt(cartCountText)).toBe(parseInt(newQuantity));
    }

   
    async increaseItemInCart() {
        await this.addItemToCart();
    
        const itemInputField = await this.inputNumberBox;
        let initialQuantity = await itemInputField.getValue();
        initialQuantity = parseInt(initialQuantity); 
        const expectedQuantity = initialQuantity + 1;
    
        await this.increaseItemBtn.moveTo();
        await this.increaseItemBtn.click();
    
        await browser.waitUntil(async () => {
            const currentQuantity = await itemInputField.getValue();
            return parseInt(currentQuantity) === expectedQuantity;
        }, {
            timeout: 5000, 
            timeoutMsg: `The quantity did not update to ${expectedQuantity} as expected.`
        });
    
        const updatedQuantity = await itemInputField.getValue();
        await expect(parseInt(updatedQuantity)).toBe(expectedQuantity);
    }
    
    // async decreaseItemInCart () {
    //     await this.addItemToCart();

    //     const itemInputField = await this.inputNumberBox;
    //     let initialQuantity = await itemInputField.getValue();
    //     initialQuantity = parseInt(initialQuantity); 
    //     const expectedQuantity = initialQuantity - 1;
    
    //     await this.decreaseItemBtn.moveTo();
    //     await this.decreaseItemBtn.click(); 

    //     await browser.waitUntil(async () => {
    //         const currentQuantity = await itemInputField.getValue();
    //         return parseInt(currentQuantity) === expectedQuantity;
    //     }, {
    //         timeout: 5000, 
    //         timeoutMsg: `The quantity did not update to ${expectedQuantity} as expected.`
    //     });
    
    //     const updatedQuantity = await itemInputField.getValue();
    //     await expect(parseInt(updatedQuantity)).toBe(expectedQuantity);
    // }
    
    // //trying to combine the + & - button functions
    // async updateItemQuantity(action, times) {
    //     await this.addItemToCart();
    
    //     const itemInputField = await this.inputNumberBox;
    //     const initialQuantity = parseInt(await itemInputField.getValue());
    
    //     const expectedQuantity =
    //         action === 'increase' ? initialQuantity + times : initialQuantity - times;
    
    //     const buttonToClick =
    //         action === 'increase' ? this.increaseItemBtn : this.decreaseItemBtn;
    
    //     for (let i = 0; i < times; i++) {
    //         await buttonToClick.scrollIntoView();
    //         await buttonToClick.waitForClickable({ timeout: 5000 });
    //         await buttonToClick.click();
    //         await buttonToClick.waitForClickable({ timeout: 5000 });
    
    //         await browser.pause(3000);
    //     }

    //     await browser.waitUntil(async () => {
    //         const currentQuantity = parseInt(await itemInputField.getValue());
    //         return currentQuantity === expectedQuantity;
    //     }, {
    //         timeout: 5000,
    //         timeoutMsg: `The quantity did not update to ${expectedQuantity} as expected.`
    //     });
    
    //     const finalQuantity = parseInt(await itemInputField.getValue());
    //     await expect(finalQuantity).toBe(expectedQuantity);
    // }
    

    async cartPageOpen () {
        await this.addItemToCart();
        await this.cartPageBtn.click();
        await expect(browser.url('https://www.dragonsteelbooks.com/cart'));
    }

   async cartPageAddItems () {
        await this.cartPageOpen();
        await this.increaseItemInCart();
   }

    async checkoutPage () {
        await this.checkOutBtn.moveTo();
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

    async shippingPageOpen () {
        await this.cartPageOpen();

        await this.shippingPageLink.moveTo();
        await this.shippingPageLink.click();

        await expect(browser.url('https://www.dragonsteelbooks.com/policies/shipping-policy'));
    }

    async continueBrowsingReturnsToCatalogPage () {
        
        await this.removeItemFromSideCart();

        await this.continueBrowsingBtn.isDisplayed();
        await this.continueBrowsingBtn.click();
        await NavHeader.catalogHeaderLink.waitForExist();

        await expect(browser.url('https://www.dragonsteelbooks.com/collections/all'));
    }
}

export default new CartArea();