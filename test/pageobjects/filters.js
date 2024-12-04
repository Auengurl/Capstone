import { $, browser } from '@wdio/globals';
import BasePage from './basePage';
import NavHeader from './navigationMenu';

 class SortBy extends BasePage{

    get sortByTable () {
        return $('#desktop-SortBy')
    }

    async sortByFilters () {
        
        await NavHeader.catalogPageOpen();

        const sortMenu = await $('select[name="sort_by"]');
        await sortMenu.moveTo();
        await sortMenu.click();
        await browser.pause(3000);
        await sortMenu.waitForDisplayed();

    }
 }

 export default new SortBy();