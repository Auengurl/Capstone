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


        await this.sortOption.moveTo();
        await this.sortOption.click();

        
        await expect(browser).toHaveUrl(expectedUrl);
    }
    // const menuItems = NavHeader.menuItems; 

    //     for (const item of menuItems) {
    //         const { title, expectedUrl } = item; 
    //         await NavHeader.selectProductSubMenuOpenExpectUrl(await title, expectedUrl);
            
    //     }


 }

 export default new SortBy();