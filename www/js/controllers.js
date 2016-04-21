angular.module('starter.controllers', ['ngSanitize', 'ngStorage'])

.controller('B1Ctrl', function($q,$scope, $sce, $localStorage, $log,$interval ) {
  $scope.master = {};
  $scope.level=""+ getUrlVars()["floor"];
  $scope.stats= ""+getUrlVars()["status"];
  //to do:
  //$scope.elevation= $scope.$storage.fl;
//$localStorage.stor=[];
$scope.test=function(){
var deferred = $q.defer(function(){storUp($scope.level,$scope.stats,$localStorage.stor)});

var promise= deferred.promise.then(function(){$interval(function(){releaseStor($scope,$localStorage);}, 5000)});

};
 function storUp(level,stats,stor){
  if (stor != undefined){
  $log.log(level);  
  $log.log("B:" +stor);

  stor[0]= level;


  $log.log("A:" + stor);
  $log.log("i=4:"+ $localStorage.stor[4]);
  if(stats[0]==0){
    for(var i=1;i<4;i++){
      $localStorage.stor[i]=stats[i];
    }
  }else if(stats[0]==1){
    for(var i=1;i<4;i++){
      $localStorage.stor[i+3]=stats[i];
    }
  }else{

  }
$log.log("stor:"+ stor);
} else{
 stor =[0,0,0,0,0,0,0];
}
 }

function releaseStor($scope,$localStorage){

  $scope.elevation = "B"+$localStorage.stor[0]  ;
  $log.log($scope.elevation);
//m1
        if ($localStorage.stor[1] == 1) {

          var some1 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/car.png\' /> ');
          $scope.m1 = some1;
        } else if ($localStorage.stor[1] == 3) {

          var some1 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/disconnection.png\' /> ');
          $scope.m1 = some1;
        } else {
          var some1 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/concrete1.jpg\' /> ');
          $scope.m1 = some1;
        }
//m2
        if ($localStorage.stor[2] == 1) {

          var some1 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/car.png\' /> ');
          $scope.m2 = some1;
        } else if ($localStorage.stor[2] == 3) {

          var some1 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/disconnection.png\' /> ');
          $scope.m2 = some1;
        } else {
          var some1 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/concrete1.jpg\' /> ');
          $scope.m2 = some1;
        }    
//m3
         if ($localStorage.stor[3] == 1) {

          var some1 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/car.png\' /> ');
          $scope.m3 = some1;
        } else if ($localStorage.stor[3] == 3) {

          var some1 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/disconnection.png\' /> ');
          $scope.m3 = some1;
        } else {
          var some1 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/concrete1.jpg\' /> ');
          $scope.m3 = some1;
        }
//n1
        if ($localStorage.stor[4] == 1) {

          var some1 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/car.png\' /> ');
          $scope.n1 = some1;
        } else if ($localStorage.stor[4] == 3) {

          var some1 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/disconnection.png\' /> ');
          $scope.n1 = some1;
        } else {
          var some1 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/concrete1.jpg\' /> ');
          $scope.n1 = some1;
        }
//n2
        if ($localStorage.stor[5] == 1) {

          var some1 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/car.png\' /> ');
          $scope.n2 = some1;
        } else if ($localStorage.stor[5] == 3) {

          var some1 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/disconnection.png\' /> ');
          $scope.n2 = some1;
        } else {
          var some1 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/concrete1.jpg\' /> ');
          $scope.n2 = some1;
        }
//n3
        if ($localStorage.stor[6] == 1) {

          var some1 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/car.png\' /> ');
          $scope.n3 = some1;
        } else if ($localStorage.stor[6] == 3) {

          var some1 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/disconnection.png\' /> ');
          $scope.n3 = some1;
        } else {
          var some1 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/concrete1.jpg\' /> ');
          $scope.n3 = some1;
        }

  //$log.log("5 seconds");


  /*for(var i=1;i<4;i++){

  }*/
}

//storUp($scope.level,$scope.stats,$localStorage.stor);
//$interval(function(){releaseStor($scope,$localStorage);}, 5000);



function getUrlVars() {
var vars = {};
var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
vars[key] = value;
});
return vars;
}
  

 
/*
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

  }*/




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