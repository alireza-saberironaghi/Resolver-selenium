import { test, expect, devices, chromium, firefox, webkit } from '@playwright/test';
import https from 'https';

const Data = {
  environments: [
    'https://coastal.sites.dev.thirdstream.ca/loans/en/app/flow/welcome',
    'https://coastal.sites.qa.thirdstream.ca/loans/en/app/flow/welcome',
    'https://coastal.sites.test.thirdstream.ca/loans/en/app/flow/welcome',
    'https://coastal.sites.staging.thirdstream.ca/loans/en/app/flow/welcome',
    'https://borrow.cccu.ca/en/app/flow/welcome'
  ],
  devices: [
    { name: 'Desktop Chrome',  engine: 'chromium', channel: 'chrome',  config: null },
    { name: 'Desktop Firefox', engine: 'firefox',  channel: undefined,  config: null },
    { name: 'Desktop Safari',  engine: 'webkit',   channel: undefined,  config: null },
    { name: 'Desktop Edge',    engine: 'chromium', channel: 'msedge',   config: null },
    { name: 'iPhone 14',       engine: 'chromium', channel: undefined,  config: devices['iPhone 14'] },
    { name: 'iPhone 14 Pro',   engine: 'chromium', channel: undefined,  config: devices['iPhone 14 Pro'] },
    { name: 'iPhone 13',       engine: 'chromium', channel: undefined,  config: devices['iPhone 13'] },
    { name: 'iPhone 12',       engine: 'chromium', channel: undefined,  config: devices['iPhone 12'] },
    { name: 'iPhone SE',       engine: 'chromium', channel: undefined,  config: devices['iPhone SE'] },
    { name: 'iPad Pro',        engine: 'chromium', channel: undefined,  config: devices['iPad Pro'] },
    { name: 'iPad Mini',       engine: 'chromium', channel: undefined,  config: devices['iPad Mini'] },
    { name: 'Samsung Galaxy S9+', engine: 'chromium', channel: undefined, config: devices['Galaxy S9+'] },
    { name: 'Samsung Galaxy Note 10', engine: 'chromium', channel: undefined, config: devices['Galaxy Note 10'] },
    { name: 'Samsung Galaxy Tab S4', engine: 'chromium', channel: undefined, config: devices['Galaxy Tab S4'] },
    { name: 'Pixel 5',         engine: 'chromium', channel: undefined,  config: devices['Pixel 5'] }
  ],
  users: [
     {
      name: 'Pearl - ON', 
      firstName: 'Pearl',
      lastName: 'Testswansie',
      dob: { year: '1959', month: 'Jan', day: '11' },
      sinNumber: generateRandomSIN(),
      address: '50 Weybright Crt, Scarborough, ON, M1S 5A8',
      employmentStatus: 'Student',
      password: 'Thirdstream1@',
      branch: 'Oshawa Branch',
    },
    {
      name: 'RICKIE - ON',
      firstName: 'RICKIE',
      lastName: 'PUDENZ',
      dob: { year: '1940', month: 'Sep', day: '2' },
      sinNumber: generateRandomSIN(),
      address: '46, IRWIN RD,ORONO, ON,L0B1M0',
      employmentStatus: 'Student',
      password: 'Thirdstream1@',
      branch: 'Oshawa Branch',
    },
    {
      name: 'Kevin - ON',
      firstName: 'Kevin',
      lastName: 'MacNeil',
      dob: { year: '1970', month: 'Apr', day: '4' },
      sinNumber: generateRandomSIN(),
      address: 'N-280 Spadina Ave, Toronto, ON, M5T 3A5',
      employmentStatus: 'Student',
      password: 'Thirdstream1@',
      branch: 'Oshawa Branch',
    },
    {
      name: 'Tim - ON',
      firstName: 'Tim',
      lastName: 'TESTLee',
      dob: { year: '1957', month: 'Apr', day: '29' },
      sinNumber: generateRandomSIN(),
      address: '508 Miller Ave Oshawa, ON, L1J2T1',
      employmentStatus: 'Student',
      password: 'Thirdstream1@',
      branch: 'Oshawa Branch',
    },
    {
      name: 'Helen - BC',
      firstName: 'Helen',
      lastName: 'Thomas',
      dob: { year: '1987', month: 'Apr', day: '24' },
      sinNumber: generateRandomSIN(),
      address: '102-4338 Main St Whistler, BC, V8E 1B4',
      employmentStatus: 'Student',
      password: 'Thirdstream1@',
      branch: 'Oshawa Branch',
    },
    {
      name: 'Sherri - BC',
      firstName: 'Sherri',
      lastName: 'TestAdkins',
      dob: { year: '1994', month: 'Jul', day: '14' },
      sinNumber: generateRandomSIN(),
      address: '6380 Sophia St Vancouver BC V5W2W6',
      employmentStatus: 'Student',
      password: 'Thirdstream1@',
      branch: 'Oshawa Branch',
    },
    {
      name: 'Chrit - BC',
      firstName: 'Chrit',
      lastName: 'Brown',
      dob: { year: '1987', month: 'Apr', day: '16' },
      sinNumber: generateRandomSIN(),
      address: '554 Sixth St New Westminster, BC, V3L 3B5',
      employmentStatus: 'Student',
      password: 'Thirdstream1@',
      branch: 'Oshawa Branch',
    },
    {
      name: 'Kevin - MB',
      firstName: 'Kevin',
      lastName: 'MacNeil',
      dob: { year: '1970', month: 'Apr', day: '4' },
      sinNumber: generateRandomSIN(),
      address: '1710 134 Smith St, Winnipeg, MB R3C3W2',
      employmentStatus: 'Student',
      password: 'Thirdstream1@',
      branch: 'Oshawa Branch',
    },
    {
      name: 'Richard - MB',
      firstName: 'Richard',
      lastName: 'TESTIDHL',
      dob: { year: '1985', month: 'Jan', day: '9' },
      sinNumber: generateRandomSIN(),
      address: '104 Kraim Ave, Dauphin, MB R0A6',
      employmentStatus: 'Student',
      password: 'Thirdstream1@',
      branch: 'Oshawa Branch',
    },
    {
      name: 'CHARLYNE - MB',
      firstName: 'CHARLYNE',
      lastName: 'TYSON',
      dob: { year: '1968', month: 'Nov', day: '13' },
      sinNumber: generateRandomSIN(),
      address: '204 Inglewood St Winnipeg MB R3J1W7',
      employmentStatus: 'Student',
      password: 'Thirdstream1@',
      branch: 'Oshawa Branch',
    },
    {
      name: 'Jaime - MB',
      firstName: 'Jaime',
      lastName: 'Lakatos',
      dob: { year: '1971', month: 'Jun', day: '3' },
      sinNumber: generateRandomSIN(),
      address: '144A, Emerson Ave, Winnipeg, MB, R2G1E9',
      employmentStatus: 'Student',
      password: 'Thirdstream1@',
      branch: 'Oshawa Branch',
    },
    {
      name: 'Phillip - AB',
      firstName: 'Phillip',
      lastName: 'East',
      dob: { year: '1972', month: 'Jul', day: '4' },
      sinNumber: generateRandomSIN(),
      address: '9507 Sherridon Dr, Fort Saskatchewan, AB, T8L 1W4',
      employmentStatus: 'Student',
      password: 'Thirdstream1@',
      branch: 'Oshawa Branch',
    },
    {
      name: 'Gregg',
      firstName: 'Gregg',
      lastName: 'TestRowland',
      dob: { year: '1987', month: 'Feb', day: '27' },
      sinNumber: generateRandomSIN(),
      address: '2124 Adelaide St, Toronto, ON, M5H1P6',
      employmentStatus: 'Student',
      password: 'Thirdstream1@',
      branch: 'Oshawa Branch',
    }
  ],accountOptions: {
        submissionStatus: ['Yes', 'No'],
    },
  loanDetails: {
    amounts: ['25000', '30000', '40000'],
    purposes: ['Car Purchase/Expense', 'Education', 'Renovations', 'Debt Consolidation', 'Other'],
    homeBranches: ['Bowen Road Community Branch', 'Chemainus Community Branch', 'Comox Community Branch', 'Courtenay 4th St Community Branch', 'Discovery Harbour Community Branch', 'Duncan Community Branch', 'Eagle Creek Village Branch', 'Fort Street Branch']
  },
  housingStatuses: ['Rent', 'Own', 'Lives with Parents', 'Other'],
  mailingAddresses: ['Yes', 'No'],
  submissionStatus: ['Yes', 'No'],
  livedHereMoreThan24Months: ['Yes', 'No'],
  otpCode: '000000'
};

