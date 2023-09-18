angular.module("quizComp").component("quizComp", {
  templateUrl: "components/quiz/quiz.template.html",
  controller: [
    "$routeParams",
    "$http",
    function QuizController($routeParams, $http) {
      this.currentIndex = 0;
      this.quizState = [];
      this.userAnswers = {};
      this.correctAnswers={}
      this.showScore=false
      this.isLoading=false
      this.isSubmit=false
      this.next = function () {
       
        this.quizState.splice(this.currentIndex, 1, this.userAnswers);

        console.log("quizState", this.quizState);
        if (this.list.length - 1 == this.currentIndex) return;
        this.currentIndex++;
        this.correctAnswers={...this.list[this.currentIndex].correct_answers}
        this.userAnswers = { ...this.quizState[this.currentIndex] };
        this.currentQ = this.list[this.currentIndex];
      };
      this.prev = function () {
    
        this.quizState.splice(this.currentIndex, 1, this.userAnswers);
        console.log("quizState", this.quizState);
        if (this.currentIndex == 0) return;
        this.currentIndex--;
        this.correctAnswers={...this.list[this.currentIndex].correct_answers} 
        this.userAnswers = { ...this.quizState[this.currentIndex] };
        this.currentQ = this.list[this.currentIndex];
      };
      this.changeQuestion = function () {
        this.currentQ = this.list[this.currentIndex];
      };

      //submit

      this.submit = function () {
        // let c = confirm('Are you sure?')
        // if(!c) return 
        this.correctAnswers={...this.list[this.currentIndex].correct_answers}
        this.isSubmit=true
        this.quizState.splice(this.currentIndex, 1, this.userAnswers);
        let score = 0;
        
        for (let i = 0; i < this.quizState.length; i++) {
          let correct = null;
          // console.log(i);
          for (const key in this.quizState[i]) {
            if (!this.quizState[i][key] ) continue;
            console.log(key);
            if (this.list[i].correct_answers[key + "_correct"] == "true") {
              correct = true;
              console.log("correct_test");
            } else {
              correct = false;
            }
          }
          if (correct) score++;
        }
        console.log(score);
        this.score=score;
        this.showScore=true
      };
      //request object and method
      let req = {
        url: `https://quizapi.io/api/v1/questions?limit=10&tags=${$routeParams.name}`,
        method: "GET",
        headers: {
          "X-Api-Key": "NFDygYwaiOTnxMjs7AD8YxXBRRAQ5otFnJVk7PDp",
        },
      };
      this.isLoading=true
      $http(req)
        .then((res) => {
          console.log(res.data);
          this.list = res.data;
          this.isLoading=false
        })
        .then(() => (this.currentQ = this.list[0]));
      this.name = $routeParams.name;

      this.handleChange = function ($event, id) {
        if(this.isSubmit) return;
        this.userAnswers[id]=!this.userAnswers[id]
        console.log($event, id);
        console.log(this.userAnswers);
      };
    },
  ],
});
