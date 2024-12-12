import CartArea from '../pageobjects/cart.js';

describe('cart side menu opens on all pages', async () => {
    it('cart side menu opens and closes from cart icon on all pages', async () => {
        await CartArea.cartSideMenuOpenOnAllPages();
    })
})

describe('adding items to side cart', async () => {

    it('add item to side cart shows in cart', async () => {   
        await CartArea.addItemToCart();
    })

    it('add multiple of item to cart using the + button, and decrease item using the - button', async () => {
        await CartArea.changeCartSideMenuItemQuantity(5);
        await CartArea.updateItemQuantity('increase', 3);
    });

    it('add one more item using + button', async () => {   
        await CartArea.increaseItemInCart();
    })

    it('add multiple items by typing in a number to the chart to see if the icon changes', async () => {
        await CartArea.changeCartSideMenuItemQuantity(15);
    })
   
})

    
describe('side cart buttons checkout, view cart, continue browsing, shipping page', async () => {

    it('checkout page accessible from side cart menu', async () => {
        await CartArea.checkOutFromSideCartMenu();
    })
    
    it('should be able to view whole cart page using View Cart button from side menu', async () => {
        await CartArea.cartPageOpen();
    })

    it('continue browsing button should work if open cart menu', async () => {
        await CartArea.continueBrowsingReturnsToCatalogPage();
    })
    
    it('shipping link opens from checkout page', async () => {
        await CartArea.shippingPageOpen();
    })
})
    

    
describe('decrease items in side cart menu', async () => {

    it('change item in cart amount, and decrease item using the - button', async () => {
        await CartArea.changeCartSideMenuItemQuantity(9);
        await CartArea.updateItemQuantity('decrease', 3);
    })
})
    
describe('remove side cart item', async () => {

      it('remove item from the cart to see empty cart', async () => {
        await CartArea.removeItemFromSideCart();
    })
})
  

    

    

   



