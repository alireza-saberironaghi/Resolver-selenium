import { test, expect, devices, chromium, firefox, webkit } from '@playwright/test';
import { selectDateFromDatePicker } from './helpers/calendarHelper.js';
import { generateRandomSIN } from './helpers/dataHelper.js';
import { setupSmsVerification } from './helpers/apiHelper.js';
import https from 'https';

const Data = {
    environments: [
        'https://access.sites.qa.thirdstream.ca/deposits/en/app/flow/welcome',
        'https://access.sites.qa.thirdstream.ca/deposits/en/app/flow/welcome',
        'https://access.sites.test.thirdstream.ca/deposits/en/app/flow/welcome',
        'https://access.sites.staging.thirdstream.ca/deposits/en/app/flow/welcome',
        'https://join.accesscu.ca/deposits/en/app/flow/welcome'
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
    employmentStatus: 'Employed',
    industry: 'Business and Financial',
    occupation: 'Accountant',
    password: 'Thirdstream1@',
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
    employmentStatus: 'Employed',
    industry: 'Business and Financial',
    occupation: 'Accountant',
    password: 'Thirdstream1@',
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
    employmentStatus: 'Employed',
    industry: 'Business and Financial',
    occupation: 'Accountant',
    password: 'Thirdstream1@',
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
    employmentStatus: 'Employed',
    industry: 'Business and Financial',
    occupation: 'Accountant',
    password: 'Thirdstream1@',
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
            employmentStatus: 'Employed',
            industry: 'Business and Financial',
            occupation: 'Accountant',
            password: 'Thirdstream1@',
            politicallyExposed: 'No',
            taxResident: 'No',
            usPerson: 'No'
        },
        {
            name: 'Helen - BC',
            firstName: 'Helen',
            lastName: 'Thomas',
            dob: { year: '1987', month: 'Apr', day: '24' },
            sinNumber: generateRandomSIN(),
            address: '102-4338 Main St Whistler, BC, V8E 1B4',
            employmentStatus: 'Employed',
            industry: 'Business and Financial',
            occupation: 'Accountant',
            password: 'Thirdstream1@',
            politicallyExposed: 'No',
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
            industry: 'Business and Financial',
            occupation: 'Accountant',
            password: 'Thirdstream1@',
            politicallyExposed: 'No',
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
            industry: 'Business and Financial',
            occupation: 'Accountant',
            password: 'Thirdstream1@',
            politicallyExposed: 'No',
            taxResident: 'No',
            usPerson: 'No'
        },
        {
            name: 'Richard - MB',
            firstName: 'Richard',
            lastName: 'TESTIDHL',
            dob: { year: '1985', month: 'Jan', day: '9' },
            sinNumber: generateRandomSIN(),
            address: '104 Kraim Ave, Dauphin, MB R7N0A6',
            employmentStatus: 'Employed',
            industry: 'Business and Financial',
            occupation: 'Accountant',
            password: 'Thirdstream1@',
            politicallyExposed: 'No',
            taxResident: 'No',
            usPerson: 'No'
        },
        {
            name: 'CHARLYNE - MB',
            firstName: 'CHARLYNE',
            lastName: 'TYSON',
            dob: { year: '1968', month: 'Nov', day: '13' },
            sinNumber: generateRandomSIN(),
            address: '204 Inglewood St Winnipeg MB R3J1W7',
            employmentStatus: 'Employed',
            industry: 'Business and Financial',
            occupation: 'Accountant',
            password: 'Thirdstream1@',
            politicallyExposed: 'No',
            taxResident: 'No',
            usPerson: 'No'
        },
        {
            name: 'Jaime - MB',
            firstName: 'Jaime',
            lastName: 'Lakatos',
            dob: { year: '1971', month: 'Jun', day: '3' },
            sinNumber: generateRandomSIN(),
            address: '144A, Emerson Ave, Winnipeg, MB, R2G1E9',
            employmentStatus: 'Employed',
            industry: 'Business and Financial',
            occupation: 'Accountant',
            password: 'Thirdstream1@',
            politicallyExposed: 'No',
            taxResident: 'No',
            usPerson: 'No'
        },
        {
            name: 'Chrit - BC',
            firstName: 'Chrit',
            lastName: 'Brown',
            dob: { year: '1987', month: 'Apr', day: '16' },
            sinNumber: generateRandomSIN(),
            address: '554 Sixth St New Westminster, BC, V3L 3B5',
            employmentStatus: 'Employed',
            industry: 'Business and Financial',
            occupation: 'Accountant',
            password: 'Thirdstream1@',
            politicallyExposed: 'No',
            taxResident: 'No',
            usPerson: 'No'
        },
        {
            name: 'RICKIE - ON',
            firstName: 'RICKIE',
            lastName: 'PUDENZ',
            dob: { year: '1940', month: 'Sep', day: '2' },
            sinNumber: generateRandomSIN(),
            address: '46, IRWIN RD,ORONO, ON,L0B1M0',
            employmentStatus: 'Employed',
            industry: 'Business and Financial',
            occupation: 'Accountant',
            password: 'Thirdstream1@',
            politicallyExposed: 'No',
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
            industry: 'Business and Financial',
            occupation: 'Accountant',
            password: 'Thirdstream1@',
            politicallyExposed: 'No',
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
            industry: 'Business and Financial',
            occupation: 'Accountant',
            password: 'Thirdstream1@',
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
            industry: 'Business and Financial',
            occupation: 'Accountant',
            password: 'Thirdstream1@',
            politicallyExposed: 'No',
            taxResident: 'No',
            usPerson: 'No'
        }
    ],
    accountOptions: {
        openAnotherAccount: ['Yes', 'No'],
        submissionStatus: ['Yes', 'No'],
        Labesahel: ['Yes', 'No'],
        addJointApplicant: ['Yes', 'No'],
    }
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
const selectedUser = getUserByName('Richard - MB'); // ['Helen', 'Sherri', 'Morgan', 'Francisco', 'Rhoda', 'Maximo', 'Kasey', 'Sid', 'Ambrose', 'Scot', 'Mona', 'Anne', 'Gino', 'Stan']

