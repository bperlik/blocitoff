(function() {
  function HomeCtrl(Task, $scope) {
    this.taskData = Task.all;

    // update record to complete true
    this.updateTask = function (task) {
      Task.comfirmCompleted(task);
    };

    //$scope.taskData = $filter('orderBy')(this.taskData, 'priority');

    // write scoped methods and pass it into ng-hide, return true if expired
    this.expiredTask = function(createdAt) {
      var seven_days = 604800000;
      var currentTime = new Date().getTime();
      if (currentTime > (createdAt + seven_days)) {
        return true;
      }
    }

    this.completedTask = function(task) {
      if (task === true) {
        return true;
      }
    }

    // write a method using $Add to create new task on firebase array
    this.createTask = function(priority) {
      if (this.newTask) {
        this.taskData.$add({
          content: this.newTask,
          completed: false,
          createdAt: Date.now(),
          user: "Unknown",
          priority: priority
        });
        this.taskData = '';
      }
    }

    // set options for priority dropdown using id for order
    this.data = {
      availableOptions: [
        {id: '1', name: 'high'},
        {id: '2', name: 'medium'},
        {id: '3', name: 'low'}
      ]
      //,
      //selectedOption: {id: '3', name: 'Low'}
    };

  }

  angular
    .module('blocitoff')
    .controller('HomeCtrl', ['Task', '$scope', HomeCtrl]);
})();
