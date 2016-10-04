function MainController($scope) {
  $scope.name = 'Nathaniel';
  $scope.email = 'nathaniel@email.com';
  $scope.phone = '(403)-443-7759';

}

angular
  .module('app')
  .controller('MainController', MainController);
