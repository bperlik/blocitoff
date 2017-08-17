(function() {
    function HomeCtrl($scope, $firebaseArray) {

        var tasks=null;
        //var ref = new Firebase("https://blocitoff-3eb16.firebaseio.com/tasks/");
        var ref = firebase.database().ref().child("tasks");
        // synchonized array: set $scope local array to hold tasks to a firebase object that calls $firebase array
        $scope.tasks = $firebaseArray(ref);

        // write a scoped method and pass it into ng-hide, return true if expired
        $scope.Active = function(task) {
            var seven_days = 604800000
            var currentTime = new Date().getTime();
            if ( ( (task.createdAt + seven_days) - currentTime) <= 0 ) {
                return true;
            } else if (task.completed == "yes") {
                return true;
            }
        };
    }

    angular
        .module('blocitoff')
        .controller('HomeCtrl', ['$scope', '$firebaseArray', HomeCtrl]);
})();
