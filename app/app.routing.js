
angular.
  module('quizapp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/', {
          template:'<home-app></home-app>',
        })
        .when('/quiz/:name',{
          template:'<quiz-comp></quiz-comp>'
        }).when('/login',{
          template:'<login></login>'
        }).when('/signup',{
          template:'<signup></signup>'
        }).otherwise({
          template:'<not-found err-msg="\'Error: page not found\'"></not-found>'
        })
    }
  ]);
