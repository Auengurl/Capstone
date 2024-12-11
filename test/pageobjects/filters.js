import { $, browser } from '@wdio/globals';
import BasePage from './basePage';
import NavHeader from './navigationMenu';

 class SortBy extends BasePage{

    get sortByTable () {
        return $('#desktop-SortBy')
    }

    get sortBySelectors () {
        return [$('option[value="manual"]'),
            $('option[value="best-selling"]'),
            $('option[value="title-ascending"]'),
            $('option[value="title-descending"]'),
            $('option[value="price-ascending"]'),
            $('option[value="price-descending"]'),
            $('option[value="created-ascending"]'),
            $('option[value="created-descending"]')
        ]
    }

    get sortByOptions () {
        return [
            { name: "Featured", value: "manual" },
            { name: "Best Selling", value: "best-selling" },
            { name: "Alphabetically, A-Z", value: "title-ascending" },
            { name: "Alphabetically, Z-A", value: "title-descending" },
            { name: "Price, Low to High", value: "price-ascending" },
            { name: "Price, High to Low", value: "price-descending" },
            { name: "Date, New to Old", value: "created-descending" },
            { name: "Date, Old to New", value: "created-ascending" },

        ];
    }


    async sortByFiltersMenu () {
        await NavHeader.catalogPageOpen();
        const sortMenu = await this.sortByTable;
        await sortMenu.moveTo();
        await sortMenu.click();
        await sortMenu.waitForDisplayed();

        await expect(sortMenu).toBeDisplayed();
        
    }

    async sortByDisplayed (sortSelectorTitle, expectedUrl) {
        await this.sortByFiltersMenu();

        const sortOption = await $(sortSelectorTitle);


        await sortOption.moveTo();
        await sortOption.click();

        
        await expect(browser).toHaveUrl(expectedUrl);
    }
    // const menuItems = NavHeader.menuItems; 

    //     for (const item of menuItems) {
    //         const { title, expectedUrl } = item; 
    //         await NavHeader.selectProductSubMenuOpenExpectUrl(await title, expectedUrl);
            
    //     }


 }

 export default new SortBy();