(function() {
    function CompletedCtrl(Task) {

      this.taskData = Task.all;

      // method to hide all Active and show all non-active
      // true = hide    false = show
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

    }

    angular
        .module('blocitoff')
        .controller('CompletedCtrl', ['Task', CompletedCtrl]);
})();
