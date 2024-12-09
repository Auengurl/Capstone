
import CartArea from '../pageobjects/cart.js';


describe('cart page and components', () => {
    // it('cart side menu opens and closes from cart icon on all pages', async () => {
    //     await CartArea.cartOpenOnAllPages();
    // })

    // it('continue browsing button should work if open cart menu', async () => {
    //     await CartArea.continueBrowsingReturnsCatalog();
    // })

    // it('add item to cart shows in cart', async () => {    
    //     await CartArea.addItemToCart();
    // })

    // it('add multiple items by typing in a number to the chart to see if the icon changes', async () => {
    //     await CartArea.changeCartItemQuantity(5);
    // })
    //recheck this
    // it('add multiple of item to cart using the + button', async () => {
    //     await CartArea.increaseItemInCart();

    // })

    //recheck this
    // it('decrease item in cart using the - button', async () => {
    //     await CartArea.decreaseItemInCart();
    // })

    // it('should be able to view whole cart page using View Cart button from side menu', async () => {
    //     await CartArea.cartPageOpen();
    // })

    
    //remove using the - button multiple items to cart and
    // it('remove item from the inventory page to see number in cart change', async () => {
    //     await CartArea.removeItem();
    // })

    //remove items from the cart page
    // it('remove multiple items from inventory page',async () => {
    //     await CartArea.removeMultItemsFromPage();
    // })

    // it('remove item from cart', async () => {
    //     await CartArea.removeItmFromCart();
    // })

    // work this one
    // it('remove item from cart page', async () => {
    //     await CartArea.removeItemFromCartPage();
    // })

        //not sure on this
    // it('checkout page accessible from cart page', async () => {
    //     await CartArea.checkOutFromCartPage();
    // })

    it('change cart items from Cart Page View', async () => {
        await CartArea.changeCartPageItems(10);
    })

    //recheck this
    // it('checkout page accessible from side cart menu', async () => {
    //     await CartArea.checkOutFromSideCartMenu();
    // })

    // it('shipping link opens from checkout page', async () => {
    //     await CartArea.shippingPageOpen();
    // })

   

})






