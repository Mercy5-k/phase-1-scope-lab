// Declare a global variable called customerName with var
var customerName = 'bob';

// Function to uppercase the customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Function that declares a global variable bestCustomer
function setBestCustomer() {
  bestCustomer = 'not bob'; // declared without var/let/const, becomes global
}

// Function that overwrites bestCustomer
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// Declare a global constant and try to reassign it inside a function
const leastFavoriteCustomer = 'someone';

function changeLeastFavoriteCustomer() {
  // This will throw an error because constants cannot be reassigned
  leastFavoriteCustomer = 'someone else';
}

