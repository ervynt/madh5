angular.module('app.controllers', ["ui.router"])
  
.controller('yAWACtrl', function($scope, $state) {
   $scope.yAWAbutton1 = function () {
       $state.go("addCity");
   }
});
yAWACtrl.controller("yAWACtrl", ["$scope", "$state", yAWACtrl])

.controller('weatherCtrl', function($scope) {

})
   
.controller('addCityCtrl', function($scope) {

})
 
