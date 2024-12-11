import { $, browser } from '@wdio/globals';
import BasePage from './basePage';


class NavHeader extends BasePage{

    get homeLogoBtn () {
        return $('#logo');
    }

    get homeHeaderLink () {
        return $('#menu-item-home');
    }

    get catalogHeaderLink () {
        return $('#menu-item-catalog');
    }

    get realmCogHeaderLink () {
        return $('li[id="menu-item-blog-the-cognitive-realm"]');
    }

    get auctionPageLink () {
        return $('li[id="menu-item-auction-wind-and-truth-handwritten-pages"]');
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

    async auctionPageOpen () {
        await this.openNavigationHeaderPage(this.auctionPageLink, 'https://www.dragonsteelbooks.com/pages/wind-and-truth-auction')
    }

    async subMenuOpen () {
        await this.openDragonsteelHomeBasePage();

        const catalogMenu = await $('#menu-item-catalog > a'); 
        await catalogMenu.moveTo();

        const allProducts = await $('a[title="All Products"]');
        await allProducts.waitForDisplayed();
        await allProducts.moveTo();

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
