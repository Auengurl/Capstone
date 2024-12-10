
import NavHeader from "../pageobjects/navigationMenu.js";
import BlogCogRealm from "../pageobjects/cogRealm.js";
import SortBy from "../pageobjects/filters.js";


// describe('navigation headers', () => {
//         it('open home page', async () => {
//            await NavHeader.homePageOpen();

//         });

//         // it('open catalog page', async () => {
//         //     await NavHeader.catalogPageOpen();
//         // });

//         // it('open realm blog page', async () => {
//         //     await NavHeader.realmCogPageOpen();
 
//         //  });
// });

// describe('blog realm buttons', () => {
//     it('open all blogs using the buttons', async () => {
//         await BlogCogRealm.clickAllTagsBtns();

//     });
// });

// describe ('open products pages from drop menu', () => {
//     it('open catalog menu', async () => {
//         await NavHeader.subMenuOpen();
//     });

//     it('click each submenu item and verify the Url', async () => {
//         const menuItems = NavHeader.menuItems; 

//         for (const item of menuItems) {
//             const { title, expectedUrl } = item; 
//             await NavHeader.selectProductSubMenuOpenExpectUrl(await title, expectedUrl);
            
//         }
//     });
// })



describe('sort by function',() => {
    it('sort by menu opens on product page', async () => {
        await SortBy.sortByFiltersMenu();
    });

    it('sort by selectors reorganize products accordingly', async () => {
        await SortBy.sortByDisplayed();
    });
});



 



