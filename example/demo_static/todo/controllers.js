	app.controller('MyController', function($scope, $http){
		
		$scope.showChecked = true;
		
		$http.get('todo/todo.json').success(function(response){
			
			$scope.tasks = response;
			
		}, function(err){
			alert('Error!');
		})
		
		$scope.username = 'Di';
			
		$scope.incompleteCount = function(){
			var count = 0;
			angular.forEach($scope.items, function(item){
				if(!item.done)
					count++;
			});
		
			return count;
		};
	});