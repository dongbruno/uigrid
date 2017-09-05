var app = angular.module('app', ['ui.grid','isteven-multi-select']);

app.controller('MainCtrl', ['$scope', '$log', '$http', function ($scope, $log, $http) {
	$scope.modernBrowsers = function(){
		return [
	        { 
	            name: 'Draw',              
	            ticked: true    
	        },
	        { 
	            name: 'Draw_Closing',  
	            ticked: false   
	        },
	        { 
	            name: 'Draw_Conversion',            
	            ticked: true    
	        }
	    ];} 

    $scope.fOpen = function() {
        console.log( 'On-open' );
    }

    $scope.fClose = function() {
        console.log( 'On-close' );
    }    

    $scope.fClick = function(data) {           
        alert(data);
    }    

    $scope.fSelectAll = function() {
        console.log( 'On-select-all' );
    }

    $scope.fSelectNone = function() {
        console.log( 'On-select-none' );
    }

    $scope.fReset = function() {
        console.log( 'On-reset' );
    }        

    $scope.fClear = function() {
        console.log( 'On-clear' );
    }

    $scope.fFilterChange = function( data ) {
        console.log( 'On-filter-change' );
        console.log( 'On-filter-change - keyword: ' + data.keyword );
        console.log( 'On-filter-change - result: ' );
        console.log( data.result );
    }

 $scope.someProp = 'abc',
 $scope.showMe = function(row){
                   alert(row);
                };

 $scope.gridOptions = {};
 $scope.outputBrowsers = function(row){
	 console.log(row.entity.drawCheckListType[0].name);
 }
 //you can override the default assignment if you wish
 //$scope.gridOptions.appScopeProvider = someOtherReference;

   $scope.gridOptions.columnDefs = [
         { name: 'name' },
         { name: 'gender'},
         { name: 'ShowScope',
             cellTemplate:'<button class="btn primary" ng-click="grid.appScope.showMe(row)">Click Me</button>' },
         { name: 'multiselect',
             cellTemplate:'<div isteven-multi-select input-model="row.entity.drawCheckListType" output-model="grid.appScope.outputBrowsers" button-label="name" item-label="name" tick-property="ticked" helper-elements=""></div>' }
       
         ];
$scope.gridOptions.data = [
	    {
	        "name": "Ethel Price",
	        "gender": "female",
	        "drawCheckListType": [{ 
	            name: 'Draw',              
	            ticked: true    
	        },
	        { 
	            name: 'Draw_Closing',  
	            ticked: false   
	        },
	        { 
	            name: 'Draw_Conversion',            
	            ticked: false    
	        }]
	    },
	    {
	        "name": "Claudine Neal",
	        "gender": "female",
	        "drawCheckListType": [{ 
	            name: 'Draw',              
	            ticked: true    
	        },
	        { 
	            name: 'Draw_Closing',  
	            ticked: true   
	        },
	        { 
	            name: 'Draw_Conversion',            
	            ticked: false    
	        }]
	    },
	    {
	        "name": "Beryl Rice",
	        "gender": "female",
	        "drawCheckListType": [{ 
	            name: 'Draw',              
	            ticked: true    
	        },
	        { 
	            name: 'Draw_Closing',  
	            ticked: true   
	        },
	        { 
	            name: 'Draw_Conversion',            
	            ticked: true    
	        }]
	    }
];
$scope.showData = function(){
	var newData = $scope.gridOptions.data;
}

/*$http.get('https://cdn.rawgit.com/angular-ui/ui-grid.info/gh-pages/data/100.json')
  .success(function(data) {
    $scope.gridOptions.data = data;
  });*/

}]);
