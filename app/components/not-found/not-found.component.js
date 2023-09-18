angular.module('notFound').component('notFound',{
    templateUrl:'components/not-found/not-found.template.html',
    controller:['$routeParams',function NotFoundController(){
        
    }],
    bindings:{
        errMsg:'<'
    }
})