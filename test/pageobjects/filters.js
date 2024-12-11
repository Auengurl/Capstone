import { $, browser } from '@wdio/globals';
import BasePage from './basePage';
import NavHeader from './navigationMenu';

 class SortBy extends BasePage{

    get sortByTable () {
        return $('#desktop-SortBy')
    }

    // get sortBySelectors () {
    //     return [$('option[value="manual"]'),
    //         $('option[value="best-selling"]'),
    //         $('option[value="title-ascending"]'),
    //         $('option[value="title-descending"]'),
    //         $('option[value="price-ascending"]'),
    //         $('option[value="price-descending"]'),
    //         $('option[value="created-ascending"]'),
    //         $('option[value="created-descending"]')
    //     ]
    // }

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
    
    async selectSortByOption(name) {
        await this.sortByFiltersMenu();
    
        // Find the matching sort option from the object array
        const selectedOption = await this.sortByOptions.find(name);
    
        if (!selectedOption) {
            throw new Error(`Sort option "${name}" is not valid.`);
        }
    
        // Click the sorting option (update the selector logic if necessary)
        const sortOptionElement = await $(`//li[contains(text(), '${selectedOption.name}')]`);
        await sortOptionElement.moveTo();
        await sortOptionElement.click();
    
        // Wait for the page to update
        await browser.pause(2000); // Adjust wait logic as necessary
    
        // Validate the URL contains the correct sort_by parameter
        const currentUrl = await browser.getUrl();
        const expectedUrl = `https://www.dragonsteelbooks.com/collections/all?sort_by=${selectedOption.value}`;
        expect(currentUrl).toContain(`sort_by=${selectedOption.value}`);
    }


 }

 export default new SortBy();