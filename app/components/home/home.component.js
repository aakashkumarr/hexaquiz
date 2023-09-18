angular.module("homeApp").component("homeApp", {
  templateUrl: "components/home/home.template.html",
  controller: [
    "$http",
    "$rootScope",
    "$location",
    function HomeAppController($http, $rootScope, $location) {
      console.log($rootScope);
      // $rootScope.$on('$locationChangeSuccess',(event,newUrl)=>{
      if (!$rootScope.token) {
        let token=localStorage.getItem('token')
        if(!token) $location.path(["/login"]);
        else{
          $rootScope.token=token
        }
      }
      // })
      let req = {
        url: "https://quizapi.io/api/v1/questions?limit=100",
        method: "GET",
        headers: {
          "X-Api-Key": "NFDygYwaiOTnxMjs7AD8YxXBRRAQ5otFnJVk7PDp",
        },
        data: {
          limit: "100",
        },
      };
      let mapTags = {};
      this.tags = Object.keys({
        Linux: "Linux",
        WordPress: "WordPress",
        MySQL: "MySQL",
        Kubernetes: "Kubernetes",
        PHP: "PHP",
        Docker: "Docker",
        Angular: "Angular",
        DevOps: "DevOps",
        HTML: "HTML",
        JavaScript: "JavaScript",
        BASH: "BASH",
        Laravel: "Laravel",
        Python: "Python",
      });
      $http(req)
        .then((data) => {
          console.log(data.data);
          data.data.forEach((d) => {
            mapTags[d.tags[0].name] = d.tags[0].name;
          });
        })
        .then(() => console.log(mapTags));
      this.homeMsg = "hello form come component";

      this.scrollLeft = function () {
        let list1 = document.getElementById("list1");
        list1.scrollBy({
          behavior: "smooth",
          left: -200,
        });
      };
      this.scrollRight = function () {
        let list1 = document.getElementById("list1");

        list1.scrollBy({
          behavior: "smooth",
          left: 200,
        });
      };
    },
  ],
});
