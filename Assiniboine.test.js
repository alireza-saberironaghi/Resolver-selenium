import { test, expect, devices, chromium, firefox, webkit } from '@playwright/test';
import { selectDateFromDatePicker } from './helpers/calendarHelper.js';
import { generateRandomSIN } from './helpers/dataHelper.js';
import { setupSmsVerification } from './helpers/apiHelper.js';
import https from 'https';

/// 🌐 Data constants
const Data = {
  environments: [
    'https://assiniboine.sites.dev.thirdstream.ca/deposits/en/app/flow/welcome',
    'https://assiniboine.sites.qa.thirdstream.ca/deposits/en/app/flow/welcome',
    'https://assiniboine.sites.test.thirdstream.ca/deposits/en/app/flow/welcome',
    'https://assiniboine.sites.staging.thirdstream.ca/deposits/en/app/flow/welcome',
    'https://assiniboine.sites.staging.thirdstream.ca/deposits/en/app/flow/welcome',
  ],
  devices: [
    { name: 'Desktop Chrome', engine: 'chromium', channel: 'chrome', config: null },
    { name: 'Desktop Firefox', engine: 'firefox', channel: undefined, config: null },
    { name: 'Desktop Safari', engine: 'webkit', channel: undefined, config: null },
    { name: 'Desktop Edge', engine: 'chromium', channel: 'msedge', config: null },
    { name: 'iPhone 14', engine: 'chromium', channel: undefined, config: devices['iPhone 14'] },
    { name: 'iPhone 14 Pro', engine: 'chromium', channel: undefined, config: devices['iPhone 14 Pro'] },
    { name: 'iPhone 13', engine: 'chromium', channel: undefined, config: devices['iPhone 13'] },
    { name: 'iPhone 12', engine: 'chromium', channel: undefined, config: devices['iPhone 12'] },
    { name: 'iPhone SE', engine: 'chromium', channel: undefined, config: devices['iPhone SE'] },
    { name: 'iPad Pro', engine: 'chromium', channel: undefined, config: devices['iPad Pro'] },
    { name: 'iPad Mini', engine: 'chromium', channel: undefined, config: devices['iPad Mini'] },
    { name: 'Samsung Galaxy S9+', engine: 'chromium', channel: undefined, config: devices['Galaxy S9+'] },
    { name: 'Samsung Galaxy Note 10', engine: 'chromium', channel: undefined, config: devices['Galaxy Note 10'] },
    { name: 'Samsung Galaxy Tab S4', engine: 'chromium', channel: undefined, config: devices['Galaxy Tab S4'] },
    { name: 'Pixel 5', engine: 'chromium', channel: undefined, config: devices['Pixel 5'] }
  ],
  users: [
    // User 1
{
    name: 'Mabe - AB',
    firstName: 'Mabe',
    lastName: 'TestMica',
    dob: { year: '1970', month: 'Jan', day: '21' },
    sinNumber: generateRandomSIN(),
    address: '101, Greenwich lane, Fort McMurray, AB, T9H3Z2',
    employmentStatus: 'Student',
    password: 'Thirdstream1@',
    branch: 'Oshawa Branch',
    politicallyExposed: 'No',
    taxResident: 'No',
    usPerson: 'No'
},

// User 3
{
    name: 'Henry - AB',
    firstName: 'Henry',
    lastName: 'Wen',
    dob: { year: '1985', month: 'Mar', day: '8' },
    sinNumber: generateRandomSIN(),
    address: '101, Greenwich lane, Fort McMurray, AB, T9H3Z2',
    employmentStatus: 'Student',
    password: 'Thirdstream1@',
    branch: 'Oshawa Branch',
    politicallyExposed: 'No',
    taxResident: 'No',
    usPerson: 'No'
},

// User 4
{
    name: 'Eddie - AB',
    firstName: 'Eddie',
    lastName: 'Ysixteenaml',
    dob: { year: '1952', month: 'Jan', day: '1' },
    sinNumber: generateRandomSIN(),
    address: '16, Ysixteenaml, Calgary, AB, T3C3L1',
    employmentStatus: 'Student',
    password: 'Thirdstream1@',
    branch: 'Oshawa Branch',
    politicallyExposed: 'No',
    taxResident: 'No',
    usPerson: 'No'
},

// User 5
{
    name: 'Brenda - AB',
    firstName: 'Brenda',
    lastName: 'TestKansas',
    dob: { year: '1981', month: 'May', day: '8' },
    sinNumber: generateRandomSIN(),
    address: '630, 6 ST S, Lethbridge AB T1J2E3',
    employmentStatus: 'Student',
    password: 'Thirdstream1@',
    branch: 'Oshawa Branch',
    politicallyExposed: 'No',
    taxResident: 'No',
    usPerson: 'No'
},
{
      name: 'Pearl - ON',
      firstName: 'Pearl',
      lastName: 'Testswansie',
      dob: { year: '1959', month: 'Jan', day: '11' },
      sinNumber: generateRandomSIN(),
      address: '50 Weybright Crt, Scarborough, ON M1S 5A8',
      employmentStatus: 'Student',
      password: 'Thirdstream1@',
      branch: 'Oshawa Branch',
      politicallyExposed: 'No',
      taxResident: 'No',
      usPerson: 'No',
    },
    {
      name: 'Helen - BC',
      firstName: 'Helen',
      lastName: 'Thomas',
      dob: { year: '1987', month: 'Apr', day: '24' },
      sinNumber: generateRandomSIN(),
      address: '102-4338 Main St Whistler, BC, V8E 1B4',
      employmentStatus: 'Employed',
      password: 'Thirdstream1@',
      branch: 'Little Britain Branch',
      politicallyExposed: 'None of the above',
      taxResident: 'No',
      usPerson: 'No'
    },
    {
      name: 'Sherri - BC',
      firstName: 'Sherri',
      lastName: 'TestAdkins',
      dob: { year: '1994', month: 'Jul', day: '14' },
      sinNumber: generateRandomSIN(),
      address: '6380 Sophia St Vancouver BC V5W2W6',
      employmentStatus: 'Employed',
      password: 'Thirdstream1@',
      branch: 'Little Britain Branch',
      politicallyExposed: 'None of the above',
      taxResident: 'No',
      usPerson: 'No'
    },
    {
      name: 'Kevin - MB',
      firstName: 'Kevin',
      lastName: 'MacNeil',
      dob: { year: '1970', month: 'Apr', day: '4' },
      sinNumber: generateRandomSIN(),
      address: '1710 134 Smith St, Winnipeg, MB R3C3W2',
      employmentStatus: 'Employed',
      password: 'Thirdstream1@',
      branch: 'Little Britain Branch',
      politicallyExposed: 'No',
      taxResident: 'No',
      usPerson: 'No',
    },
    {
      name: 'Richard - MB',
      firstName: 'Richard',
      lastName: 'TESTIDHL',
      dob: { year: '1985', month: 'Jan', day: '9' },
      sinNumber: generateRandomSIN(),
      address: '104 Kraim Ave, Dauphin, MB R7N0A6',
      employmentStatus: 'Employed',
      password: 'Thirdstream1@',
      branch: 'Little Britain Branch',
      politicallyExposed: 'No',
      taxResident: 'No',
      usPerson: 'No',
    },
    {
      name: 'CHARLYNE - MB',
      firstName: 'CHARLYNE',
      lastName: 'TYSON',
      dob: { year: '1968', month: 'Nov', day: '13' },
      sinNumber: generateRandomSIN(),
      address: '204 Inglewood St	Winnipeg	MB	R3J1W7',
      employmentStatus: 'Employed',
      password: 'Thirdstream1@',
      branch: 'Little Britain Branch',
      politicallyExposed: 'No',
      taxResident: 'No',
      usPerson: 'No',
    },
    {
      name: 'Jaime - MB',
      firstName: 'Jaime',
      lastName: 'Lakatos',
      dob: { year: '1971', month: 'Jun', day: '3' },
      sinNumber: generateRandomSIN(),
      address: '144A, Emerson Ave, Winnipeg, MB, R2G1E9',
      employmentStatus: 'Employed',
      password: 'Thirdstream1@',
      branch: 'Little Britain Branch',
      politicallyExposed: 'No',
      taxResident: 'No',
      usPerson: 'No',
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
      politicallyExposed: 'No',
      taxResident: 'No',
      usPerson: 'No',
    },
    {
      name: 'RICKIE - ON',
      firstName: 'RICKIE',
      lastName: 'PUDENZ',
      dob: { year: '1940', month: 'Sep', day: '2' },
      sinNumber: generateRandomSIN(),
      address: '46, IRWIN RD,ORONO, ON,L0B1M0',
      employmentStatus: 'Self-Employed',
      password: 'Thirdstream1@',
      branch: 'Oshawa Branch',
      politicallyExposed: 'None of the below',
      taxResident: 'No',
      usPerson: 'No'
    },
    {
      name: 'Phillip - AB',
      firstName: 'Phillip',
      lastName: 'East',
      dob: { year: '1972', month: 'Jul', day: '4' },
      sinNumber: generateRandomSIN(),
      address: '9507 Sherridon Dr, Fort Saskatchewan, AB, T8L 1W4',
      employmentStatus: 'Employed',
      password: 'Thirdstream1@',
      branch: 'Little Britain Branch',
      politicallyExposed: 'None of the above',
      taxResident: 'No',
      usPerson: 'No'
    },
    {
      name: 'Kevin - ON',
      firstName: 'Kevin',
      lastName: 'MacNeil',
      dob: { year: '1970', month: 'Apr', day: '4' },
      sinNumber: generateRandomSIN(),
      address: 'N-280 Spadina Ave, Toronto, ON, M5T 3A5',
      employmentStatus: 'Employed',
      password: 'Thirdstream1@',
      branch: 'Kingsway Branch (Royal York)',
      politicallyExposed: 'No',
      taxResident: 'No',
      usPerson: 'No'
    },
    {
      name: 'Tim - ON',
      firstName: 'Tim',
      lastName: 'TESTLee',
      dob: { year: '1957', month: 'Apr', day: '29' },
      sinNumber: generateRandomSIN(),
      address: '508 Miller Ave Oshawa, ON, L1J2T1',
      employmentStatus: 'Employed',
      password: 'Thirdstream1@',
      branch: 'Cobourg Branch',
      politicallyExposed: 'None of the above',
      taxResident: 'No',
      usPerson: 'No'
    }
  ],
  accountOptions: {
    intendedUses: ['Day to day banking', 'Investment', 'Education'],
    howHeard: ['Search engines', 'Social media', 'Referral'],
    overdraft: ['Yes', 'No'],
    debitCard: ['Yes', 'No'],
    openAnotherAccount: ['Yes', 'No'],
    submissionStatus: ['Yes', 'No'],
    addJointApplicant: ['Yes', 'No'],
  }
};

