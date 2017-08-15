(function() {
    function HomeCtrl($scope, $firebaseArray) {

        var tasks=null;
        //var ref = new Firebase("https://blocitoff-3eb16.firebaseio.com/tasks/");
        var ref = firebase.database().ref().child("tasks");
        // synchonized array: set $scope local array to hold tasks to a firebase object that calls $firebase array
        $scope.tasks = $firebaseArray(ref);

    }

    angular
        .module('blocitoff')
        .controller('HomeCtrl', ['$scope', '$firebaseArray', HomeCtrl]);
})();