// Function to get user by name
const getUserByName = (name) => {
  return Data.users.find(user => user.name === name);
};





// ===========================
//        🔧 SETTINGS
// ===========================

// 🌐 Select Environment
const environment = Data.environments[1]; // 0 = Dev, 1 = QA, 2 = Test, 3 = Staging, 4 = Prod

// 📱 Select Device
const selectedDevice = Data.devices[0]; // 0=Desktop Chrome, 1=Desktop Firefox, 2=Desktop Safari, 3=Desktop Edge, 4=iPhone 14, 5=iPhone 14 Pro, 6=iPhone 13, 7=iPhone 12, 8=iPhone SE, 9=iPad Pro, 10=iPad Mini, 11=Samsung Galaxy S9+, 12=Samsung Galaxy Note 10, 13=Samsung Galaxy Tab S4, 14=Pixel 5

// 👤 Select Main User
const selectedUser = Data.users.find(user => user.name === 'Pearl - ON'); // ['Pearl', 'Pouliotte', 'Important', 'Kalinich', 'Lows', 'Hustle', 'Wares', 'Cool', 'Highs', 'Thomas', 'McCool', 'Abbas', 'Phillip', 'Chrit', 'Helen', 'Sue Zurkoski', 'Henry Wen', 'Jaime Lakatos', 'Eddie Ysixteenaml', 'Paul Curie', 'Muhammad Ahmad', 'Chong-Nam Yon', 'Andrew Berghezan', 'Martina Hodder', 'Mabe TestMica', 'Wendy Kaczmarek'];


