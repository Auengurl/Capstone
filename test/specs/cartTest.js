
import CartArea from '../pageobjects/cart.js';


describe('cart page and components', () => {
    it('cart side menu opens and closes from cart icon on all pages', async () => {
        await CartArea.cartOpenOnAllPages();
    })

    it('add item to cart shows in cart', async () => {    
        await CartArea.addItemToCart();
    })

    it('add multiple items to the chart to see if the icon changes', async () => {
        await CartArea.changeCartItemQuantity(5);
    })

    it('should be able to view whole cart page using View Cart button from side menu', async () => {
        await CartArea.cartPageOpen();
    })

    it('continue browsing button should work if open cart menu', async () => {
        await CartArea.continueBrowsingReturnsCatalog();
    })
    
    //add multiple items to cart and
    // it('remove item from the inventory page to see number in cart change', async () => {
    //     await CartArea.removeItem();
    // })

    //remove items from the cart page
    // it('remove multiple items from inventory page',async () => {
    //     await CartArea.removeMultItemsFromPage();
    // })

    it('remove item from cart', async () => {
        await CartArea.removeItmFromCart();
    })

    // work this one
    // it('remove item from cart page', async () => {
    //     await CartArea.removeItemFromCartPage();
    // })

    // it('checkout page accessible from cart page', async () => {
    //     await CartArea.checkOutFromCartPage();
    // })

    // //make sure this button is visible
    // it('checkout page accessible from side cart menu', async () => {
    //     await CartArea.checkOutFromSideCartMenu();
    // })

    it('shipping link opens from checkout page', async () => {
        await CartArea.shippingPageOpen();
    })

   

})






