import CartArea from '../pageobjects/cart.js';
import CartPart2 from '../pageobjects/cartItems.js';

describe('cart side menu opens on all pages', async () => {
    it('checkout page accessible from side cart menu', async () => {
        await CartPart2.checkOutFromSideCartMenu();
    })  
    
    it('cart side menu opens and closes from cart icon on all pages', async () => {
        await CartArea.cartSideMenuOpenOnAllPages();
    })

    
})

describe('remove side cart item', async () => {

    it('remove item from the cart to see empty cart', async () => {
      await CartPart2.removeItemFromSideCart();
  })
})

describe('side cart buttons checkout, view cart, continue browsing, shipping page', async () => {

  
    
    it('should be able to view whole cart page using View Cart button from side menu', async () => {
        await CartPart2.cartPageOpen();
    })

    it('continue browsing button should work if open cart menu', async () => {
        await CartPart2.continueBrowsingReturnsToCatalogPage();
    })
    
    it('shipping link opens from checkout page', async () => {
        await CartPart2.shippingPageOpen();
    })
})

describe('adding items to side cart', async () => {

    it('add multiple of item to cart using the + button, and decrease item using the - button', async () => {
        await CartPart2.changeCartSideMenuItemQuantity(5);
        await CartPart2.updateItemQuantity('increase', 3);
    });
    
    it('add item to side cart shows in cart', async () => {   
        await CartPart2.addItemToCart();
    })

    it('add one more item using + button', async () => {   
        await CartPart2.increaseItemInCart();
    })

    it('add multiple items by typing in a number to the chart to see if the icon changes', async () => {
        await CartPart2.changeCartSideMenuItemQuantity(15);
    })
   
})

describe('decrease items in side cart menu', async () => {

    it('change item in cart amount, and decrease item using the - button', async () => {
        await CartPart2.changeCartSideMenuItemQuantity(9);
        await CartPart2.updateItemQuantity('decrease', 3);
    })
})
    
  

    

    

   



