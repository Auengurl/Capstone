import { browser } from '@wdio/globals';
import { $ } from '@wdio/globals';
import BasePage from './basePage';



export default class NavHeader extends BasePage{
    get homeHeader () {
        return $('a[href="/search/Appliances"]');
    }

    get catalogHeader () {
        return $('a[href="/search/Electronics"]');
    }

    get readCogHeader () {
        return $('a[href="/search/Furniture"]');
    }
  

    async menuHeaders () {
        await this.openBasePage();
    }
    
}

