import { browser } from '@wdio/globals';

export default class BasePage {
    
    openBasePage () {
        return browser.url(`https://www.dragonsteelbooks.com/`);
    }


    async openPage(headerLink, expectedUrl) {
        await this.openBasePage(); 
        await headerLink.click();  
        await expect(browser).toHaveUrl(expectedUrl); 
        await browser.pause(3000); 
    }
}


