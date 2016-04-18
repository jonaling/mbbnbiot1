angular.module('starter.controllers', ['ngSanitize'])

.controller('B1Ctrl', ['$scope', '$sce', function($scope, $sce) {
  $scope.master = {};
  $scope.level="MBB vs. NB-IoT";

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
      /*
        for(i = 1; i < code.number.length; i++){
          state = firstState+"" + i;
          if(code.number[i] == 1){

           toDiv='<img class= \"overlay\" scr= \'../Misc/car.png\' /> ';

          }else if(code.number[i] == 3){
            toDiv='<img class= \"overlay\" scr= \'../Misc/disconnection.png\' />';

          }else{
            toDiv='<img/>'
          }
          eval('$state.master.'+state +'= '+toDiv+';');
          */

      /*
   f = new function( '$state.master.'+state +'= '+toDiv+';');
   return (f()); 
  }*/
    } else {
      $scope.master.number = "Please use a shorter code";

    }

  };

$scope.floor= function(num){

$scope.level = angular.copy(num);
};

}]);