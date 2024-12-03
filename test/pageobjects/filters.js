import { $, browser } from '@wdio/globals';
import BasePage from './basePage';
import NavHeader from './navigationMenu';

 class SortBy extends BasePage{

    get sortByTable () {
        return $('#desktop-SortBy')
    }

    async sortByFilters () {
        await this.openPage();
        await NavHeader.catalogPageOpen();

        const sortMenu = await $('select[id="desktop-SortBy"]');
        await sortMenu.moveTo();
        await sortMenu.click();

    }
 }

 export default new SortBy();