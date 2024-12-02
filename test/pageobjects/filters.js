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
        await this.sortByTable.click();

    }
 }

 export default new SortBy();