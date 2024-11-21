
import { $$ } from '@wdio/globals';
import { browser } from '@wdio/globals';
import NavHeader from './navigationMenu.js';

class BlogCogRealm {

    get allTagBtns() {
        return $$('a[class="button button--small  button--outline "]');
    }

    async clickAllTagsBtns() {
        await NavHeader.realmCogPageOpen();

        const buttons = await this.allTagBtns;

        for (const btn of buttons) { 
            await btn.waitForClickable({ timeout: 3000 }); 
            await btn.click(); 
        }
    }
}

export default new BlogCogRealm();