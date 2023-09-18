angular.module("signup").component("signup", {
  templateUrl: "components/signup/signup.template.html",
  controller: [
    "$routeParams",
    "$http",
    "$location",
    "$timeout",
    function SignUpController($routeParams, $http, $location,$timeout) {
      this.serverErr = null;
      this.signUp = function () {
        console.log("singup called");

        $http
          .post("http://localhost:3000/api/auth/signup", {
            user: {
              name: this.firstName + " " + this.lastName,
              email: this.email,
              password: this.password,
            },
          })
          .then(
            (res) => {
              alert(res.data);
              $location.path(["/login"]);
            },
            (err) => {
              console.error(err);
              this.serverErr = err.data;
              $timeout(()=>this.serverErr=null,3000)
            }
          );
      };
    },
  ],
});
