class CartPart3 extends CartArea {

    async removeItemFromSideCart () {
        await this.addItemToCart();
        await this.removeItemCartBtn.waitForClickable({ timeout: 5000 });
        await this.removeItemCartBtn.click();
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
        
        await this.increaseItemBtn.waitForDisplayed({ timeout: 5000 });
        
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
    

    async updateItemQuantity(action, times) {
    
        const itemInputField = await this.inputNumberBox;
        const initialQuantity = parseInt(await itemInputField.getValue());
    
        const expectedQuantity =
            action === 'increase' ? initialQuantity + times : initialQuantity - times;
    
        const buttonToClick =
            action === 'increase' ? this.increaseItemBtn : this.decreaseItemBtn;
    
        for (let i = 0; i < times; i++) {
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
        await this.checkOutBtn.waitForDisplayed({ timeout: 5000 });
        await this.checkOutBtn.scrollIntoView();
        await this.checkOutBtn.moveTo();
        await this.checkOutBtn.click();
        await expect(browser.url('https://www.dragonsteelbooks.com/checkout/'))
    }


    async checkOutFromSideCartMenu () {
        await this.addItemToCart();
        await this.checkoutPage();
    }

    async shippingPageOpen () {
        await this.addItemToCart();

        await this.shippingPageLink.scrollIntoView();
        await this.shippingPageLink.moveTo();
        await this.shippingPageLink.click();

        await expect(browser.url('https://www.dragonsteelbooks.com/policies/shipping-policy'));
    }

    async continueBrowsingReturnsToCatalogPage () {
        
        await this.removeItemFromSideCart();

        await this.continueBrowsingBtn.waitForDisplayed({ timeout: 5000 });
        await this.continueBrowsingBtn.scrollIntoView();
        await this.continueBrowsingBtn.isDisplayed();
        await this.continueBrowsingBtn.click();
        await expect(NavHeader.catalogHeaderLink).waitForExist;

        
    }
}

export default new CartPart3();