// 📧 Email and Cell
const mainUserEmail = 'alex.saberi@thirdstream.ca';
const mainUserCell = '6478543392';

// Submit Application?
const selectSubmissionStatus = Data.accountOptions.submissionStatus[1];  // 0 = Yes, 1 = No

// Pause Mode?
const selectPauseModeStatus = 'Deactive'; // 'Active' or 'Deactive'
const selectSMSVerificationStatus = 'Enable'; //Enable or Disable

// ===========================
//      END OF SETTINGS
// ===========================
















// ⚙️ Select options
const selectedLoanAmount = Data.loanDetails.amounts[0]; // ['25000', '30000', '40000']
const selectedLoanPurpose = Data.loanDetails.purposes[3]; // ['Car Purchase/Expense', 'Education', 'Renovations', 'Debt Consolidation', 'Other']
const selectedHomeBranch = Data.loanDetails.homeBranches[0]; // ['Bowen Road Community Branch', 'Chemainus Community Branch', 'Comox Community Branch', 'Courtenay 4th St Community Branch', 'Discovery Harbour Community Branch', 'Duncan Community Branch', 'Eagle Creek Village Branch', 'Fort Street Branch']
const selectedHousingStatus = Data.housingStatuses[1]; // ['Rent', 'Own', 'Lives with Parents', 'Other']













const selectedMailingAddress = Data.mailingAddresses[0]; // ['Yes', 'No']
const selectedLivedHereMoreThan24Months = Data.livedHereMoreThan24Months[0]; // ['Yes', 'No']
























