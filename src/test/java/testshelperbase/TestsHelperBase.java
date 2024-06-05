package testshelperbase;

import java.io.File;
import java.time.Duration;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class TestsHelperBase {

	public WebDriver driver;

	public WebDriver initializedDriver() {
		WebDriverManager.chromedriver().setup();
		WebDriver driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
		driver.manage().window().maximize();
		String pathToIndexHtml = "index.html";
        String absolutePath = System.getProperty("user.dir") + "/" + pathToIndexHtml;
        driver.get("file:///" + absolutePath);
		return driver;
	}

	public WebDriver launchApplication() {
		driver = initializedDriver();
		return driver;
	}

}
