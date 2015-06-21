app.filter('filteredItems', function(){
	return function(items, showChecked){

		var filteredItems = [];
		angular.forEach(items, function(item){
			if(!item.done || showChecked){
				filteredItems.push(item);
			}
		});
	
		return filteredItems;
	}
});