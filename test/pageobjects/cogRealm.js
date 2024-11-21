import { $ } from '@wdio/globals';
import { $$ } from '@wdio/globals';
import { browser } from '@wdio/globals';
import NavHeader from './navigationHeader.js';


class BlogCogRealm  {

    // get allTagBtns () {
    //     return $$([
    //         ('a[href="/blogs/the-cognitive-realm"]'),
    //         ('a[href="/blogs/the-cognitive-realm/tagged/art"]'),
    //         ('a[href="/blogs/the-cognitive-realm/tagged/behind-the-scenes"]'),
    //         ('a[href="/blogs/the-cognitive-realm/tagged/brandon-sanderson"]'),
    //         ('a[href="/blogs/the-cognitive-realm/tagged/brotherwise-games"]'),
    //         ('a[href="/blogs/the-cognitive-realm/tagged/cosmere"]'),
    //         ('a[href="/blogs/the-cognitive-realm/tagged/cozy-fantasy"]'),
    //         ('a[href="/blogs/the-cognitive-realm/tagged/epic-fantasy"]'),
    //         ('a[href="/blogs/the-cognitive-realm/tagged/features"]'),
    //         ('a[href="/blogs/the-cognitive-realm/tagged/free-fiction"]'),
    //         ('a[href="/blogs/the-cognitive-realm/tagged/gaming"]'),
    //         ('a[href="/blogs/the-cognitive-realm/tagged/mental-health"]'),
    //         ('a[href="/blogs/the-cognitive-realm/tagged/mistborn"]'),
    //         ('a[href="/blogs/the-cognitive-realm/tagged/news"]'),
    //         ('a[href="/blogs/the-cognitive-realm/tagged/products"]'),
    //         ('a[href="/blogs/the-cognitive-realm/tagged/reading-guides"]'),
    //         ('a[href="/blogs/the-cognitive-realm/tagged/stormlight"]'),
    //         ('a[href="/blogs/the-cognitive-realm/tagged/team-dragonsteel"]'),
    //         ('a[href="/blogs/the-cognitive-realm/tagged/tress-of-the-emerald-sea"]'),
    //         ('a[href="/blogs/the-cognitive-realm/tagged/warbreaker"]'),
    //         ('a[href="/blogs/the-cognitive-realm/tagged/worldbuilding"]'),
    //         ('a[href="/blogs/the-cognitive-realm/tagged/writing-advice"]')
    //     ])
    // }

    AllTags = ['button button--small  button--outline '];
    

   

   

    

    // async clickAllTagsBtns () {

    //     await NavHeader.realmCogPageOpen();
    //     await this.getAllTags.click();
    //     await browser.pause(1000);
    
    //     // const btns = await this.allTagBtns;
    //     //     for (const btn of btns) {
    //     //         await btn.click();
    //     //         await browser.pause(1000);
    //     // }

        
    // }

    async clickAllTagsBtns() {
        await NavHeader.realmCogPageOpen(); // Open the target page first
    
        for (let i = 0; i < 22; i++) { // Loop 22 times
            await this.AllTags.click(); // Click the button
            await browser.pause(1000); // Pause for 1 second
        }
    }
    
}
export default new BlogCogRealm();