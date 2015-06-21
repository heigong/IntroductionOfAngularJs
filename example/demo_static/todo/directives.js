	app.directive('myBadge', function(){
		return {
			restrict: 'E',
			scope: {
				count: '=',
			},
			template: '<span class="label"  ng-hide="count == 0" ng-class="warningLevelClass()">{{count}}</span>',
			link: function(scope, element, attr){
				scope.warningLevelClass = function(){
					if(scope.count > 2)
						return "label-warning";
			
					return "label-success";
				}
			}
		};
	});
	
	app.directive('toDoList', function(){
		return {
			scope: {
				tasks: '='
			},
			templateUrl: 'todo/todolist.html',
			link: function(scope, element, attr){
				scope.addNewAction = function(){
					scope.tasks.push({action:scope.newAction, done:false});
			
					scope.newAction = '';
				}
			}
		}
	})