(function() {
  function Task($firebaseArray) {
    // Task factory service to create a Task class to use throughout app
    //var ref = new Firebase("https://blocitoff-3eb16.firebaseio.com/tasks/");
    var ref = firebase.database().ref().child("tasks");
    // synchonized array: set $scope local array to hold tasks to a firebase object that calls $firebase array
    var tasks = $firebaseArray(ref);

    return {
      all: tasks,
    };

  }

    angular
        .module('blocitoff')
        .factory('Task', ['$firebaseArray', Task]);
})();
