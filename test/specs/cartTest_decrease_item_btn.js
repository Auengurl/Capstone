import CartArea from '../pageobjects/cart.js';
   
   
describe('cart page and components', () => {


   

    it('add multiple of item to cart using the + button, and decrease item using the - button', async () => {
        
        await CartArea.changeCartSideMenuItemQuantity(9);
        await CartArea.updateItemQuantity('decrease', 3);
    });

})
