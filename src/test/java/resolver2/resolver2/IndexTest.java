package resolver2.resolver2;

import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;
import resolver2.pageobjects.HeaderPage;
import resolver2.pageobjects.HomePage;
import testshelperbase.TestsHelperBase;

public class IndexTest extends TestsHelperBase {

	@BeforeClass
	public void setUpTest() {
		launchApplication();
	}

	@BeforeMethod
	public void navigateToHome() {
		HeaderPage navigateTo = new HeaderPage(driver);
		navigateTo.homePage();
	}

	@Test
	public void test1_VerifyLoginFormPresenceAndFunctionality() {
		HomePage onHomePage = new HomePage(driver);
		onHomePage.assertLoginElementsVisible();
		onHomePage.loginWithCredentials("hi@hi.com", "admin");
	}

	@Test
	public void test2_ValidateListGroupItems() {
		HomePage onHomePage = new HomePage(driver);
		onHomePage.assertListGroupItemCount(3);
		onHomePage.assertListGroupItemValue(1, "List Item 2");
		onHomePage.assertBadgeValue(1, 6);
	}

	@Test
	public void test3_VerifyDefaultAndSelectOptionInDropdown() {
		HomePage onHomePage = new HomePage(driver);
		onHomePage.assertDefaultDropdownOption("Option 1");
		onHomePage.selectDropdownOption("Option 3");
	}

	@Test
	public void test4_CheckButtonStates() {
		HomePage onHomePage = new HomePage(driver);
		onHomePage.assertFirstButtonIsEnabled();
		onHomePage.assertSecondButtonIsDisabled();
	}

	@Test
	public void test5_ValidateButtonClickAndSuccessMessageWithRandomDelay() {
		HomePage onHomePage = new HomePage(driver);
		onHomePage.clickButtonAndWaitForSuccessMessage();
		onHomePage.assertButtonDisabledAfterClick();
	}

	@Test
	public void test6_RetrieveAndVerifyGridCellValue() {
		HomePage onHomePage = new HomePage(driver);
		onHomePage.retrieveAndVerifyGridCellValue(2, 2, "Ventosanzap");
	}

	@AfterClass
	public void tearDownTest() {
		driver.quit();
	}

}
