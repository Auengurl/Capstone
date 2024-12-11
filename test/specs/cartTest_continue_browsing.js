
import CartArea from '../pageobjects/cart.js';


describe('cart page and components', () => {
    

    it('continue browsing button should work if open cart menu', async () => {
        await CartArea.continueBrowsingReturnsToCatalogPage();
    })



   

})






