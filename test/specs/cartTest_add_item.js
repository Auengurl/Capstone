
import CartArea from '../pageobjects/cart.js';


describe('cart page and components', () => {
    

    it('add item to cart shows in cart', async () => {   
        await CartArea.addItemToCart();
    })



   

})






