
import CartArea from '../pageobjects/cart.js';


describe('cart page and components', () => {
    
    
    it('checkout page accessible from side cart menu', async () => {
        await CartArea.checkOutFromSideCartMenu();
    })


   

})






