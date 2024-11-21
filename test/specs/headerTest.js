
import NavHeader from "../pageobjects/navigationHeader.js";
import BlogCogRealm from "../pageobjects/cogRealm.js";


describe('navigation headers', () => {
        // it('open home page', async () => {
        //    await NavHeader.homePageOpen();

        // });

        // it('open catalog page', async () => {
        //     await NavHeader.catalogPageOpen();
        // });

        // it('open realm blog page', async () => {
        //     await NavHeader.realmCogPageOpen();
 
        //  });

        it('open all blogs using the tabs', async () => {
            await BlogCogRealm.clickAllTagsBtns();

        });

     });


 



