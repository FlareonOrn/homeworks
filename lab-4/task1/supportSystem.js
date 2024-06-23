const readline = require('readline');

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Handlers for different support levels
const handlers = {
  1: 'Basic Support',
  2: 'Technical Support',
  3: 'Billing Support',
  4: 'Advanced Support'
};

// Function to display the main menu
function showMainMenu() {
  console.log('\nWelcome to the Support System');
  console.log('1. General Inquiry');
  console.log('2. Technical Issue');
  console.log('3. Billing Question');
  console.log('4. Other');
  rl.question('Please choose an option (1-4): ', handleMainMenu);
}

// Function to handle main menu choices
function handleMainMenu(choice) {
  switch (choice) {
    case '1':
      console.log(`You have selected: ${handlers[1]}`);
      endSupport();
      break;
    case '2':
      showTechnicalMenu();
      break;
    case '3':
      showBillingMenu();
      break;
    case '4':
      showOtherMenu();
      break;
    default:
      console.log('Invalid choice. Please choose again.');
      showMainMenu();
  }
}

// Function to display the technical support menu
function showTechnicalMenu() {
  console.log('\nTechnical Support');
  console.log('1. Internet Issues');
  console.log('2. Software Issues');
  console.log('3. Hardware Issues');
  rl.question('Please choose an option (1-3): ', handleTechnicalMenu);
}

// Function to handle technical support menu choices
function handleTechnicalMenu(choice) {
  switch (choice) {
    case '1':
      console.log(`You have selected: ${handlers[2]}`);
      endSupport();
      break;
    case '2':
      showSoftwareMenu();
      break;
    case '3':
      console.log(`You have selected: ${handlers[2]}`);
      endSupport();
      break;
    default:
      console.log('Invalid choice. Please choose again.');
      showTechnicalMenu();
  }
}

// Function to display the software support menu
function showSoftwareMenu() {
  console.log('\nSoftware Issues');
  console.log('1. Installation');
  console.log('2. Updates');
  console.log('3. Crashes');
  rl.question('Please choose an option (1-3): ', handleSoftwareMenu);
}

// Function to handle software support menu choices
function handleSoftwareMenu(choice) {
  switch (choice) {
    case '1':
      console.log(`You have selected: ${handlers[4]}`);
      endSupport();
      break;
    case '2':
      console.log(`You have selected: ${handlers[4]}`);
      endSupport();
      break;
    case '3':
      console.log(`You have selected: ${handlers[4]}`);
      endSupport();
      break;
    default:
      console.log('Invalid choice. Please choose again.');
      showSoftwareMenu();
  }
}

// Function to display the billing support menu
function showBillingMenu() {
  console.log('\nBilling Support');
  console.log('1. Payment Issues');
  console.log('2. Refunds');
  console.log('3. Invoice Questions');
  rl.question('Please choose an option (1-3): ', handleBillingMenu);
}

// Function to handle billing support menu choices
function handleBillingMenu(choice) {
  switch (choice) {
    case '1':
    case '2':
    case '3':
      console.log(`You have selected: ${handlers[3]}`);
      endSupport();
      break;
    default:
      console.log('Invalid choice. Please choose again.');
      showBillingMenu();
  }
}

// Function to display the other support menu
function showOtherMenu() {
  console.log('\nOther Inquiries');
  console.log('1. Feedback');
  console.log('2. Complaints');
  console.log('3. Other');
  rl.question('Please choose an option (1-3): ', handleOtherMenu);
}

// Function to handle other support menu choices
function handleOtherMenu(choice) {
  switch (choice) {
    case '1':
    case '2':
    case '3':
      console.log(`You have selected: ${handlers[1]}`);
      endSupport();
      break;
    default:
      console.log('Invalid choice. Please choose again.');
      showOtherMenu();
  }
}

// Function to end the support session
function endSupport() {
  console.log('Thank you for contacting support. Goodbye!');
  rl.close();
}

// Run the support system
showMainMenu();
