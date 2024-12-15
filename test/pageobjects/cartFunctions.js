import NavHeader from './navigationMenu';
import SideCartSelectors from './cartSelectors';

class SideCartFunctions extends SideCartSelectors {
    
    async mouseMoveItClickIt (element) {
        await element.waitForClickable({ timeout: 5000 });
        await element.scrollIntoView();
        await browser.pause(1000);
        await element.moveTo();
        await element.click();
        
    }

    async mouseNoScrollJustMoveAndClickIt (element) {
        // await element.waitForClickable({ timeout: 5000 });
        await element.moveTo();
        await element.click();
    }

    async skipSideCartAdditionalContent () {
        await browser.execute(() => {
            const recommendations = document.getElementById('cart-recommendations');
            if (recommendations) {
                recommendations.style.display = 'none';
            }
        });
        await $('#effectiveAppsCDTContainer').waitForExist();
    }
    
    
    async cartOpen () {
        await this.cartIconBtn.click();
        await expect(this.cartSidebarMenu);
    }

    async cartSideBarClose() {
        if (await this.closeShoppingSideBarBtn.isDisplayed()) {
            await this.mouseMoveItClickIt(this.closeShoppingSideBarBtn);
        } 
        else {
          console.error('Close button not visible or interactable');
        }
    }

    async cartSideMenuOpenOnAllPages() {

        const pages = [
            { name: 'Catalog Page', openNavigationHeaderPage: async () => await NavHeader.catalogPageOpen() },
            { name: 'Home Page', openNavigationHeaderPage: async () => await NavHeader.homePageOpen() },
            { name: 'The Cognitive Realm Page', openNavigationHeaderPage: async () => await NavHeader.realmCogPageOpen() },
        ];

        for (const page of pages) {
            try {
                await page.openNavigationHeaderPage(); 
                await this.cartOpen(); 
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

        await this.cartOpen();
    }

    async removeItemFromSideCart () {
        await this.addItemToCart();
        await browser.pause(1000); //Tried the wait for unable to work witout the pause
        await this.mouseMoveItClickIt(this.removeItemCartBtn);
        const msg = await this.emptyCartMessage;
        await expect(msg).toBeDisplayed(); 
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

        await browser.execute(() => {
            const recommendations = document.getElementById('cart-recommendations');
            if (recommendations) {
                recommendations.style.display = 'none';
            }
        }); 
        await browser.saveScreenshot('./screenshots/full-page.png');
        await this.mouseNoScrollJustMoveAndClickIt(this.increaseItemBtn);
        await browser.pause(1000);
        await browser.saveScreenshot('./screenshots/full-page-after.png');
    
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
    
    async updateItemQuantity(action, times) {
    
        const itemInputField = await this.inputNumberBox;
        const initialQuantity = parseInt(await itemInputField.getValue());
    
        const expectedQuantity =
            action === 'increase' ? initialQuantity + times : initialQuantity - times;
    
        const buttonToClick =
            action === 'increase' ? this.increaseItemBtn : this.decreaseItemBtn;
    
        for (let i = 0; i < times; i++) {
            await this.skipSideCartAdditionalContent();
            await buttonToClick.scrollIntoView();            
            await buttonToClick.click();
    }
    
        await browser.waitUntil(async () => {
            const currentQuantity = parseInt(await itemInputField.getValue());
            return currentQuantity === expectedQuantity;
        }, {
            timeout: 5000,
            timeoutMsg: `The quantity did not update to ${expectedQuantity} as expected ${action} ${times}.`
        });
    
        const finalQuantity = parseInt(await itemInputField.getValue());
        await expect(finalQuantity).toBe(expectedQuantity);
    }

    async cartPageOpen() {
        await this.addItemToCart();
        await browser.waitUntil(async () => parseInt(await this.cartCount.getText()) > 0);
        // await this.skipSideCartAdditionalContent();
        await this.mouseMoveItClickIt(this.cartPageBtn);
        await expect(browser.waitUntil(async () => (await browser.getUrl()).includes('/cart')));
    }

   async cartPageAddItems () {
        await this.cartPageOpen();
        await this.increaseItemInCart();
   }

    async checkoutPage () {
        await this.skipSideCartAdditionalContent();
        await this.mouseMoveItClickIt(this.checkOutBtn);

        await expect(browser.url('https://www.dragonsteelbooks.com/checkout/'));
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
        await this.addItemToCart();
        // Pause required because of Webdrivrer bug: https://github.com/webdriverio/webdriverio/issues/13789
        await browser.pause(1000);
        await this.mouseMoveItClickIt(this.shippingPageLink);
        await expect(browser.url('https://www.dragonsteelbooks.com/policies/shipping-policy'));
    }

    async continueBrowsingReturnsToCatalogPage () {
        await this.removeItemFromSideCart();
        await browser.pause(1000);

        await this.mouseMoveItClickIt(this.continueBrowsingBtn);

        await expect(NavHeader.catalogHeaderLink).waitForExist;
    }
}

export default new SideCartFunctions();