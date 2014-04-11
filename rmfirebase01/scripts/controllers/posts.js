'use strict';
 
app.controller('RMViewCtrl', function ($scope,$location, RMView) {
    if($location.path() === '/rmlist'){
        $scope.rmlists = RMView.all;
    }
  });
  
