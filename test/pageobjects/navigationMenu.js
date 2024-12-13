import BasePage from './basePage';

class NavHeader extends BasePage{

    get homeLogoBtn () {
        return $('#logo');
    }

    get homeHeaderLink () {
        return $('#menu-item-home');
    }

    get catalogHeaderLink () {
        return $('#menu-item-shop-the-catalog');
    }

    get realmCogHeaderLink () {
        return $('li[id="menu-item-enter-the-cognitive-realm"]');
    }

    
    get menuItems () {
        return [
            {
                title: 'a[title="LEATHERBOUND BOOKS"]', 
                expectedUrl: 'https://www.dragonsteelbooks.com/collections/leatherbound-books'
            },
            {
                title: 'a[title="YEAR OF SANDERSON"]',
                expectedUrl: 'https://www.dragonsteelbooks.com/collections/the-year-of-sanderson'
            },
            {
                title: 'a[title="PRINTED BOOKS"]',
                expectedUrl: 'https://www.dragonsteelbooks.com/collections/printed-books'
            },
            {
                title: 'a[title="DIGITAL BOOKS"]',
                expectedUrl: 'https://www.dragonsteelbooks.com/collections/ebooks'
            },
            {
                title: 'a[title="NEW PRODUCTS"]',
                expectedUrl: 'https://www.dragonsteelbooks.com/collections/new-items'
            },
            {
                title: 'a[title="SWAG"]',
                expectedUrl: 'https://www.dragonsteelbooks.com/collections/swag'
            },
            {
                title: 'a[title="APPAREL"]',
                expectedUrl: 'https://www.dragonsteelbooks.com/collections/apparel'
            },
            {
                title: 'a[title="DECALS AND STICKERS"]',
                expectedUrl: 'https://www.dragonsteelbooks.com/collections/decals-stickers'
            },
            {
                title: 'a[title="TOYS, GAMES, AND PUZZLES"]',
                expectedUrl: 'https://www.dragonsteelbooks.com/collections/puzzles'
            },
            {
                title: 'a[title="ART PRINTS"]',
                expectedUrl: 'https://www.dragonsteelbooks.com/collections/art-prints'
            },
            {
                title: 'a[title="BROTHERWISE GAMES"]',
                expectedUrl: 'https://www.dragonsteelbooks.com/collections/brotherwise-games'
            },
            {
                title: 'a[title="EXTERNAL VENDORS"]',
                expectedUrl: 'https://www.dragonsteelbooks.com/collections/external_vendors'
            }
        ];
    }


    
    
    async homePageOpen () {
        await this.openNavigationHeaderPage(this.homeHeaderLink, 'https://www.dragonsteelbooks.com/');
    }

    async catalogPageOpen() {
        await this.openNavigationHeaderPage(this.catalogHeaderLink, 'https://www.dragonsteelbooks.com/collections/all');
    }

    async realmCogPageOpen () {
        await this.openNavigationHeaderPage(this.realmCogHeaderLink, 'https://www.dragonsteelbooks.com/blogs/the-cognitive-realm');
    }

   

    async subMenuOpen () {
        await this.openDragonsteelHomeBasePage();

        const catalogMenu = await $('a[title="Shop The Catalog"]'); 
        await catalogMenu.moveTo();

        const allProducts = await $('a[title="All Products"]');
        await allProducts.waitForDisplayed();
        await allProducts.moveTo();

        await expect(allProducts).toBeDisplayed();

    }

    async selectProductSubMenuOpenExpectUrl(titleSelector, expectedUrl) {
        await this.subMenuOpen();
        
        const menuItem = await $(titleSelector);
        await menuItem.moveTo();
        await menuItem.click();
        
        await expect(browser).toHaveUrl(expectedUrl);
    }

    
}

export default new NavHeader();
