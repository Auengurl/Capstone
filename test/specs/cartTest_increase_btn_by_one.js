import CartArea from '../pageobjects/cart.js';


describe('cart page and components', () => {
    

    it('add one more item using + button', async () => {   
        await CartArea.increaseItemInCart();
    })



   

})



