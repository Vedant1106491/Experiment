var app = angular.module("billApp", []);

app.controller("BillController", function ($scope) {

  // list of bills
  $scope.bills = [];

  // stores form values
  $scope.bill = {};
  
  // -1 means "no item selected for editing"
  $scope.editIndex = -1;

  // Add or Update Bill
  $scope.addOrUpdateBill = function () {
    if ($scope.editIndex === -1) {
      // Add new bill
      $scope.bills.push({
        name: $scope.bill.name,
        amount: $scope.bill.amount,
        date: $scope.bill.date
      });
    } else {
      // Update existing bill
      $scope.bills[$scope.editIndex] = angular.copy($scope.bill);
      $scope.editIndex = -1;
    }
    $scope.bill = {}; // reset form
  };

  // Edit bill
  $scope.editBill = function (index) {
    $scope.bill = angular.copy($scope.bills[index]);
    $scope.editIndex = index;
  };

  // Delete bill
  $scope.deleteBill = function (index) {
    $scope.bills.splice(index, 1);
  };
});
