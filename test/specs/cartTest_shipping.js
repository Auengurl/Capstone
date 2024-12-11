
import CartArea from '../pageobjects/cart.js';


describe('cart page and components', () => {
    

    it.only('shipping link opens from checkout page', async () => {
        await CartArea.shippingPageOpen();
    })

   

})






