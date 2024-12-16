export default class SideCartSelectors {

    get cartIconBtn () {
        return $('a[title="Open cart"]');
    }

    get cartSidebarMenu () {
        return $('#site-cart-sidebar');
    }

    get cartPageBtn () {
        return $('a[id="ViewCart"]');
    }

    get continueBrowsingBtn () {
        return $('a[class="cart-continue button button--fullwidth button--solid button--regular"]');
    }

    get closeShoppingSideBarBtn () {
        return $('button[class="sidebar__close"]');
    }

    get productItem() {
        return $('a[href="/collections/all/products/adolin-character-pin-series-2-013"]');
    }

    get addItemCartBtn () {
        return $('button[name="add"]');
    }
    
    get removeItemCartBtn () {
        return $('a[title="Remove"]');
    }

    get emptyCartMessage () {
        return $("//div[@class='cart__items' and contains(text(), 'Your cart is currently empty.')]");
    }

    get cartItem () {
        return $('div[data-title="Adolin Character Pin - Series 2, #012 "]');
    }

    get inputNumberBox () {
        return $('input[data-href="/cart/change?line=1&quantity=$qty"]');
    }

    get cartCount () {
        return $('span[data-header-cart-count]');
    } 

    get increaseItemBtn () {
        return $('button.qty-button.qty-plus[role="button"]');
    }

    get decreaseItemBtn () {
        return $('button.qty-button.qty-minus[role="button"]');
    }

    get checkOutBtn () {
        return $('button[id="CheckOut"]');
    }

    get shippingPageLink () {
        return $('a[href="/policies/shipping-policy"]');
    }
}

