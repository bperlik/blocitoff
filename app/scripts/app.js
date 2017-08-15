(function() {
    function config($locationProvider, $stateProvider) {
        $locationProvider
             .html5Mode({
                  enabled: true,       //disables hashbang in URLS
                  requireBase: false
             });
        $stateProvider
             .state('home', {
                  url: '/',
                  controller: 'HomeCtrl as home',
                  templateUrl:'/templates/home.html'
             });
        $stateProvider
             .state('completed', {
                   url: '/',
                   controller: 'CompletedCtrl as completed',
                   templateUrl:'<h4>Testing link to Completed</h4>'
             });
      }

  angular
      .module('blocitoff', ['ui.router','firebase'])
      .config(config);
  })();
