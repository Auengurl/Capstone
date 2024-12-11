
import CartArea from '../pageobjects/cart.js';


describe('cart page and components', () => {
    
    it('remove item from the cart to see empty cart', async () => {
        await CartArea.removeItemFromSideCart();
    })
    


   

})






