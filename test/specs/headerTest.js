
import SearchNavHeader from "../pageobjects/navigationHeader";



describe('hamburger menu application', () => {
        it('open and close hamburger menu', async () => {
            await Login.openBasePage();
            await Login.loginAccess();
            await HamburgerMenu.hamburgerMenuSelect();

        });

     });






