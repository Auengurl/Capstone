import { browser } from '@wdio/globals';
import { $ } from '@wdio/globals';
 
export default class BasePage {
    
    openBasePage () {
        return browser.url(`https://www.dragonsteelbooks.com/`);
    }
    get selectorDetector () {
        return $('.text-animation--underline-in-header');
    }

    async openPage(headerLink, expectedUrl) {
        await this.openBasePage(); 
        await headerLink.click();  
        await expect(browser).toHaveUrl(expectedUrl); 
        await browser.pause(3000); 
    }

    async headerSelector () {
        await  expect(this.selectorDetector());
    }
}