// Helper function to retrieve user by name
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
const selectedUser = getUserByName('Kevin - MB'); // ['Jaime', 'Helen']

// 👥 Add Joint User?
const selectAddJointApplicant = Data.accountOptions.addJointApplicant[1]; // 0 = Yes, 1 = No
// Select Joint User
const selectedJointUser = getUserByName('Richard - MB'); // ['Jaime', 'Helen']

// 📧 Email and Cell
const mainUserEmail = 'alex.saberi@thirdstream.ca';
const mainUserCell = '6478543392';
const jointUserEmail = 'alex.saberi1@thirdstream.ca';
const jointUserCell = '6478543394';


// ⚙️ Select Options
// Open Another Account?
const selectedAddAnotherAccount = Data.accountOptions.openAnotherAccount[0]; // 0 = Yes, 1 = No
// Select Overdraft
const selectedOverdraft = Data.accountOptions.overdraft[0]; // 0 = Yes, 1 = No
// Select Debit Card
const selectedDebitCard = Data.accountOptions.debitCard[0]; // 0 = Yes, 1 = No
// Submit Application?
const selectSubmissionStatus = Data.accountOptions.submissionStatus[1]; // 0 = Yes, 1 = No
// Pause Mode?
const selectPauseModeStatus = 'Deactive'; // 'Active' or 'Deactive'
// SMS Verification?
const isSmsMockEnabled = true; // true = Mock SMS, false = Real OTP //////////////

