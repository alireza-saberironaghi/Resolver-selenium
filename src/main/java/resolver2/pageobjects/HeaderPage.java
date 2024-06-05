package resolver2.pageobjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import helperbase.HelperBase;

public class HeaderPage extends HelperBase {

	WebDriver driver;

	public HeaderPage(WebDriver driver) {
		super(driver);
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	
	// Elements
	
	@FindBy(css = ".active .nav-link")
	WebElement homeMenuItem;
	
	
	public void homePage() {
		waitForElementToBeClickable(homeMenuItem);
		clickOnElement(homeMenuItem);

	}

}