// 👥 Add Joint User?
const selectAddJointApplicant = Data.accountOptions.addJointApplicant[0]; // 0 = Yes, 1 = No
// Select Joint User
const selectedJointUser = getUserByName('Kevin - MB'); // ['Helen', 'Sherri', 'Morgan', 'Francisco', 'Rhoda', 'Maximo', 'Kasey', 'Sid', 'Ambrose', 'Scot', 'Mona', 'Anne', 'Gino', 'Stan']

// 📧 Email and Cell
const mainUserEmail = 'alex.saberi@thirdstream.ca';
const mainUserCell = '6478543392';
const jointUserEmail = 'alex.saberi1@thirdstream.ca';
const jointUserCell = '6478543394';

// ⚙️ Select Options
// Open Another Account?
const selectOpenAnotherAccount = Data.accountOptions.openAnotherAccount[0]; // 0 = Yes, 1 = No
// Submit Application?
const selectSubmissionStatus = Data.accountOptions.submissionStatus[1]; // 0 = Yes, 1 = No
// Pause Mode?
const selectPauseModeStatus = 'Deactive'; // 'Active' or 'Deactive'
// SMS Verification?
const isSmsMockEnabled = true; // true = Mock SMS, false = Real OTP

// ===========================
//      END OF SETTINGS
// ===========================

