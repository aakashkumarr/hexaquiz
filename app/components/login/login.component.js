angular.module("login").component("login", {
  templateUrl: "components/login/login.template.html",
  controller: [
    "$routeParams",
    "$http","$rootScope","$location",
    function LoginController($routeParams, $http,$rootScope,$location) {
      this.login = function () {
        console.log("login called");
       
        $http.post('http://localhost:3000/api/auth/login',{user: {
            email: this.email,
            password: this.password,
          },}).then(res=>{
            this.token=res.data
            $rootScope.token=this.token
            $rootScope.isAuthenticated=true
            $location.path(['/'])
            localStorage.setItem('token',this.token)
          },err=>console.error(err))
      };
      this.testEmail=function(){
        this.isEmailValid=this.email.match(/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/)
      }
    },
  ],
});
