angular.module('quizComp').filter('scorePrct',function(){
    return function(x){
        return x+'%'
    }
})