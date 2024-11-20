import { browser } from '@wdio/globals';

export default class BasePage {
    
    openBasePage () {
        return browser.url(`https://www.dragonsteelbooks.com/`);
    }
}


