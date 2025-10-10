import { test, expect } from '@playwright/test';
import https from 'https';

const Data = {
  environments: [
    'https://kawartha.sites.dev.thirdstream.ca/deposits/en/app/flow/welcome',
    'https://kawartha.sites.qa.thirdstream.ca/deposits/en/app/flow/welcome',
    'https://kawartha.sites.test.thirdstream.ca/deposits/en/app/flow/welcome',
    'https://kawartha.sites.staging.thirdstream.ca/deposits/en/app/flow/welcome',
    'https://apply.kawarthacu.com/deposits/en/app/flow/welcome'
  ],
  users: [
    {
      name: 'Pearl - ON',
      firstName: 'Pearl',
      lastName: 'Testswansie',
      dob: { year: '1959', month: 'Jan', day: '11' },
      sinNumber: generateRandomSIN(),
      address: '50 Weybright Crt, Scarborough, ON M1S 5A8',
      employmentStatus: 'Employed',
      password: 'Thirdstream1@',
      branch: 'Cobourg Branch',
      politicallyExposed: 'None of the above',
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
      password: 'Thirdstream1@',
      branch: 'Cobourg Branch',
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
      branch: 'Cobourg Branch',
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
      branch: 'Cobourg Branch',
      politicallyExposed: 'None of the above',
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
      password: 'Thirdstream1@',
      branch: 'Cobourg Branch',
      politicallyExposed: 'None of the above',
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
      password: 'Thirdstream1@',
      branch: 'Cobourg Branch',
      politicallyExposed: 'None of the above',
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
      password: 'Thirdstream1@',
      branch: 'Cobourg Branch',
      politicallyExposed: 'None of the above',
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
      password: 'Thirdstream1@',
      branch: 'Cobourg Branch',
      politicallyExposed: 'None of the above',
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
      password: 'Thirdstream1@',
      branch: 'Cobourg Branch',
      politicallyExposed: 'None of the above',
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
      branch: 'Cobourg Branch',
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
      branch: 'Cobourg Branch',
      politicallyExposed: 'None of the above',
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
    accountTypes: ['Chequing', 'Savings'],
    chequingPackages: ['Breakfree (Youth & Student) Package', 'Complete Package', 'Convenience Package', 'Essentials Package', 'Pay As You Go'],
    savingsPackages: ['High Interest eSavings Account', 'Savings', 'RRSP High Interest eSavings Account', 'TFSA High Interest eSavings Account'],
    chequingIntendedUses: ['Family/Household Inc/Exp', 'Other', 'Pension Income', 'Rental Property Inc/Exp'],
    savingsIntendedUses: ['Car Purchase/Expenses', 'Education', 'Investment', 'Other'],
    howHeard: ['Social Media', 'Search Engine (Google, Safari, Bing, etc.)', 'Word of Mouth', 'Online Forum', 'Print/Digital Media', 'Referral', 'Other'],
    openAnotherAccount: ['Yes', 'No'],
    addJointApplicant: ['Yes', 'No'],
    submissionStatus: ['Yes', 'No'],
    overDraft: ['Yes', 'No'],
    card: ['Debit Mastercard', 'Debit card']
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

// 👤 Select Main User
const selectedUser = getUserByName('Pearl - ON'); // ['Pearl-Completed, 'Pearl-Review', 'Pearl-Declined' 'Tim', 'Nicole','Marty', 'Michael', 'Mandy','Ming' ,'Kara']

// 👥 Add Joint User?
const selectAddJointApplicant = Data.accountOptions.addJointApplicant[0]; // 0 = Yes, 1 = No
// Select Joint User
const selectedJointUser = getUserByName('Tim - ON');  // ['Pearl-Completed, 'Pearl-Review', 'Pearl-Declined' 'Tim', 'Nicole','Marty', 'Michael', 'Mandy','Ming' ,'Kara']

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


// ===========================
//      END OF SETTINGS
// ===========================















// First account
const selectAccountType = Data.accountOptions.accountTypes[0]; // ['Chequing', 'Savings']
const selectChequingAccountPackage = Data.accountOptions.chequingPackages[3]; // ['breakfree', 'Complete Package', 'Convenience Package', 'Essentials Package', 'Pay As You Go']
const selectSavingsAccountPackage = Data.accountOptions.savingsPackages[1]; // ['High Interest eSavings Account', 'Savings', 'RRSP High Interest eSavigs Account', 'TFSA High Interest eSavigs Account']
const selectChequingIntendedUse = Data.accountOptions.chequingIntendedUses[2]; // ['Family/Household Inc/EXP', 'Other', 'Pension Income', 'Rental Property Inc/Exp']
const selectSavingsIntendedUse = Data.accountOptions.savingsIntendedUses[2]; // ['Car Purchase/Expenses', 'Education', 'Investments', 'Other']
const selectHowHeard = Data.accountOptions.howHeard[0]; // ['Social Media', 'Search Engine (Google, Safari, Bing, etc.)', 'Word of Mouth', 'Online Forum', 'Print/Digital Media', 'Referral', 'Other']
const selectCard = Data.accountOptions.card[0] // ['Debit Mastercard', 'Debit card']
const selectOverdraft = Data.accountOptions.overDraft[0]; // ['Yes', 'No']

// Second account
const selectAccountType1 = Data.accountOptions.accountTypes[0]; // ['Chequing', 'Savings']
const selectChequingAccountPackage1 = Data.accountOptions.chequingPackages[3]; // ['breakfree', 'Complete Package', 'Convenience Package', 'Essentials Package', 'Pay As You Go']
const selectSavingsAccountPackage1 = Data.accountOptions.savingsPackages[0]; // ['High Interest eSavings Account', 'Savings', 'RRSP High Interest eSavigs Account', 'TFSA High Interest eSavigs Account']
const selectChequingIntendedUse1 = Data.accountOptions.chequingIntendedUses[2]; // ['Family/Household Inc/EXP', 'Other', 'Pension Income', 'Rental Property Inc/Exp']
const selectSavingsIntendedUse1 = Data.accountOptions.savingsIntendedUses[2]; // ['Car Purchase/Expenses', 'Education', 'Investment', 'Other']
const selectHowHeard1 = Data.accountOptions.howHeard[0]; // ['Social Media', 'Search Engine (Google, Safari, Bing, etc.)', 'Word of Mouth', 'Online Forum', 'Print/Digital Media', 'Referral', 'Other']
const selectOverdraft1 = Data.accountOptions.overDraft[1]; // ['Yes', 'No']
const selectCard1 = Data.accountOptions.card[0] // ['Debit Mastercard', 'Debit card']





















test('Kawartha_RDO', async ({ page }) => {
  test.setTimeout(1800000); // Set timeout to 90 seconds (90000 milliseconds)
  playwrightCore('Kawartha_RDO');
  if (!selectedUser) {
    throw new Error('User not found');
  }

  // Check if selectedJointUser is defined
  if (!selectedJointUser) {
    throw new Error('Selected joint user is not found');
  }

  const user = selectedUser;

  // ------ Welcome Page
  await page.goto(environment);
  await page.getByRole('button', { name: 'Get Started' }).click();
  await page.locator('app-checkbox-input').filter({ hasText: 'I agree with the declarations' }).locator('div').nth(3).click();
  await page.locator('app-checkbox-input').filter({ hasText: 'I confirm that I have read' }).locator('div').nth(3).click();
  // await page.locator('app-checkbox-input').filter({ hasText: 'Send me news, events and' }).locator('div').nth(3).click();
  await page.getByRole('button', { name: 'Next' }).click();

  // ------ Selection Page
  // account type
  if (selectAccountType == 'Chequing') {
    await page.getByText(selectAccountType, { exact: true }).click(); // options: Chequing, Savings
    await page.getByRole('option', { name: selectAccountType }).click();

    // account package
    await page.getByText('Convenience Package', { exact: true }).click(); // Chequing options: Complete Package, Convenience Package, Essentials Package, Pay As You Go | Savings options: High Interest eSavings Account, Savings, RRSP High Interest eSavigs Account, TFSA High Interest eSavigs Account
    await page.getByLabel(selectChequingAccountPackage, { exact: true }).first().click();

    // intended use
    await page.locator('div').filter({ hasText: /^empty$/ }).nth(1).click(); // options: Car Purchase/Expenses, Education, Investment, Other
    await page.getByLabel(selectChequingIntendedUse, { exact: true }).click();

    // where did you hear about us?
    await page.locator('div').filter({ hasText: /^empty$/ }).nth(1).click(); // options: Social Media, Search Engine (Google, Safari, Bing, etc.), Word of Mouth, Online Forum, Print/Digital Media, Referral, other
    await page.getByLabel(selectHowHeard).click();

    // debtit card
    await page.locator('p-radiobutton').filter({ hasText: selectCard }).click();

    // over drft?
    await page.locator('p-radiobutton').filter({ hasText: selectOverdraft }).locator('div').nth(2).click();


    await page.getByRole('button', { name: 'Next' }).click();

  }









  if (selectAccountType == 'Savings') {
    await page.getByText('Chequing', { exact: true }).click(); // options: Chequing, Savings
    await page.getByRole('option', { name: selectAccountType }).click();

    // account package
    await page.locator("//span[@id='pr_id_3_label']").click(); // ['High Interest eSavings Account', 'Savings', 'RRSP High Interest eSavigs Account', 'TFSA High Interest eSavigs Account']
    if (selectSavingsAccountPackage == 'Savings') {
      await page.getByLabel(selectSavingsAccountPackage, { exact: true }).nth(2).click();
    } else {
      await page.getByLabel(selectSavingsAccountPackage, { exact: true }).click();

    }

    // intended use
    await page.locator('#intended-use-dropdown-s-1').first().click(); // options: Car Purchase/Expenses, Education, Investment, Other
    await page.getByLabel(selectSavingsIntendedUse, { exact: true }).click();

    // where did you hear about us?
    await page.locator('div').filter({ hasText: /^empty$/ }).nth(1).click(); // options: Social Media, Search Engine (Google, Safari, Bing, etc.), Word of Mouth, Online Forum, Print/Digital Media, Referral, other
    await page.getByLabel(selectHowHeard, { exact: true }).click();
  }





  if (selectAccountType === 'Savings' && (selectSavingsAccountPackage === 'RRSP High Interest eSavings Account' || selectSavingsAccountPackage === 'TFSA High Interest eSavings Account')) {
    // if selected 'RRSP High Interest eSavings Account', 'TFSA High Interest eSavings Account'
    // how many beneficiaries would you like to add to this account?
    await page.locator('div').filter({ hasText: /^empty$/ }).nth(2).click(); // options: One, Two, Three
    await page.getByLabel('Designate 1 beneficiary', { exact: true }).click();

    // what is the amount that you want to contribute?
    await page.getByLabel('What is the amount you want').click();
    await page.getByLabel('What is the amount you want').fill('1000'); // options: 1000, 2000, 3000

    // jadiiiiiiiiiiid
    //a debit card?
    await page.locator('p-radiobutton').filter({ hasText: selectCard }).locator('div').nth(2).click()

    await page.getByRole('button', { name: 'Next' }).click();
  }

  if (selectAccountType === 'Savings' && (selectSavingsAccountPackage === 'High Interest eSavings Account' || selectSavingsAccountPackage === 'Savings')) {
    //a debit card?
    await page.locator('p-radiobutton').filter({ hasText: selectCard }).locator('div').nth(2).click()
    await page.getByRole('button', { name: 'Next' }).click();
  }


  //another account?
  await page.locator('p-radiobutton').filter({ hasText: selectOpenAnotherAccount }).locator('div').nth(2).click()
  await page.getByRole('dialog').getByRole('button', { name: 'Next' }).click();







  /////////////////////////////////////////////////////////////////////////////////////////////////



  if (selectOpenAnotherAccount == 'Yes') {
    // ------ Selection Page
    // account type
    if (selectAccountType1 == 'Chequing') {
      await page.getByText(selectAccountType1, { exact: true }).click(); // options: Chequing, Savings
      await page.getByRole('option', { name: selectAccountType1 }).click();

      // account package
      await page.getByText('Convenience Package', { exact: true }).click(); // Chequing options: Complete Package, Convenience Package, Essentials Package, Pay As You Go | Savings options: High Interest eSavings Account, Savings, RRSP High Interest eSavigs Account, TFSA High Interest eSavigs Account
      await page.getByLabel(selectChequingAccountPackage1, { exact: true }).first().click();

      // intended use
      await page.locator('div').filter({ hasText: /^empty$/ }).first().click();
      await page.getByLabel(selectChequingIntendedUse1, { exact: true }).click();

      await page.getByRole('button', { name: 'Next' }).click();

    }









    if (selectAccountType1 == 'Savings') {
      await page.getByText('Chequing', { exact: true }).click(); // options: Chequing, Savings
      await page.getByRole('option', { name: selectAccountType1 }).click();

      // account package
      await page.locator("//span[@id='pr_id_11_label']").click(); // ['High Interest eSavings Account', 'Savings', 'RRSP High Interest eSavigs Account', 'TFSA High Interest eSavigs Account']
      if (selectSavingsAccountPackage1 == 'Savings') {
        await page.getByLabel(selectSavingsAccountPackage1, { exact: true }).nth(2).click();
      } else {
        await page.getByLabel(selectSavingsAccountPackage1, { exact: true }).click();

      }

      // intended use
      await page.locator('#intended-use-dropdown-s-2').first().click(); // options: Car Purchase/Expenses, Education, Investment, Other
      await page.getByLabel(selectSavingsIntendedUse1, { exact: true }).click();

      // where did you hear about us?
      // await page.locator('div').filter({ hasText: /^empty$/ }).nth(1).click(); // options: Social Media, Search Engine (Google, Safari, Bing, etc.), Word of Mouth, Online Forum, Print/Digital Media, Referral, other
      // await page.getByLabel(selectHowHeard1, { exact: true }).click();
    }





    if (selectAccountType1 === 'Savings' && (selectSavingsAccountPackage1 === 'RRSP High Interest eSavings Account' || selectSavingsAccountPackage1 === 'TFSA High Interest eSavings Account')) {
      // if selected 'RRSP High Interest eSavings Account', 'TFSA High Interest eSavings Account'
      // how many beneficiaries would you like to add to this account?
      await page.locator('div').filter({ hasText: /^empty$/ }).nth(2).click(); // options: One, Two, Three
      await page.getByLabel('Designate 1 beneficiary', { exact: true }).click();

      // what is the amount that you want to contribute?
      await page.getByLabel('What is the amount you want').click();
      await page.getByLabel('What is the amount you want').fill('1000'); // options: 1000, 2000, 3000

      // jadiiiiiiiiiiid
      //a debit card?
      // await page.locator('p-radiobutton').filter({ hasText: selectCard1 }).locator('div').nth(2).click()

      await page.getByRole('button', { name: 'Next' }).click();
    }

    if (selectAccountType1 === 'Savings' && (selectSavingsAccountPackage1 === 'High Interest eSavings Account' || selectSavingsAccountPackage1 === 'Savings')) {
      //a debit card?
      // await page.locator('p-radiobutton').filter({ hasText: selectCard1 }).locator('div').nth(2).click()
      await page.getByRole('button', { name: 'Next' }).click();
    }














  }




  // ------ Personal Information Page

  // Personal Information Section
  await page.getByLabel('First name').click();
  await page.getByLabel('First name').fill(user.firstName);
  await page.getByLabel('Last name').click();
  await page.getByLabel('Last name').fill(user.lastName);


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







  await page.getByLabel('Social insurance number').click();
  await page.getByLabel('Social insurance number').type(user.sinNumber);

  // Contact Details Section



  await page.getByLabel('Physical address').click();
  await page.getByLabel('Physical address').fill(user.address);
  await page.locator('//body//app-root//li[1]').click()






  await page.getByLabel('Cell #').click();
  await page.getByLabel('Cell #').fill(mainUserCell);
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill(mainUserEmail);
  await page.getByRole('button', { name: 'Next' }).click();

  // Confirm your mobile
  // Enter mobile code
  await page.getByLabel('Enter mobile code').click();
  await page.getByLabel('Enter mobile code').fill('000000');
  await page.getByRole('button', { name: 'Submit' }).click();

  // ----- employment-info page
  // Employment section
  // Employment status
  await page.locator('div').filter({ hasText: /^empty$/ }).first().click(); // options: Employed, Self-Employed, Unemployed, Retired, Student

  if (user.employmentStatus == 'Employed') {
    await page.getByLabel(user.employmentStatus, { exact: true }).click();
    await page.locator('div').filter({ hasText: /^empty$/ }).first().click()
    await page.getByLabel('Aboriginal Affairs', { exact: true }).click()
    await page.getByLabel('Job Title', { exact: true }).click()
    await page.getByLabel('Job Title', { exact: true }).fill('QA Engineer')
    await page.getByLabel('Employer Name', { exact: true }).click()
    await page.getByLabel('Employer Name', { exact: true }).fill("thirdstream")
    // await page.getByRole('option', { name: 'thirdstream 8 Street South,' }).click()

  }
  if (user.employmentStatus == 'Self-Employed') {
    await page.getByLabel(user.employmentStatus, { exact: true }).click();
    await page.locator('div').filter({ hasText: /^empty$/ }).first().click()
    await page.getByLabel('Aboriginal Affairs', { exact: true }).click()
    await page.getByLabel('Job Title', { exact: true }).click()
    await page.getByLabel('Job Title', { exact: true }).fill('QA Engineer')
  }

  if (user.employmentStatus == 'Unemployed' || user.employmentStatus == 'Retired') {
    await page.getByLabel(user.employmentStatus, { exact: true }).click();
    await page.locator('div').filter({ hasText: /^empty$/ }).nth(1).click()
    await page.getByLabel('Aboriginal Affairs', { exact: true }).click()
    await page.getByLabel('Previous Job Title', { exact: true }).click()
    await page.getByLabel('Previous Job Title', { exact: true }).fill('QA Engineer')
    await page.getByLabel('Previous Employer Name', { exact: true }).click()
    await page.getByLabel('Previous Employer Name', { exact: true }).fill("walmart")
    // await page.getByRole('option', { name: 'thirdstream 8 Street South,' }).click()
  }
  if (user.employmentStatus == 'Student') {
    await page.getByLabel(user.employmentStatus, { exact: true }).click();

  }



  // Password Setup section
  // online banking password
  await page.getByLabel('Online Banking Password').click();
  await page.getByLabel('Online Banking Password').fill(user.password);
  // re-enter password
  await page.getByLabel('Re-enter your password').click();
  await page.getByLabel('Re-enter your password').fill(user.password);

  await page.getByRole('button', { name: 'Next' }).click();

  // --- branch-selection page
  // select a branch section
  await page.getByRole('cell', { name: user.branch }).click();

  await page.getByRole('button', { name: 'Next' }).click();


  if (selectAccountType === 'Savings' && (selectSavingsAccountPackage === 'RRSP High Interest eSavings Account' || selectSavingsAccountPackage === 'TFSA High Interest eSavings Account')) {

    // if selected 'RRSP High Interest eSavings Account', 'TFSA High Interest eSavings Account'
    // --- Beneficiary 1 page
    await page.getByLabel('First Name').click()
    await page.getByLabel('First Name').fill('Helen')
    await page.getByLabel('Last Name').click()
    await page.getByLabel('Last Name').fill('Thomas')
    await page.locator('div').filter({ hasText: /^empty$/ }).click() //options: Spouse, Common Law, Other
    await page.getByLabel('Spouse', { exact: true }).click()
    await page.getByLabel('Allocation (%)').click()
    await page.getByLabel('Allocation (%)').fill("100")
    await page.getByRole('button', { name: 'Next' }).click();
  }
  // end if

  // -- compliance page
  // Are you politically exposed or the head of an international organization?
  await page.locator('div').filter({ hasText: /^empty$/ }).first().click(); // options: I am, or a family member or close associate is a FOREIGN politically exposed person, I am, or a family member or close associate is a DOMESTIC politically exposed person, I am, or a family member or close associate is, the head of an international organization, None of the above
  await page.getByLabel(user.politicallyExposed).click();

  // Are you a tax resident of a country other than Canada or the US?
  await page.locator('div').filter({ hasText: /^empty$/ }).first().click(); // options: No, Yes - in one (1) other country, Yes - in two (2) other countries, Yes - in three (3) other countries
  await page.getByLabel(user.taxResident, { exact: true }).click();

  // Are you a US person? (a citizen or a resident of the US)
  await page.locator('div').filter({ hasText: /^empty$/ }).click(); // options: No, Yes - I have a Social Security Number, Yes - I will apply or have applied for a SSN but not ye received it, Yes - I don't have a Social Security Number
  await page.getByRole('option', { name: user.usPerson, exact: true }).first().click();

  // Please enter citizenship
  await page.getByLabel('Please enter citizenship').click();
  await page.getByLabel('Please enter citizenship').fill('Canadian');
  await page.waitForTimeout(1000)


  if (user.politicallyExposed == 'I am, or a family member or close associate is a FOREIGN politically exposed' || user.politicallyExposed == 'I am, or a family member or close associate is a DOMESTIC politically exposed') {
    // what is your relationship to the politically exposed person?
    await page.locator('div').filter({ hasText: /^empty$/ }).nth(2).click()
    await page.getByLabel('Self', { exact: true }).click()

    await page.getByLabel('First name').fill("Helen")
    await page.getByLabel('Last name').fill("Thomas")
    await page.getByLabel('Name of the institution').fill("USA")

    //office
    await page.locator('div').filter({ hasText: /^empty$/ }).nth(2).click()
    await page.getByLabel('Head of state or head of').click()

    await page.getByLabel('Source of funds').fill("None of your business")
    await page.getByLabel('Source of wealth').fill("None of your business")
  }

  if (user.politicallyExposed == 'I am, or a family member or close associate is, the head of an international') {
    await page.locator('div').filter({ hasText: /^empty$/ }).nth(2).click()
    await page.getByLabel('Self', { exact: true }).click()

    await page.getByLabel('First name').fill("Helen")
    await page.getByLabel('Last name').fill("Thomas")
    await page.getByLabel('Name of the institution').fill("USA")

    //position
    await page.locator('div').filter({ hasText: /^empty$/ }).nth(3).click()
    await page.getByLabel('Head of state or head of').click()

    await page.getByLabel('Source of funds').fill("None of your business")
    await page.getByLabel('Source of wealth').fill("None of your business")
  }

  if (user.taxResident == 'Yes - in one (1) other country') {
    //Please enter the jurisdiction that you are a tax resident of
    await page.locator('div').filter({ hasText: /^empty$/ }).nth(1).click()
    await page.getByLabel('Afghanistan', { exact: true }).click()

    //Do you have a tax Identification Number (TIN) for the selected tax juridiction?
    await page.locator('div').filter({ hasText: /^empty$/ }).nth(2).click()
    await page.getByLabel('No - I will apply or have', { exact: true }).click()


  }

  if (user.usPerson == 'Yes - I have a Social Security Number') {
    await page.getByLabel('SSN Number').fill("111111111")
  }

  if (user.usPerson == "Yes - I don't have a Social Security Number") {
    await page.getByLabel('Please explain the \'other\'').fill("explain the reason")
  }

  //jadiiid
  await page.getByRole('button', { name: 'Next' }).click();


  //////////////////////////// joint


  await page.locator('p-radiobutton').filter({ hasText: selectAddJointApplicant }).locator('div').nth(2).click(); // options: Yes, No
  // if (selectAddJointApplicant === 'Yes') {
  //  await page.locator('p-checkbox div').nth(2).click()
  // }
  await page.getByRole('button', { name: 'Submit' }).click();

  if (selectAddJointApplicant === 'Yes') {
    await page.locator('app-checkbox-input').filter({ hasText: 'I agree with the declarations' }).locator('div').nth(3).click();
    await page.locator('app-checkbox-input').filter({ hasText: 'I confirm that I have read' }).locator('div').nth(3).click();
    await page.getByRole('dialog').getByRole('button', { name: 'Next' }).click();
    // ----------------------- joint personal information page
    // Personal Information Section
    await page.getByLabel('First name').click();
    await page.getByLabel('First name').fill(selectedJointUser.firstName);
    await page.getByLabel('Last name').click();
    await page.getByLabel('Last name').fill(selectedJointUser.lastName);


    await page.locator('input[name="dob"]').click();

    if (selectedJointUser.dob.year >= '1990' && selectedJointUser.dob.year <= '1999') {
      await page.getByRole('button', { name: '' }).click();
    }
    if (selectedJointUser.dob.year >= '1970' && selectedJointUser.dob.year <= '1979') {
      await page.getByRole('button', { name: '' }).click();
    }
    if (selectedJointUser.dob.year >= '1960' && selectedJointUser.dob.year <= '1969') {
      await page.getByRole('button', { name: '' }).click();
      await page.getByRole('button', { name: '' }).click();
    }
    if (selectedJointUser.dob.year >= '1950' && selectedJointUser.dob.year <= '1959') {
      await page.getByRole('button', { name: '' }).click();
      await page.getByRole('button', { name: '' }).click();
      await page.getByRole('button', { name: '' }).click();
    }
    if (selectedJointUser.dob.year >= '1940' && selectedJointUser.dob.year <= '1949') {
      await page.getByRole('button', { name: '' }).click();
      await page.getByRole('button', { name: '' }).click();
      await page.getByRole('button', { name: '' }).click();
      await page.getByRole('button', { name: '' }).click();
    }
    if (selectedJointUser.dob.year >= '1930' && selectedJointUser.dob.year <= '1939') {
      await page.getByRole('button', { name: '' }).click();
      await page.getByRole('button', { name: '' }).click();
      await page.getByRole('button', { name: '' }).click();
      await page.getByRole('button', { name: '' }).click();
      await page.getByRole('button', { name: '' }).click();
    }


    await page.getByText(selectedJointUser.dob.year, { exact: true }).first().click();
    await page.getByText(selectedJointUser.dob.month, { exact: true }).first().click();
    await page.getByText(selectedJointUser.dob.day, { exact: true }).first().click();



    await page.getByLabel('Social insurance number').type(selectedJointUser.sinNumber);

    // Contact Details Section
    await page.getByLabel('Physical address').click();
    await page.getByLabel('Physical address').fill(selectedJointUser.address);
    await page.locator('//body//app-root//li[1]').click()
    await page.getByLabel('Cell #').type(jointUserCell);
    await page.getByLabel('Email').first().fill(jointUserEmail);
    await page.getByRole('button', { name: 'Next' }).click();

    // Confirm your mobile
    // Enter mobile code
    await page.getByLabel('Enter Code').click();
    await page.getByLabel('Enter Code').fill('000000');
    await page.getByRole('button', { name: 'Submit' }).click();

    // ----- employment-info page
    // Employment section
    // Employment status
    await page.locator('div').filter({ hasText: /^empty$/ }).first().click(); // options: Employed, Self-Employed, Unemployed, Retired, Student

    if (selectedJointUser.employmentStatus == 'Employed') {
      await page.getByLabel(selectedJointUser.employmentStatus, { exact: true }).click();
      await page.locator('div').filter({ hasText: /^empty$/ }).first().click()
      await page.getByLabel('Aboriginal Affairs', { exact: true }).click()
      await page.getByLabel('Job Title', { exact: true }).click()
      await page.getByLabel('Job Title', { exact: true }).fill('QA Engineer')
      await page.getByLabel('Employer Name', { exact: true }).click()
      await page.getByLabel('Employer Name', { exact: true }).fill("staples")
      // await page.getByRole('option', { name: 'thirdstream 8 Street South,' }).click()

    }
    if (selectedJointUser.employmentStatus == 'Self-Employed') {
      await page.getByLabel(selectedJointUser.employmentStatus, { exact: true }).click();
      await page.locator('div').filter({ hasText: /^empty$/ }).first().click()
      await page.getByLabel('Aboriginal Affairs', { exact: true }).click()
      await page.getByLabel('Job Title', { exact: true }).click()
      await page.getByLabel('Job Title', { exact: true }).fill('QA Engineer')
    }

    if (selectedJointUser.employmentStatus == 'Unemployed' || selectedJointUser.employmentStatus == 'Retired') {
      await page.getByLabel(selectedJointUser.employmentStatus, { exact: true }).click();
      await page.locator('div').filter({ hasText: /^empty$/ }).nth(1).click()
      await page.getByLabel('Aboriginal Affairs', { exact: true }).click()
      await page.getByLabel('Previous Job Title', { exact: true }).click()
      await page.getByLabel('Previous Job Title', { exact: true }).fill('QA Engineer')
      await page.getByLabel('Previous Employer Name', { exact: true }).click()
      await page.getByLabel('Previous Employer Name', { exact: true }).fill("thirdstream")
      // await page.getByRole('option', { name: 'thirdstream 8 Street South,' }).click()
    }
    if (selectedJointUser.employmentStatus == 'Student') {
      await page.getByLabel(selectedJointUser.employmentStatus, { exact: true }).click();

    }



    // Password Setup section
    // online banking password
    await page.getByLabel('Online Banking Password').click();
    await page.getByLabel('Online Banking Password').fill(selectedJointUser.password);
    // re-enter password
    await page.getByLabel('Re-enter your password').click();
    await page.getByLabel('Re-enter your password').fill(selectedJointUser.password);

    await page.getByRole('button', { name: 'Next' }).click();


    // -- compliance page
    // Are you politically exposed or the head of an international organization?
    await page.locator('div').filter({ hasText: /^empty$/ }).first().click(); // options: I am, or a family member or close associate is a FOREIGN politically exposed person, I am, or a family member or close associate is a DOMESTIC politically exposed person, I am, or a family member or close associate is, the head of an international organization, None of the above
    await page.getByLabel(selectedJointUser.politicallyExposed, { exact: true }).first().click();

    // Are you a tax resident of a country other than Canada or the US?
    await page.locator('div').filter({ hasText: /^empty$/ }).first().click(); // options: No, Yes - in one (1) other country, Yes - in two (2) other countries, Yes - in three (3) other countries
    await page.getByLabel(selectedJointUser.taxResident, { exact: true }).click();

    // Are you a US person? (a citizen or a resident of the US)
    await page.locator('div').filter({ hasText: /^empty$/ }).click(); // options: No, Yes - I have a Social Security Number, Yes - I will apply or have applied for a SSN but not ye received it, Yes - I don't have a Social Security Number
    await page.getByRole('option', { name: selectedJointUser.usPerson, exact: true }).click();

    // Please enter citizenship
    await page.getByLabel('Please enter citizenship').click();
    await page.getByLabel('Please enter citizenship').fill('Canadian');
    await page.waitForTimeout(1000)



    await page.getByRole('button', { name: 'Next' }).click();



  }

  // ---------- confirmation page


  if (selectSubmissionStatus === 'Yes') {
    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(page.getByRole('heading', { name: 'Processing your application...' })).toBeVisible({ timeout: 30000 });
    await page.waitForTimeout(3000);

    if (selectPauseModeStatus === 'Active') {
      await new Promise(() => { });
    } else {
      await page.waitForTimeout(9000);
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



