
import CartArea from '../pageobjects/cart.js';


describe('cart page and components', () => {
    it('cart side menu opens and closes from cart icon on all pages', async () => {

        await CartArea.cartSideMenuOpenOnAllPages();
    })



   

})






