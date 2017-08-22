(function() {
  function Task($firebaseArray) {
    // Task factory service to create a Task class to use throughout app
    //var ref = new Firebase("https://blocitoff-3eb16.firebaseio.com/tasks/");
    var ref = firebase.database().ref().child("tasks");
    // synchonized array: set $scope local array to hold tasks to a firebase object that calls $firebase array
    var tasks = $firebaseArray(ref);

    var confirmCompleted = function (task) {
      task.completed = true;
      tasks.$save(task);
    }

    return {
      all: tasks,
      completeTask: confirmCompleted,
    };

  }

    angular
        .module('blocitoff')
        .factory('Task', ['$firebaseArray', Task]);
})();
