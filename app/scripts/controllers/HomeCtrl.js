(function() {
  function HomeCtrl(Task, $scope) {
  this.taskData = Task.all;

    // write scoped methods and pass it into ng-hide, return true if expired
    this.expiredTask = function(createdAtTime) {
      var seven_days = 604800000;
      var currentTime = new Date().getTime();
      if (currentTime > (createdAtTime + seven_days)) {
        return true;
      }
    };

    this.completedTask = function(completedStatus) {
      if (completedStatus === "yes") {
        return true;
      }
    };

    // write a method using $Add to create new task on firebase array
    this.createTask = function(priority) {
      if (this.newTask) {
        this.taskData.$add({
          content: this.newTask,
          completed: "no",
          createdAt: Date.now(),
          user: "Unknown",
          $priority: "low"
        });
        this.taskData = '';
      }
    };

    this.data = {
      availableOptions: [
        {id: '1', name: 'High'},
        {id: '2', name: 'Medium'},
        {id: '3', name: 'Low'}
      ],
      selectedOption: {id: '3', name: 'Low'}
    };

  }

  angular
    .module('blocitoff')
    .controller('HomeCtrl', ['Task', '$scope', HomeCtrl]);
})();