test('Access_RDO', async ({ }) => {
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
        playwrightCore('Access_RDO');
    }
    if (!selectedUser) {
        throw new Error('User not found');
    }

    const user = selectedUser;

    await page.goto(environment);

    await page.getByRole('button', { name: 'Get Started' }).click();
    await page.locator('app-checkbox-input').filter({ hasText: 'I agree with the declarations' }).getByRole('checkbox').check();
    await page.locator('app-checkbox-input').filter({ hasText: 'I confirm that I have read' }).getByRole('checkbox').check();
    await page.getByRole('button', { name: 'Next' }).click();

    ////////////////////////// account selection 1 page
    // Intended use
    await page.locator('p-select#intended-use-dropdown1').click();
    await page.getByRole('option', { name: 'Education', exact: true }).click();

    // where did you hear?
    await page.locator('p-select#where-did-you-hear-dropdown').click();
    await page.getByRole('option', { name: 'Social Media', exact: true }).click();

    // add another account? options: Yes, No
    await page.getByRole('radio', { name: selectOpenAnotherAccount, exact: true }).check();

    await page.getByRole('button', { name: 'Next' }).click();


    ///////////////////////////// account selection 2 page
    if (selectOpenAnotherAccount === 'Yes') {
        // intended use

        await page.locator('p-select#intended-use-dropdown2').click();
        await page.getByRole('option', { name: 'Education', exact: true }).click();

        await page.getByRole('button', { name: 'Next' }).click();
    }

    //////////////////////// personal information page
    await page.getByRole('textbox', { name: 'First Name' }).fill(user.firstName);
    await page.getByRole('textbox', { name: 'Last Name' }).fill(user.lastName);
    await selectDateFromDatePicker( page, user.dob, 'p-datepicker#dob' );
    await page.getByLabel('Social Insurance Number').type(generateRandomSIN());
    await page.getByRole('combobox', { name: 'Physical Address', exact: true }).fill(user.address);
    await page.getByRole('option').first().click();

    await page.getByRole('textbox', { name: 'Cell #' }).type(mainUserCell);
    await page.getByRole('textbox', { name: 'Email' }).type(mainUserEmail);

    await page.getByRole('button', { name: 'Next' }).click();
    // mobile confirmation
    await page.waitForTimeout(100);
    await page.getByRole('textbox', { name: 'Enter Code' }).fill('000000');
    await page.getByRole('button', { name: 'Submit' }).click();


    // password
    await page.getByRole('textbox', { name: 'Online banking password' }).fill(user.password);
    await page.getByRole('textbox', { name: 'Re-enter your password' }).fill(user.password);

    await page.getByRole('textbox', { name: 'MIC' }).fill("MIC123");
    await page.getByRole('button', { name: 'Next' }).click();

    //////////////// employment information page
    await page.locator('p-select#employment-type').click(); // options: Employed, Self-employed, Unemployed, Retired, Student, Homemaker
    await page.getByRole('option', { name: user.employmentStatus, exact: true }).click();

    // industry
    await page.locator('p-select#industry').click();
    await page.getByRole('option', { name: user.industry, exact: true }).click();
    // occupation
    await page.getByRole('textbox', { name: 'Occupation' }).fill('Accountant');

    // employer name
    await page.getByLabel('Employer Name').fill('thirdstream');
    await page.getByRole('option', { name: 'thirdstream' }).click();
    await page.getByRole('button', { name: 'Next' }).click();


    //////////////////////////// home branch page
    await page.getByRole('button', { name: 'Next' }).click();


    // add another account? options: Yes, No
    await page.getByRole('dialog').getByRole('radio', { name: selectAddJointApplicant, exact: true }).check();
    await page.getByRole('dialog').getByRole('button', { name: 'Submit' }).click();

    //////////////////////// Joint Applicant Flow (if selected)
    if (selectAddJointApplicant === 'Yes') {
        if (!selectedJointUser) {
            throw new Error('Joint user not found');
        }

        const jointUser = selectedJointUser;

        // declarations joint
        // await page.locator('app-checkbox-input').filter({ hasText: 'I agree with the declarations' }).getByRole('checkbox').check();
        // await page.locator('app-checkbox-input').filter({ hasText: 'I confirm that I have read' }).getByRole('checkbox').check();
        // await page.getByRole('dialog').getByRole('button', { name: 'Next' }).click();

        ////////////// personal information joint
        await page.getByRole('textbox', { name: 'First Name' }).fill(jointUser.firstName);
        await page.getByRole('textbox', { name: 'Last Name' }).fill(jointUser.lastName);
        await selectDateFromDatePicker( page, selectedJointUser.dob, 'p-datepicker#dob' );

        await page.getByLabel('Social Insurance Number').type(generateRandomSIN());
        await page.getByRole('combobox', { name: 'Physical Address', exact: true }).fill(jointUser.address);
        await page.getByRole('option').first().click();

        await page.getByRole('textbox', { name: 'Cell #' }).type(jointUserCell);
        await page.getByRole('textbox', { name: 'Email' }).type(jointUserEmail);

        await page.getByRole('button', { name: 'Next' }).click();
        // mobile confirmation
        await page.waitForTimeout(100);
        await page.getByRole('textbox', { name: 'Enter Code' }).fill('000000');
        await page.getByRole('button', { name: 'Submit' }).click();


        // password joint
        await page.getByRole('textbox', { name: 'Online banking password' }).fill(jointUser.password);
        await page.getByRole('textbox', { name: 'Re-enter your password' }).fill(jointUser.password);


        await page.getByRole('textbox', { name: 'MIC' }).fill("MIC123");
        await page.getByRole('button', { name: 'Next' }).click();



        // employment joint
        await page.locator('p-select#employment-type').click();
        await page.getByRole('option', { name: jointUser.employmentStatus, exact: true }).click();
        await page.locator('p-select#industry').click();
        await page.getByRole('option', { name: jointUser.industry, exact: true }).click();

        await page.getByRole('textbox', { name: 'Occupation' }).fill('Accountant');

        // employer name
        await page.getByLabel('Employer Name').fill('thirdstream');
        await page.getByRole('option', { name: 'thirdstream' }).click();

        await page.getByRole('button', { name: 'Next' }).click();




    }

    // ---------- confirmation page


    if (selectSubmissionStatus === 'Yes') {
        await page.getByRole('button', { name: 'Submit' }).click();
        await expect(page.getByRole('heading', { name: 'Verifying Identity...' })).toBeVisible({ timeout: 30000 });
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