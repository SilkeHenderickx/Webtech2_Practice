'use strict'

angular.module('gradeApp', ['ngRoute'])

.config(function($routeProvider) {
        $routeProvider
            .when('/checkgrades', {
                templateUrl: 'assets/views/checkgrades.html',
                controller: 'checkGradesCtrl'
            })
            .when('/creategrades', {
            	templateUrl: 'assets/views/creategrades.html',
            	controller: 'createGradesCtrl'
            })
            .otherwise({
            	redirectTo: '/creategrades'
            });
            
    })
    .controller('createGradesCtrl', function($scope, createGradeSrv){
    	$("#addGradeButton").on('click', function(){
    		var name = $("#name").val();
    		var course = $("course").val();
    		var grade = $("#grade").val();
    		var url = '../../' + name;
    		
    		var doc = {};
    		
    		doc.name = name;
    		doc.course = course;
    		doc.grade = parseInt(grade);
    		doc.type = 'student';
    		
    		var json = JSON.stringify(doc);
    		console.log(json);
    		
    		createGradeSrv.putGrades(url, json).then(function(data){
    			console.log(data);
    		})
    	})
    })
    .service('createGradeSrv', function($http, $q){
    	//$q = promises implementatie
    	//$hhtp = ajax
    	
    	var q = $q.defer();
    	
    	this.putGrades = function(url, json){
    		
    		
    		$http.put(url, json)
    			.then(function(data){
    				q.resolve(data);
    			}, function error(err){
    				q.reject(err);
    				console.log(err);
    			});
    		return q.promise;
    	};
    })