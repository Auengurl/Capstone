import { $, browser } from '@wdio/globals';
import BasePage from './basePage';
import NavHeader from './navigationMenu';

 class SortBy extends BasePage{

    get sortByTable () {
        return $('#desktop-SortBy')
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
    
    async selectSortByOption(name, value) {
        await this.sortByFiltersMenu();
    
        const sortOptionElement = await $('option[value="'+value+'"]');
        await sortOptionElement.click();
        await expect(browser.url('`https://www.dragonsteelbooks.com/collections/all?sort_by=${sortOptionElement.value}`;'))
    }


 }

 export default new SortBy();