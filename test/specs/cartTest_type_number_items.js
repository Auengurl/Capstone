
import CartArea from '../pageobjects/cart.js';


describe('cart page and components', () => {
   

    it('add multiple items by typing in a number to the chart to see if the icon changes', async () => {
        
        await CartArea.changeCartSideMenuItemQuantity(15);
    })


})






