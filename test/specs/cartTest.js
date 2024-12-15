import SideCartFunctions from '../pageobjects/cartFunctions.js';

describe('Cart functionality tests', () => {
    

    describe('cart side menu opens on all pages', async () => {
        it('cart side menu opens and closes from cart icon on all pages', async () => {
            await SideCartFunctions.cartSideMenuOpenOnAllPages();
        })
    })

    describe('shipping link opens', async () => {
        it('shipping link opens from checkout page', async () => {
            await SideCartFunctions.shippingPageOpen();
        }) 
    })

    describe('remove side cart item', async () => {
        it('remove item from the cart to see empty cart', async () => {
            await browser.refresh();
            await SideCartFunctions.removeItemFromSideCart();
        })
    })

    describe('adding items to side cart', async () => {
        it('add item to side cart shows in cart', async () => {   
            await SideCartFunctions.addItemToCart();
        }) 
        it('add one more item using + button', async () => {   
            await SideCartFunctions.increaseItemInCart();
        })
        it('add multiple items by typing in a number to the chart to see if the icon changes', async () => {
            await SideCartFunctions.changeCartSideMenuItemQuantity(15);
        })

        

        it('add multiple of item to cart using the + button, and decrease item using the - button', async () => {
            await SideCartFunctions.changeCartSideMenuItemQuantity(5);
            await SideCartFunctions.updateItemQuantity('increase', 3);
        });   
    })

    describe('side cart button checkout shipping page', async () => {
        it('checkout page accessible from side cart menu', async () => {
            await SideCartFunctions.checkOutFromSideCartMenu();
        })
    })
        
    describe('side cart page open button', async () => {
        it('should be able to view whole cart page using View Cart button from side menu', async () => {
            await SideCartFunctions.cartPageOpen();
        })
    })
    
    describe('side cart continue browsing', async () => {
        it('continue browsing button should work if open cart menu', async () => {
            await SideCartFunctions.continueBrowsingReturnsToCatalogPage();
        })
    })
    


    describe('decrease items in side cart menu', async () => {
        it('change item in cart amount, and decrease item using the - button', async () => {
            await SideCartFunctions.changeCartSideMenuItemQuantity(9);
            await SideCartFunctions.updateItemQuantity('decrease', 3);
        })
    })

})
