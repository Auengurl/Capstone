
import NavHeader from "../pageobjects/navigationMenu.js";
import BlogCogRealm from "../pageobjects/cogRealm.js";
import SortBy from "../pageobjects/filters.js";


describe('navigation headers', () => {
        it('open home page', async () => {
           await NavHeader.homePageOpen();

        });

        it('open catalog page', async () => {
            await NavHeader.catalogPageOpen();
        });

        // it('open catalog menu and select one category', async () => {
        //     await NavHeader.subMenuOpen();
        // })

        it('open realm blog page', async () => {
            await NavHeader.realmCogPageOpen();
 
         });
});

describe('blog realm buttons', () => {
    it('open all blogs using the buttons', async () => {
        await BlogCogRealm.clickAllTagsBtns();

    });
});

describe('sort by function',() => {
    it('sort by works on all products page', async () => {
        await SortBy.sortByFilters();
    });
});

// describe('',() => {
//     it('', async () => {

//     });
// });

 



