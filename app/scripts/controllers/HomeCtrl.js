(function() {
    function HomeCtrl($scope, $firebaseArray, $firebaseObject) {
        // test scope
        $scope.title = "Home Page";

        //var ref = new Firebase("https://blocitoff-3eb16.firebaseio.com");
        var ref = firebase.database().ref();
        // set $scope array to hold tasks to a firebase object that calls $firebase array
        var tasks = $firebaseArray(ref);

        //testing save a new task to firebase task database
        var tasks = $firebaseArray(ref);
        tasks[10] = "This is a testing of saving";
        tasks.$save(10);

        // make available on the DOM
        $scope.tasks = tasks;
    }

    angular
        .module('blocitoff')//,['ui.router', 'ui.bootstrap', 'firebase'])
        .controller('HomeCtrl', ['$scope', '$firebaseObject', '$firebaseArray', HomeCtrl]);
})();