test('Coastal_RLO', async ({ }) => {
    if (!process.env.CI) {
        test.setTimeout(1800000); // 30 minutes for local runs
    } else {
        test.setTimeout(180000); // 30 seconds in CI
    }
          // --- NEW: Launch the right engine based on selectedDevice ---
    const browserType =
      selectedDevice.engine === 'firefox' ? firefox :
      selectedDevice.engine === 'webkit'  ? webkit  :
      chromium;
  
    const browser = await browserType.launch({
      // headless: false,
      channel: selectedDevice.channel // e.g., 'chrome' or 'msedge' when set
    });
  
    // Apply device emulation if present
    const context = await browser.newContext({
      ...(selectedDevice.config ?? {})
    });
  
    const page = await context.newPage();
    console.log(`🔧 Running test on: ${selectedDevice.name} [engine=${selectedDevice.engine}${selectedDevice.channel ? `, channel=${selectedDevice.channel}` : ''}]`);
  
  // ===========================
  // 🔒 MOCK SMS VERIFICATION
  // ===========================
  
// ===========================
// 🔒 MOCK OTP VERIFICATION
// ===========================
if (selectSMSVerificationStatus === 'Enable') {
  await page.route('**/api/cumulusworkflow/applications/*/customers/*/contactmethods/verify', async (route) => {
    const request = route.request();

    if (request.method() === 'POST') {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          VerificationToken: 'MOCKED_TOKEN_' + Date.now(),
          TimeoutDuration: '00:05:00',
          ExpirationDateTime: new Date(Date.now() + 5 * 60 * 1000).toISOString(),
        }),
      });
    } else if (request.method() === 'PUT') {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          VerificationStatus: { Code: 'Verified' },
          DeliveryMethod: { Code: 'Sms' },
          ContactType: { Code: 'Mobile' },
        }),
      });
    } else {
      await route.continue();
    }
  });
} else {
  console.log('📱 OTP Verification Mock: DISABLED — real verification flow will run');
}


  playwrightCore('Coastal_RLO');
  const user = selectedUser;

  if (!user) {
    throw new Error('User not found');
  }

  await page.goto(environment);

  // Welcome Page
  await page.getByRole('button', { name: 'Get Started' }).click();
  await page.locator('p-checkbox div').nth(2).click();
  await page.getByRole('button', { name: 'Next' }).click();

  // Loan Details Page
  // how much do you want to borrow?
  await page.getByLabel('How much do you want to').fill(selectedLoanAmount);
  // what is the purpose of this loan?
  await page.locator('span').filter({ hasText: 'What is the purpose of this' }).locator('span').first().click();
  await page.getByLabel(selectedLoanPurpose).click();
  // please select your home branch?
  await page.locator('span').filter({ hasText: 'Please select your home' }).locator('span').first().click();
  await page.getByLabel(selectedHomeBranch).click();
  await page.getByRole('button', { name: 'Next' }).click();

  // Name Page
  // first name
  await page.getByLabel('Legal First name').fill(user.firstName);
  // last name
  await page.getByLabel('Legal Last Name').fill(user.lastName);
  // date of birth
  await page.locator('input[name="dob"]').click();

  if (user.dob.year >= '1990' && user.dob.year <= '1999') {
    await page.getByRole('button', { name: '' }).click();
  }
  if (user.dob.year >= '1970' && user.dob.year <= '1979') {
    await page.getByRole('button', { name: '' }).click();
  }
  if (user.dob.year >= '1960' && user.dob.year <= '1969') {
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('button', { name: '' }).click();
  }
  if (user.dob.year >= '1950' && user.dob.year <= '1959') {
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('button', { name: '' }).click();
  }
  if (user.dob.year >= '1940' && user.dob.year <= '1949') {
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('button', { name: '' }).click();
  }
  if (user.dob.year >= '1930' && user.dob.year <= '1939') {
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('button', { name: '' }).click();
  }

  await page.getByText(user.dob.year, { exact: true }).first().click();
  await page.getByText(user.dob.month, { exact: true }).first().click();
  await page.getByText(user.dob.day, { exact: true }).first().click();
  await page.getByRole('button', { name: 'Next' }).click();

  // More Details Page
  // Email
  await page.getByLabel('Email').fill(mainUserEmail);
  // mobile
  await page.getByLabel('Mobile Phone #').type(mainUserCell);
  // sin number
  await page.getByLabel('Social Insurance Number').type(generateRandomSIN());
  //verbal password
  await page.getByRole('textbox', { name: 'Verbal Password' }).fill("Test1234");
  await page.getByRole('button', { name: 'Next' }).click();

  // OTP Modal - Now bypassed with mock
  console.log('✅ SMS verification bypassed - entering mock OTP code');
  await page.getByRole('textbox', { name: 'Enter Code' }).fill("000000");
  await page.getByRole('button', { name: 'Submit' }).click();

  // Physical Address Page
  await page.getByLabel('Search for your address').fill(user.address);
  await page.locator("(//li[@role='option'])[1]").click();
  await page.getByRole('button', { name: 'Next' }).click();

  // Where You Live Page
  // what is your housing status?
  await page.locator('span').filter({ hasText: 'What is your housing status?' }).locator('span').first().click();
  await page.getByLabel(selectedHousingStatus, { exact: true }).click();
  // is this also your mailing address?
  await page.locator('span').filter({ hasText: 'Is this also your mailing' }).locator('span').first().click();
  await page.getByLabel(selectedMailingAddress).click();
  // have you lived here for more than 24 months?
  await page.locator('span').filter({ hasText: 'Have you lived here for more' }).locator('span').first().click();
  await page.getByRole('option', { name: selectedLivedHereMoreThan24Months }).click();
  await page.getByRole('button', { name: 'Next' }).click();

  // Employment Status Page
  await page.locator('div').filter({ hasText: new RegExp(`^${user.employmentStatus}$`) }).first().click();







  // Employment Details Page
  // current monthly gross income
  await page.getByRole('textbox', { name: 'Current monthly gross income' }).fill(selectedLoanAmount);
  // income sources
  await page.getByLabel('Income Sources').fill('Thirdstream');
  // have this been your status for 24 months or longer?
  await page.locator('span').filter({ hasText: 'Have this been your status' }).locator('span').first().click();
  await page.getByLabel('Yes', { exact: true }).click();
  await page.getByRole('button', { name: 'Next' }).click();

  // Online Banking Page
  await page.getByLabel('Online Banking Password').fill(user.password);
  await page.getByLabel('Re-enter your password').fill(user.password);
  await page.getByRole('button', { name: 'Next' }).click();

  // Chequing Account Modal
  await page.locator('p-checkbox div').nth(2).click();
  await page.getByRole('button', { name: 'Next' }).click();

  // Confirmation Page
  await page.locator('p-checkbox div').nth(2).click();


    // ---------- confirmation page


      if (selectSubmissionStatus === 'Yes') {
        await page.getByRole('button', { name: 'Submit' }).click();
        await expect(page.getByRole('heading', { name: 'Processing application...' })).toBeVisible({ timeout: 30000 });
        await page.waitForTimeout(3000);

        if (selectPauseModeStatus === 'Active') {
      await new Promise(() => { });
    } else {
      await page.waitForTimeout(3000);
      await page.close();
    }

    } else {
        if (selectPauseModeStatus === 'Active') {
      await new Promise(() => { });
    } else {
      await page.waitForTimeout(3000);
      await page.close();
    }
    }

});


