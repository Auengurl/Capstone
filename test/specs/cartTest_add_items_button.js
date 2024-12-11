import CartArea from '../pageobjects/cart.js';
   
   
describe('cart page and components', () => {


    it('add multiple of item to cart using the + button, and decrease item using the - button', async () => {
        await CartArea.changeCartSideMenuItemQuantity(5);
        await CartArea.updateItemQuantity('increase', 3);
        
    });

})
