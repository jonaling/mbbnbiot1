angular.module('starter.controllers', ['ngSanitize', 'ngStorage'])

.factory("LS", function($window, $rootScope) {
  angular.element($window).on('storage', function(event) {
    if (event.key === 'Mb') {
      $rootScope.$apply();
    }
      if (event.key === 'Nb') {
      $rootScope.$apply();
    }
      if (event.key === 'Fr') {
      $rootScope.$apply();
    }
  });
  return {
    setDataMb: function(val) {
      $window.localStorage && $window.localStorage.setItem('Mb', val);
      return this;
    },
    getDataMb: function() {
      return $window.localStorage && $window.localStorage.getItem('Mb');
    },
      setDataNb: function(val) {
      $window.localStorage && $window.localStorage.setItem('Nb', val);
      return this;
    },
    getDataNb: function() {
      return $window.localStorage && $window.localStorage.getItem('Nb');
    },
      setDataFr: function(val) {
      $window.localStorage && $window.localStorage.setItem('Fr', val);
      return this;
    },
    getDataFr: function() {
      return $window.localStorage && $window.localStorage.getItem('Fr');
    }
  };
})

.controller('B1Ctrl',function($scope, $sce,$log,$localStorage,$sessionStorage,LS) {
  $scope.master = {};
  $scope.level="MBB vs. NB-IoT";

function getUrlVars() {
var vars = {};
var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
vars[key] = value;
});
return vars;
}

 LS.setDataFr("B"+getUrlVars()["floor"]); 
  $scope.elevation=LS.getDataFr();
  $scope.stats= ""+getUrlVars()["status"];

  function autoUp(stats){
   

    if (stats[0] == 0) {
        LS.setDataMb(stats);

        if (LS.getDataMb()[1] == 1) {

          var some1 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/car.png\' /> ');
          $scope.m1 = some1;
        } else if (LS.getDataMb()[1] == 3) {

          //$scope.master.m1= '<img class= \"overlay\" src= \'../Misc/disconnection.png\' /> ';
          var some1 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/disconnection.png\' /> ');
          $scope.m1 = some1;
        } else {
          var some1 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/concrete1.jpg\' /> ');
          $scope.m1 = some1;
        }

        $log.log(LS.getDataMb()[2]);

        if (LS.getDataMb()[2] == 1) {
          // $scope.master.m1= '<img class= \"overlay\" src= \'../Misc/car.png\' /> ';


          var some2 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/car.png\' /> ');
          $scope.m2 = some2;
        } else if (LS.getDataMb()[2] == 3) {

          //$scope.master.m1= '<img class= \"overlay\" src= \'../Misc/disconnection.png\' /> ';
          var some2 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/disconnection.png\' /> ');
          $scope.m2 = some2;
        } else {
          var some2 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/concrete1.jpg\' /> ');
          $scope.m2 = some2;
        }

        if (LS.getDataMb()[3] == 1) {
          // $scope.master.m1= '<img class= \"overlay\" src= \'../Misc/car.png\' /> ';


          var some3 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/car.png\' /> ');
          $scope.m3 = some3;
        } else if (LS.getDataMb()[3] == 3) {

          //$scope.master.m1= '<img class= \"overlay\" src= \'../Misc/disconnection.png\' /> ';
          var some3 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/disconnection.png\' /> ');
          $scope.m3 = some3;
        } else {
          var some3 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/concrete1.jpg\' /> ');
          $scope.m3 = some3;
        }
     //  LS.getDataNb()
   if ( LS.getDataNb()[1] == 1) {

          var some1 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/car.png\' /> ');
          $scope.m1 = some1;
        } else if ( LS.getDataNb()[1] == 3) {

          //$scope.master.m1= '<img class= \"overlay\" src= \'../Misc/disconnection.png\' /> ';
          var some1 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/disconnection.png\' /> ');
          $scope.m1 = some1;
        } else {
          var some1 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/concrete1.jpg\' /> ');
          $scope.m1 = some1;
        }



        if ( LS.getDataNb()[2] == 1) {
          // $scope.master.m1= '<img class= \"overlay\" src= \'../Misc/car.png\' /> ';


          var some2 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/car.png\' /> ');
          $scope.m2 = some2;
        } else if ( LS.getDataNb()[2] == 3) {

          //$scope.master.m1= '<img class= \"overlay\" src= \'../Misc/disconnection.png\' /> ';
          var some2 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/disconnection.png\' /> ');
          $scope.m2 = some2;
        } else {
          var some2 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/concrete1.jpg\' /> ');
          $scope.m2 = some2;
        }

        if ( LS.getDataNb()[3] == 1) {
          // $scope.master.m1= '<img class= \"overlay\" src= \'../Misc/car.png\' /> ';


          var some3 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/car.png\' /> ');
          $scope.m3 = some3;
        } else if ( LS.getDataNb()[3] == 3) {

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

});