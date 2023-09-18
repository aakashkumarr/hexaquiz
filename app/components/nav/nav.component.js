angular.module("navApp").component("navApp", {
  templateUrl: "components/nav/nav.template.html",
  controller: [
    "$routeParams",
    "$rootScope",
    "$location",
    "$timeout",
    function NavController($routeParams, $rootScope, $location, $timeout) {
      this.compMsg = "Hello form Nav component";
      $timeout(() => (this.hideAuth = $rootScope.token), 100);

      $rootScope.$on("$locationChangeSuccess", (event, newUrl, oldUrl) => {
        this.hideAuth = $rootScope.token;
        console.log(this.hideAuth, newUrl, oldUrl);
      });
      this.logout = function () {
        this.hideAuth = null;
        $rootScope.token = null;
        localStorage.removeItem("token");
        $location.path(["/login"]);
      };
    },
  ],
  bindings: {
    navTitle: "<",
  },
});
