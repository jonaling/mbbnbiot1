angular.module('starter.controllersBackup', ['ngSanitize', 'ngStorage'])

.factory('localstorage',function($window){
  return{
    set: function(id,value){
      $window.localstorage[id]=value;
    },
    get: function(id){
      return $window.localstorage[id];
    }
  };
})

.controller('B1Ctrl', ['$scope', '$sce', function($scope, $sce,$localStorage,
    $sessionStorage) {
  $scope.master = {};
  $scope.level="MBB vs. NB-IoT";

function getUrlVars() {
var vars = {};
var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
vars[key] = value;
});
return vars;
}
  
  $scope.elevation="B"+ getUrlVars()["floor"];
  $scope.stats= ""+getUrlVars()["status"];

  function autoUp(stats){
   

    if (stats[0] == 0) {
        

        if (stats[1] == 1) {

          var some1 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/car.png\' /> ');
          $scope.m1 = some1;
        } else if (stats[1] == 3) {

          //$scope.master.m1= '<img class= \"overlay\" src= \'../Misc/disconnection.png\' /> ';
          var some1 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/disconnection.png\' /> ');
          $scope.m1 = some1;
        } else {
          var some1 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/concrete1.jpg\' /> ');
          $scope.m1 = some1;
        }



        if (stats[2] == 1) {
          // $scope.master.m1= '<img class= \"overlay\" src= \'../Misc/car.png\' /> ';


          var some2 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/car.png\' /> ');
          $scope.m2 = some2;
        } else if (stats[2] == 3) {

          //$scope.master.m1= '<img class= \"overlay\" src= \'../Misc/disconnection.png\' /> ';
          var some2 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/disconnection.png\' /> ');
          $scope.m2 = some2;
        } else {
          var some2 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/concrete1.jpg\' /> ');
          $scope.m2 = some2;
        }

        if (stats[3] == 1) {
          // $scope.master.m1= '<img class= \"overlay\" src= \'../Misc/car.png\' /> ';


          var some3 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/car.png\' /> ');
          $scope.m3 = some3;
        } else if (stats[3] == 3) {

          //$scope.master.m1= '<img class= \"overlay\" src= \'../Misc/disconnection.png\' /> ';
          var some3 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/disconnection.png\' /> ');
          $scope.m3 = some3;
        } else {
          var some3 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/concrete1.jpg\' /> ');
          $scope.m3 = some3;
        }
     


      } else {

        if (stats[1] == 1) {

          var some1 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/car.png\' /> ');
          $scope.n1 = some1;
        } else if (stats[1] == 3) {

          //$scope.master.m1= '<img class= \"overlay\" src= \'../Misc/disconnection.png\' /> ';
          var some1 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/disconnection.png\' /> ');
          $scope.n1 = some1;
        } else {
          var some1 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/concrete1.jpg\' /> ');
          $scope.n1 = some1;
        }



        if (stats[2] == 1) {
          // $scope.master.m1= '<img class= \"overlay\" src= \'../Misc/car.png\' /> ';


          var some2 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/car.png\' /> ');
          $scope.n2 = some2;
        } else if (stats[2] == 3) {

          //$scope.master.m1= '<img class= \"overlay\" src= \'../Misc/disconnection.png\' /> ';
          var some2 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/disconnection.png\' /> ');
          $scope.n2 = some2;
        } else {
          var some2 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/concrete1.jpg\' /> ');
          $scope.n2 = some2;
        }

        if (stats[3] == 1) {
          // $scope.master.m1= '<img class= \"overlay\" src= \'../Misc/car.png\' /> ';


          var some3 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/car.png\' /> ');
          $scope.n3 = some3;
        } else if (stats[3] == 3) {

          //$scope.master.m1= '<img class= \"overlay\" src= \'../Misc/disconnection.png\' /> ';
          var some3 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/disconnection.png\' /> ');
          $scope.n3 = some3;
        } else {
          var some3 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/concrete1.jpg\' /> ');
          $scope.n3 = some3;
        }
      }

  }
 autoUp($scope.stats);

  $scope.update = function(code) {
    $scope.master = angular.copy(code);

    var firstState = null;
    var state;
    var toDiv;
    var f;

    if (code.number.length < 5) {

      if (code.number[0] == 0) {

        if (code.number[1] == 1) {

          var some1 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/car.png\' /> ');
          $scope.m1 = some1;
        } else if (code.number[1] == 3) {

          //$scope.master.m1= '<img class= \"overlay\" src= \'../Misc/disconnection.png\' /> ';
          var some1 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/disconnection.png\' /> ');
          $scope.m1 = some1;
        } else {
          var some1 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/concrete1.jpg\' /> ');
          $scope.m1 = some1;
        }



        if (code.number[2] == 1) {
          // $scope.master.m1= '<img class= \"overlay\" src= \'../Misc/car.png\' /> ';


          var some2 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/car.png\' /> ');
          $scope.m2 = some2;
        } else if (code.number[2] == 3) {

          //$scope.master.m1= '<img class= \"overlay\" src= \'../Misc/disconnection.png\' /> ';
          var some2 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/disconnection.png\' /> ');
          $scope.m2 = some2;
        } else {
          var some2 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/concrete1.jpg\' /> ');
          $scope.m2 = some2;
        }

        if (code.number[3] == 1) {
          // $scope.master.m1= '<img class= \"overlay\" src= \'../Misc/car.png\' /> ';


          var some3 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/car.png\' /> ');
          $scope.m3 = some3;
        } else if (code.number[3] == 3) {

          //$scope.master.m1= '<img class= \"overlay\" src= \'../Misc/disconnection.png\' /> ';
          var some3 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/disconnection.png\' /> ');
          $scope.m3 = some3;
        } else {
          var some3 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/concrete1.jpg\' /> ');
          $scope.m3 = some3;
        }


      } else {
        if (code.number[1] == 1) {

          var some1 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/car.png\' /> ');
          $scope.n1 = some1;
        } else if (code.number[1] == 3) {

          //$scope.master.m1= '<img class= \"overlay\" src= \'../Misc/disconnection.png\' /> ';
          var some1 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/disconnection.png\' /> ');
          $scope.n1 = some1;
        } else {
          var some1 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/concrete1.jpg\' /> ');
          $scope.n1 = some1;
        }



        if (code.number[2] == 1) {
          // $scope.master.m1= '<img class= \"overlay\" src= \'../Misc/car.png\' /> ';


          var some2 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/car.png\' /> ');
          $scope.n2 = some2;
        } else if (code.number[2] == 3) {

          //$scope.master.m1= '<img class= \"overlay\" src= \'../Misc/disconnection.png\' /> ';
          var some2 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/disconnection.png\' /> ');
          $scope.n2 = some2;
        } else {
          var some2 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/concrete1.jpg\' /> ');
          $scope.n2 = some2;
        }

        if (code.number[3] == 1) {
          // $scope.master.m1= '<img class= \"overlay\" src= \'../Misc/car.png\' /> ';


          var some3 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/car.png\' /> ');
          $scope.n3 = some3;
        } else if (code.number[3] == 3) {

          //$scope.master.m1= '<img class= \"overlay\" src= \'../Misc/disconnection.png\' /> ';
          var some3 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/disconnection.png\' /> ');
          $scope.n3 = some3;
        } else {
          var some3 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/concrete1.jpg\' /> ');
          $scope.n3 = some3;
        }
      }

    } else {
      $scope.master.number = "Please use a shorter code";

    }

  };

$scope.floor= function(num){

$scope.level = angular.copy(num);
};

}]);