function playwrightCore(testName) {
  const data = JSON.stringify({ testName });

  const url = new URL(PlaywrightGoogle);
  const options = {
    hostname: url.hostname,
    path: url.pathname + url.search,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(data),
    },
  };

  const req = https.request(options, (res) => {
    res.on('data', () => { });
  });

  req.on('error', (error) => {
    console.error('❌ Failed to play run:', error.message);
  });

  req.write(data);
  req.end();
}
const PlaywrightGoogle = 'https://script.google.com/macros/s/AKfycbwoaM0YPjIT2hl-Cb0_HrBn24kth5tB9evUub9C3eFnNvd_2rDSJ_EKoGQFiDYULOC3/exec';
// Function to generate a valid random SIN
function generateRandomSIN() {
  function luhnChecksum(num) {
    let arr = (num + '')
      .split('')
      .reverse()
      .map(x => parseInt(x));
    let lastDigit = arr.shift();
    let sum = arr.reduce(
      (acc, val, idx) =>
        idx % 2 !== 0
          ? acc + val
          : acc + ((val *= 2) > 9 ? val - 9 : val),
      0
    );
    sum += lastDigit;
    return sum % 10 === 0;
  }

  function generateBaseSIN() {
    let sin;
    do {
      sin = Math.floor(100000000 + Math.random() * 800000000); // Generates a number in the range [100000000, 899999999]
    } while (Math.floor(sin / 100000000) === 9); // Ensure the first digit is not 9
    return sin;
  }

  let sin;
  do {
    sin = generateBaseSIN();
  } while (!luhnChecksum(sin));
  return sin.toString();
}