// ===========================
//      END OF SETTINGS
// ===========================





const selectedIntendedUse = Data.accountOptions.intendedUses[0];
const selectedHowHeard = Data.accountOptions.howHeard[0];







test('Assiniboine', async ({ }) => {
  if (!process.env.CI) {
    test.setTimeout(1800000); // 30 minutes for local runs
  } else {
    test.setTimeout(180000); // 30 seconds in CI
  }
  // --- NEW: Launch the right engine based on selectedDevice ---
  const browserType =
    selectedDevice.engine === 'firefox' ? firefox :
      selectedDevice.engine === 'webkit' ? webkit :
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
  await setupSmsVerification(page, isSmsMockEnabled);

  if (!process.env.CI) {
    playwrightCore('Assiniboine');
  }

  if (!selectedUser) {
    throw new Error('User not found');
  }
  // Check if selectedJointUser is defined
  if (!selectedJointUser) {
    throw new Error('Selected joint user is not found');
  }

  // if (!selectedUser) throw new Error('User not found');
  const user = selectedUser;
  const jointUser = selectedJointUser;

  // 🟢 Welcome Page
  await page.goto(environment);
  await page.getByRole('button', { name: 'Get Started' }).click();
  await page.locator('app-checkbox-input').filter({ hasText: 'I agree with the declarations' }).locator('div').nth(3).click();
  await page.locator('app-checkbox-input').filter({ hasText: 'I confirm that I have read' }).locator('div').nth(3).click();
  await page.getByRole('button', { name: 'Next' }).click();

  // 🟢 Account Selection
  await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
  await page.getByRole('option', { name: selectedHowHeard }).click();

  await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
  await page.getByRole('option', { name: selectedIntendedUse }).click();

  await page.locator('p-radiobutton').filter({ hasText: selectedDebitCard }).locator('div').nth(2).click();
  // await page.locator(`#open-overdraft-account1`).nth(1).click();
  // await page.locator('#open-overdraft-account1-2 > .p-radiobutton > .p-radiobutton-box').first().click();
  //  await page.getByText(selectedOverdraft).nth(1).click();
  // await page.locator('p-radiobutton').filter({ hasText: selectedOverdraft }).locator('div').nth(2).click();

  // await page.getByText('Yes').nth(2).click();

  await page.getByRole('button', { name: 'Next' }).click();

  // 🟢 Add Another Account
  await page.locator('p-radiobutton').filter({ hasText: selectedAddAnotherAccount }).locator('div').nth(2).click();
  await page.getByRole('dialog').getByRole('button', { name: 'Next' }).click();

  // ---------- open another account
  if (selectedAddAnotherAccount == 'Yes') {
    //intended use
    await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
    await page.getByLabel(selectedIntendedUse, { exact: true }).click();

    await page.getByRole('button', { name: 'Next' }).click();
  }

  // 🟢 Personal Information
  await page.getByLabel('First name').fill(user.firstName);
  await page.getByLabel('Last name').fill(user.lastName);

  await selectDateFromDatePicker( page, user.dob, 'p-calendar#dob' );
  await page.getByLabel('Social Insurance Number').type(generateRandomSIN());
  await page.getByLabel('Home address').fill(user.address);
  await page.locator('//body//app-root//li[1]').click();

  await page.getByLabel('Cell #').type(mainUserCell);
  await page.getByLabel('Email').type(mainUserEmail);
  await page.getByRole('button', { name: 'Next' }).click();

  // 🟢 Confirm Mobile
  await page.getByLabel('Enter mobile code').fill('000000');
  await page.getByRole('button', { name: 'Submit' }).click();

  // 🟢 Branch Page
  await page.getByRole('button', { name: 'Next' }).click();

  // 🟢 Employment
  await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
  await page.getByLabel(user.employmentStatus, { exact: true }).click();
  await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
  await page.getByLabel('Agriculture, Horticulture and Fisheries', { exact: true }).click();
  await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
  await page.getByLabel('Farmer', { exact: true }).click();
  await page.getByLabel('Position/Title').fill('Product owner');
  await page.getByLabel('Employer Name').fill('thirdstream');
  await page.getByRole('option', { name: /thirdstream 8 Street/ }).click();
  await page.getByLabel('Verbal Passcode').fill('1234');
  await page.getByLabel('Online Banking Password').fill(user.password);
  await page.getByLabel('Re-enter your password').fill(user.password);
  await page.getByRole('button', { name: 'Next' }).click();

  // 🟢 Compliance
  await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
  await page.getByLabel('Save for retirement', { exact: true }).click();
  await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
  await page.getByLabel(user.politicallyExposed, { exact: true }).click();
  await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
  await page.getByRole('option', { name: user.taxResident }).click();
  await page.locator('div').filter({ hasText: /^empty$/ }).click();
  await page.getByRole('option', { name: user.usPerson, exact: true }).click();
  await page.getByRole('button', { name: 'Next' }).click();

  // would you like to add a joint applicant?
  await page.locator('p-radiobutton').filter({ hasText: selectAddJointApplicant }).locator('div').nth(2).click();
  await page.getByRole('dialog').getByRole('button', { name: 'Next' }).click();



  if (selectAddJointApplicant === 'Yes') {
    await page.locator('app-checkbox-input').filter({ hasText: 'I agree with the declarations' }).locator('div').nth(3).click();
    await page.locator('app-checkbox-input').filter({ hasText: 'I confirm that I have read' }).locator('div').nth(3).click();
    await page.getByRole('dialog').getByRole('button', { name: 'Next' }).click();



    // 🟢 Joint Applicant Information
    await page.getByLabel('First name').fill(jointUser.firstName);
    await page.getByLabel('Last name').fill(jointUser.lastName);

    await selectDateFromDatePicker( page, jointUser.dob, 'p-calendar#dob' );

    await page.getByLabel('Social Insurance Number').type(generateRandomSIN());
    await page.getByRole('searchbox', { name: 'Home address' }).fill(jointUser.address);
    await page.locator('//body//app-root//li[1]').click();

    await page.getByLabel('Cell #').type(jointUserCell);
    await page.getByRole('textbox', { name: 'Email' }).type(jointUserEmail);
    await page.getByRole('button', { name: 'Next' }).click();

    // 🟢 Confirm Mobile
    await page.getByLabel('Enter mobile code').fill('000000');
    await page.getByRole('button', { name: 'Submit' }).click();

    // 🟢 Employment
    await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
    await page.getByLabel(jointUser.employmentStatus, { exact: true }).click();
    await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
    await page.getByLabel('Agriculture, Horticulture and Fisheries', { exact: true }).click();
    await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
    await page.getByLabel('Farmer', { exact: true }).click();
    await page.getByLabel('Position/Title').fill('Product owner');
    await page.getByLabel('Employer Name').fill('thirdstream');
    await page.getByRole('option', { name: /thirdstream 8 Street/ }).click();
    await page.getByLabel('Verbal Passcode').fill('1234');
    await page.getByLabel('Online Banking Password').fill(jointUser.password);
    await page.getByLabel('Re-enter your password').fill(jointUser.password);
    await page.getByRole('button', { name: 'Next' }).click();

    // 🟢 Compliance
    await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
    await page.getByLabel('Save for retirement', { exact: true }).click();
    await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
    await page.getByLabel(jointUser.politicallyExposed, { exact: true }).click();
    await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
    await page.getByRole('option', { name: jointUser.taxResident }).click();
    await page.locator('div').filter({ hasText: /^empty$/ }).click();
    await page.getByRole('option', { name: jointUser.usPerson, exact: true }).click();
    await page.getByRole('button', { name: 'Next' }).click();


  }


  // ---------- confirmation page


  if (selectSubmissionStatus === 'Yes') {
    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(page.getByRole('heading', { name: 'Getting things ready...' })).toBeVisible({ timeout: 30000 });
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