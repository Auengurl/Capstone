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

        const sortMenu = await $('select[name="sort_by"]');
        await sortMenu.moveTo();
        await sortMenu.click();
        
        await sortMenu.waitForDisplayed();

    }

    async sortByDisplayed () {
        await this.sortByFiltersMenu();

        const displayProducts = await this.sortBySelectors;
        await this.displayProducts.moveTo();
        await this.displayProducts.click();
    }


 }

 export default new SortBy();