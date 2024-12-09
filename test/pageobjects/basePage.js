import { browser } from '@wdio/globals';
import { $ } from '@wdio/globals';
 
export default class BasePage {
    
    openDragonsteelHomeBasePage () {
        return browser.url(`https://www.dragonsteelbooks.com/`);
    }
    get selectorDetector () {
        return $('.text-animation--underline-in-header');
    }

    async openNavigationHeaderPage(headerLink, expectedUrl) {
        await this.openDragonsteelHomeBasePage(); 
        await headerLink.click();  
        await expect(browser).toHaveUrl(expectedUrl); 
        await browser.pause(3000); 
    }

    async headerSelector () {
        await  expect(this.selectorDetector());
    }

   

}


