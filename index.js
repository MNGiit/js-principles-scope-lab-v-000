// Write your solution in this file!

customerName = "Bob";

function upperCaseCustomerName(name) {
  return name.
}

upperCaseCustomerName()
modifies the customerName variable ‣
AssertionError: expected undefined to equal 'bob'
    at Context.<anonymous> (test/indexTest.js:12:38)expect(window.customerName).to.equal('bob');
upperCaseCustomerName();
expect(window.customerName).to.equal('BOB');
setBestCustomer()
setBestCustomer ‣
ReferenceError: setBestCustomer is not defined
    at Context.<anonymous> (test/indexTest.js:23:7)expect(window.bestCustomer).to.equal(undefined);
setBestCustomer();
expect(window.bestCustomer).to.equal('not bob');
overwriteBestCustomer()
overwrites the best customer ‣
ReferenceError: overwriteBestCustomer is not defined
    at Context.<anonymous> (test/indexTest.js:31:7)overwriteBestCustomer('maybe bob');
expect(window.bestCustomer).to.equal('maybe bob');
changeLeastFavoriteCustomer()
unsuccessfully tries to reassign the least favorite customer ‣
ReferenceError: changeLeastFavoriteCustomer is not defined
    at Context.<anonymous> (test/indexTest.js:39:14)expect(changeLeastFavoriteCustomer).to.throw(TypeError);