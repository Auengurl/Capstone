
import CartArea from '../pageobjects/cart.js';


describe('cart page and components', () => {
    

    it('shipping link opens from checkout page', async () => {
        await CartArea.shippingPageOpen();
    })

   

})






