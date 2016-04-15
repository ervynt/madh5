angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
      .state('yAWA', {
    url: '/page1',
    templateUrl: 'templates/yAWA.html',
    controller: 'yAWACtrl'
  })

  .state('weather', {
    url: '/page2',
    templateUrl: 'templates/weather.html',
    controller: 'weatherCtrl'
  })

  .state('addCity', {
    url: '/page3',
    templateUrl: 'templates/addCity.html',
    controller: 'addCityCtrl'
  })

$urlRouterProvider.otherwise('/page1')

  

});

app.config(["$stateProvider", "$urlRouterProvider", appConfig]);

