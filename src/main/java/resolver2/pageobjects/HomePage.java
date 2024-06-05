package resolver2.pageobjects;

import static org.testng.Assert.assertEquals;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import helperbase.HelperBase;

public class HomePage extends HelperBase {

	// Class variables

	WebDriver driver;

	// Constructor
	public HomePage(WebDriver driver) {
		super(driver);
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}

	// Elements

	// Test 1 Section Elements
	@FindBy(css = "#test-1-div #inputEmail")
	WebElement emailAdressInput;

	@FindBy(xpath = "//*[@id='test-1-div']//input[@placeholder='Password']")
	WebElement passwordInput;

	@FindBy(xpath = "//*[@id='test-1-div']//button[text()='Sign in']")
	WebElement signinButton;

	// Test 2 Section Element
	@FindBy(css = "[id='test-2-div'] .list-group-item")
	List<WebElement> listGroupItems;

	@FindBy(css = "[id='test-2-div'] .badge")
	List<WebElement> ListItemBadges;

	// Test 3 Section Elements

	@FindBy(css = "#test-3-div #dropdownMenuButton")
	WebElement dropdownMenuButton;

	@FindBy(css = "[id='test-3-div'] .dropdown-menu .dropdown-item")
	List<WebElement> dropdownMenuItem;

	@FindBy(css = "[id='test-3-div'] .dropdown-item")
	List<WebElement> dropdownOptions;

	// Test 4 Section Elements
	@FindBy(css = "#test-4-div .btn-primary")
	WebElement firstButton;

	@FindBy(css = "#test-4-div .btn-secondary")
	WebElement secondButton;

	// Test 5 Section Elements
	By test5ButtonBy = By.cssSelector("#test-5-div #test5-button");

	@FindBy(css = "#test-5-div #test5-button")
	WebElement test5Button;

	@FindBy(css = "#test-5-div #test5-alert")
	WebElement successMessage;

	// Section 1 methods

	// Assert that both the email address and password inputs are present as well as
	// the login button
	public void assertLoginElementsVisible() {
		assertElementVisible(emailAdressInput);
		assertElementVisible(passwordInput);
		assertElementVisible(signinButton);
	}

	// Enter in an email address and password combination into the respective fields
	public void loginWithCredentials(String email, String password) {

		fillInput(emailAdressInput, email);
		fillInput(passwordInput, password);
		clickOnElement(signinButton);

	}

// Section 2 methods

	// In the test 2 div, assert that there are three values in the listgroup
	public void assertListGroupItemCount(int totalCount) {
		Assert.assertEquals(listGroupItems.size(), totalCount);
	}

	// Assert that the second list item's value is set to "List Item 2"
	public void assertListGroupItemValue(int listItemNumber, String expectedListItemValue) {
		String ListItemText = listGroupItems.get(listItemNumber).getText();
		Assert.assertTrue(ListItemText.contains(expectedListItemValue));
	}

	// Assert that the second list item's badge value is 6
	public void assertBadgeValue(int badgeIndexNumber, int expectedBadgeValue) {
		WebElement ListItemBadge = ListItemBadges.get(badgeIndexNumber);
		String badgeValue = ListItemBadge.getText();
		String expectedBadgeValueAsString = String.valueOf(expectedBadgeValue);
		Assert.assertEquals(badgeValue, expectedBadgeValueAsString);
	}

	// Section 3 methods

	// In the test 3 div, assert that "Option 1" is the default selected value
	public void assertDefaultDropdownOption(String expectedDefaultOptionValue) {

		String defaultText = dropdownMenuButton.getText();
		assertEquals(expectedDefaultOptionValue, dropdownMenuButton.getText());

	}

	// Select "Option 3" from the select list
	public void selectDropdownOption(String selectedOption) {

		clickOnElement(dropdownMenuButton);

		dropdownOptions.stream().filter(option -> option.getText().equals(selectedOption)).findFirst()
				.ifPresent(WebElement::click);
	}
	

	// Section 4 methods

	// In the test 4 div, assert that the first button is enabled
	public void assertFirstButtonIsEnabled() {
		assertButtonEnabled(firstButton);
	}

	// In the test 4 div, assert that the second button is disabled
	public void assertSecondButtonIsDisabled() {
		assertButtonDisabled(secondButton);
	}

	// Section 5 methods

	// In the test 5 div, wait for a button to be displayed (note: the delay is
	// random) and then click it

	public void clickButtonAndWaitForSuccessMessage() {

		waitForElementToAppear(test5ButtonBy);

		// Once you've clicked the button, assert that a success message is displayed
		clickOnElement(test5Button);
		assertElementVisible(successMessage);
	}

	// Assert that the button is now disabled
	public void assertButtonDisabledAfterClick() {
		assert (test5Button.getAttribute("disabled").equals("true"));

	}

	// Section 6 methods

	public void retrieveAndVerifyGridCellValue(int rowNumber, int columnNumber, String expectedTargetCellValue) {

		// Write a method that allows you to find the value of any cell on the grid
		// Since the 'findCellValue' function can be reusable for other page objects I
		// created a HelperBase and extends the class

		// Use the method to find the value of the cell at coordinates 2, 2 (staring at
		// 0 in the top left corner)
		String targetedCellValue = findCellValue(rowNumber, columnNumber);

		// Assert that the value of the cell is "Ventosanzap"
		assert targetedCellValue.equals(expectedTargetCellValue);
	}

}
