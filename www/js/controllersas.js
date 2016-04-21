angular.module('starter.controllersas', ['ngSanitize', 'ngStorage'])

.controller('B1Ctrl', function($scope, $sce, $localStorage, $log,$interval ) {
  $scope.master = {};
  $scope.level="B"+ getUrlVars()["floor"];


 $scope.$storage = $localStorage;
  $log.log($scope.$storage.mb);
  $log.log($scope.$storage.nb);
  $log.log($scope.$storage.flr);

   $localStorage.flr=$scope.level;


function getUrlVars() {
var vars = {};
var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
vars[key] = value;
});
return vars;
}
  
  $scope.elevation= $scope.$storage.flr;
  $scope.stats= ""+getUrlVars()["status"];

  function autoUp(stats){
   

    if (stats[0] == 0) {
      $localStorage.mb = stats;

        if ($localStorage.mb[1] == 1) {

          var some1 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/car.png\' /> ');
          $scope.m1 = some1;
        } else if ($localStorage.mb[1] == 3) {

          var some1 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/disconnection.png\' /> ');
          $scope.m1 = some1;
        } else {
          var some1 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/concrete1.jpg\' /> ');
          $scope.m1 = some1;
        }



        if ($localStorage.mb[2] == 1) {

          var some2 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/car.png\' /> ');
          $scope.m2 = some2;
        } else if ($localStorage.mb[2] == 3) {


          var some2 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/disconnection.png\' /> ');
          $scope.m2 = some2;
        } else {
          var some2 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/concrete1.jpg\' /> ');
          $scope.m2 = some2;
        }

        if ($localStorage.mb[3] == 1) {

          var some3 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/car.png\' /> ');
          $scope.m3 = some3;
        } else if ($localStorage.mb[3] == 3) {

          //$scope.master.m1= '<img class= \"overlay\" src= \'../Misc/disconnection.png\' /> ';
          var some3 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/disconnection.png\' /> ');
          $scope.m3 = some3;
        } else {
          var some3 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/concrete1.jpg\' /> ');
          $scope.m3 = some3;
        }
     
        //
        var tats= $localStorage.nb
        if (tats[1] == 1) {

          var some1 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/car.png\' /> ');
          $scope.n1 = some1;
        } else if (tats[1] == 3) {

          //$scope.master.m1= '<img class= \"overlay\" src= \'../Misc/disconnection.png\' /> ';
          var some1 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/disconnection.png\' /> ');
          $scope.n1 = some1;
        } else {
          var some1 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/concrete1.jpg\' /> ');
          $scope.n1 = some1;
        }



        if (tats[2] == 1) {
          var some2 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/car.png\' /> ');
          $scope.n2 = some2;
        } else if (tats[2] == 3) {
          var some2 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/disconnection.png\' /> ');
          $scope.n2 = some2;
        } else {
          var some2 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/concrete1.jpg\' /> ');
          $scope.n2 = some2;
        }

        if (tats[3] == 1) {
          var some3 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/car.png\' /> ');
          $scope.n3 = some3;
        } else if (tats[3] == 3) {
          var some3 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/disconnection.png\' /> ');
          $scope.n3 = some3;
        } else {
          var some3 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/concrete1.jpg\' /> ');
          $scope.n3 = some3;
        }

      } else {
          $localStorage.nb = stats;
        if (stats[1] == 1) {
          var some1 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/car.png\' /> ');
          $scope.n1 = some1;
        } else if (stats[1] == 3) {
          var some1 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/disconnection.png\' /> ');
          $scope.n1 = some1;
        } else {
          var some1 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/concrete1.jpg\' /> ');
          $scope.n1 = some1;
        }



        if (stats[2] == 1) {
          var some2 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/car.png\' /> ');
          $scope.n2 = some2;
        } else if (stats[2] == 3) {
          var some2 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/disconnection.png\' /> ');
          $scope.n2 = some2;
        } else {
          var some2 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/concrete1.jpg\' /> ');
          $scope.n2 = some2;
        }

        if (stats[3] == 1) {
          var some3 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/car.png\' /> ');
          $scope.n3 = some3;
        } else if (stats[3] == 3) {
          var some3 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/disconnection.png\' /> ');
          $scope.n3 = some3;
        } else {
          var some3 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/concrete1.jpg\' /> ');
          $scope.n3 = some3;
        }
        //
        var tats= $localStorage.mb;
         if (tats[1] == 1) {
          var some1 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/car.png\' /> ');
          $scope.m1 = some1;
        } else if (tats[1] == 3) {
          var some1 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/disconnection.png\' /> ');
          $scope.m1 = some1;
        } else {
          var some1 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/concrete1.jpg\' /> ');
          $scope.m1 = some1;
        }



        if (tats[2] == 1) {
          var some2 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/car.png\' /> ');
          $scope.m2 = some2;
        } else if (tats[2] == 3) {
          var some2 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/disconnection.png\' /> ');
          $scope.m2 = some2;
        } else {
          var some2 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/concrete1.jpg\' /> ');
          $scope.m2 = some2;
        }

        if (tats[3] == 1) {
          var some3 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/car.png\' /> ');
          $scope.m3 = some3;
        } else if (tats[3] == 3) {
          var some3 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/disconnection.png\' /> ');
          $scope.m3 = some3;
        } else {
          var some3 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/concrete1.jpg\' /> ');
          $scope.m3 = some3;
        }
      }

  }
$interval(autoUp($scope.stats), 5000);



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

});