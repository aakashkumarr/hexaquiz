'use strict'

describe('homeApp',function(){
    beforeEach(module('homeApp'))

    describe('HomeAppController',function() {
        var $httpClient, ctrl;
         let req = {
        url: "https://quizapi.io/api/v1/questions?limit=100",
        method: "GET",
        headers: {
          "X-Api-Key": "NFDygYwaiOTnxMjs7AD8YxXBRRAQ5otFnJVk7PDp",
        },
        data: {
          limit: "100",
        },
      }
        beforeEach(inject(function($componentController,_$httpBackend_){
            $httpClient=_$httpBackend_
            $httpClient.expect(req).respond([])
            ctrl=$componentController('homeApp')
        
        }))
        it('should have tags property',function(){
            jasmine.addCustomEqualityTester(angular.equals)
            expect(ctrl.tags).toEqual(Object.keys({
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
              }))
              expect(ctrl.homeMsg).toEqual("hello form come component")
        })
    })
})