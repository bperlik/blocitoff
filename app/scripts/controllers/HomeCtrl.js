(function() {
  function HomeCtrl(Task) {
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
    this.createTask = function(content) {
      if (this.content) {
        this.taskData.$add({
          content: this.content,
          completed: "no",
          createdAt: Date.now(),
          user: "Unknown",
          $priority: "low"
        });
      }
    };


  }

  angular
    .module('blocitoff')
    .controller('HomeCtrl', ['Task', HomeCtrl]);
})();
