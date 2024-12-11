
import CartArea from '../pageobjects/cart.js';


describe('cart page and components', () => {
    // it('cart side menu opens and closes from cart icon on all pages', async () => {
    //     await CartArea.cartSideMenuOpenOnAllPages();
    // })

    // it('continue browsing button should work if open cart menu', async () => {
    //     await CartArea.continueBrowsingReturnsToCatalogPage();
    // })

    // it('add item to cart shows in cart', async () => {    
    //     await CartArea.addItemToCart();
    // })

    // it('add multiple items by typing in a number to the chart to see if the icon changes', async () => {
    //     await CartArea.changeCartSideMenuItemQuantity(15);
    // })

    //recheck this
    it('add multiple of item to cart using the + button, and decrease item using the - button', async () => {
        await CartArea.increaseItemInCart();
        // await CartArea.updateItemQuantity('increase', 3);
        // await CartArea.updateItemQuantity('decrease', 2);
    })

    // recheck this
    it('decrease item in cart using the - button', async () => {
        await CartArea.updateItemQuantity('decrease', 2);
    })

    // it('should be able to view whole cart page using View Cart button from side menu', async () => {
    //     await CartArea.cartPageOpen();
    // })

    
    // remove using the - button multiple items to cart and check this one!
    it('remove item from the cart to see empty cart', async () => {
        await CartArea.removeItemFromSideCart();
    })

    
    // it('checkout page accessible from side cart menu', async () => {
    //     await CartArea.checkOutFromSideCartMenu();
    // })

    // it('shipping link opens from checkout page', async () => {
    //     await CartArea.shippingPageOpen();
    // })

   

})






