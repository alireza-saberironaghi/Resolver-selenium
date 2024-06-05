package helperbase;

import static org.testng.Assert.assertTrue;

import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

public class HelperBase {
	
	WebDriver driver;
	
	
	public HelperBase(WebDriver driver) {
		this.driver = driver;
	}


	public void waitForElementToBeClickable(WebElement element) {
		WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
		wait.until(ExpectedConditions.elementToBeClickable(element));
	}
	
	
	public void waitForElementToAppear(By findBy) {
		WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
		wait.until(ExpectedConditions.visibilityOfElementLocated(findBy));
	}
	
	
	public void assertElementVisible(WebElement element)
	{
		assertTrue(element.isDisplayed());
	}
	
	public void fillInput(WebElement element, String Value)
	{
		element.sendKeys(Value);
	}
	
	public void clickOnElement(WebElement element) {
		element.click();
	}
	
	public void assertButtonEnabled(WebElement element) {
		Assert.assertTrue(element.isEnabled());
	}
    
	
	public void assertButtonDisabled(WebElement element) {
		Assert.assertFalse(element.isEnabled());
	}
	
	
    //  Write a method that allows you to find the value of any cell on the grid
    public String findCellValue(int rowNumber, int columnNumber) {
    	rowNumber++;
    	columnNumber++;

        String xpath = "//table[@class='table table-bordered table-dark']/tbody/tr[" + rowNumber + "]/td[" + columnNumber + "]";
        WebElement tableCellSelector = driver.findElement(By.xpath(xpath));
        return tableCellSelector.getText();
    }
	
	
	
	
	
	
	

}
