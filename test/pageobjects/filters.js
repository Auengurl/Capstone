import BasePage from './basePage';
import NavHeader from './navigationMenu';

 class SortBy extends BasePage{

    get sortByTable () {
        return $('#desktop-SortBy')
    }


   sortByOptions =
         [
            { name: "Featured", value: "manual" },
            { name: "Best selling", value: "best-selling" },
            { name: "Alphabetically, A-Z", value: "title-ascending" },
            { name: "Alphabetically, Z-A", value: "title-descending" },
            { name: "Price, low to high", value: "price-ascending" },
            { name: "Price, high to low", value: "price-descending" },
            { name: "Date, new to old", value: "created-descending" },
            { name: "Date, old to new", value: "created-ascending" },

        ];
    


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

        const actualText = await sortOptionElement.getText();
        await expect(actualText).toBe(name);

        await sortOptionElement.click();
        await expect(browser.url('`https://www.dragonsteelbooks.com/collections/all?sort_by=${sortOptionElement.value}`;'))
    }


 }

 export default new SortBy();