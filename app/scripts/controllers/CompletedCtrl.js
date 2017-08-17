(function() {
    function CompletedCtrl($scope, $firebaseArray) {

      var tasks=null;
      //var ref = new Firebase("https://blocitoff-3eb16.firebaseio.com/tasks/");
      var ref = firebase.database().ref().child("tasks");
      // synchonized array: set $scope local array to hold tasks to a firebase object that calls $firebase array
      $scope.tasks = $firebaseArray(ref);

      // method to hide all Active and show all non-active
      // true = hide    false = show

      $scope.notActive = function(task) {
          var seven_days = 604800000
          var currentTime = new Date().getTime();
          if ( ( (task.createdAt + seven_days) - currentTime) <= 0 ) {
              return false;
          } else if (task.completed == "yes") {
              return false;
          } else {
              return true;
          }
      };

    }

    angular
        .module('blocitoff')
        .controller('CompletedCtrl', ['$scope', '$firebaseArray', CompletedCtrl]);
})();
