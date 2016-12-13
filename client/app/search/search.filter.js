'use strict';
const angular = require('angular');

/*@ngInject*/
export function searchFilter() {
  return function(input, scope) {

    var result = [];
    if(scope.searchText != null) { 
        var searchText = scope.searchText.toLowerCase();
        for(var i = 0; i < input.length; i++) { 
            var item = input[i];
            var title = item.title; 
            title = title.toLowerCase();

            if(scope.isSold) {
                if(title.includes(searchText)) {
                    result.push(item);
                }
            }   else { 
                if(title.includes(searchText) && !item.isSold) {
                    result.push(item);
                }
            }
        }
        scope.number = result.length;
    }
    return result;    
  };
}



export default angular.module('projectApp.search', [])
  .filter('search', searchFilter)
  .name;
