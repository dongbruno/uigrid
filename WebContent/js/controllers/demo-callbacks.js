myApp.controller( 'demoCallbacks' , [ '$scope' , function ($scope) {               

    $scope.modernBrowsers = [
        { 
            icon: '<img src="https://cdn1.iconfinder.com/data/icons/fatcow/32/opera.png" />',                         
            name: 'Opera',              
            maker: 'Opera Software',        
            ticked: true    
        },
        { 
            icon: '<img  src="https://cdn1.iconfinder.com/data/icons/fatcow/32/internet_explorer.png" />',             
            name: 'Internet Explorer',  
            maker: 'Microsoft',
            ticked: false   
        },
        { 
            icon: '<img  src="https://cdn1.iconfinder.com/data/icons/humano2/32x32/apps/firefox-icon.png" />',         
            name: 'Firefox',            
            maker: 'Mozilla Foundation',    
            ticked: true    
        },
        { 
            icon: '<img  src="https://cdn1.iconfinder.com/data/icons/fatcow/32x32/safari_browser.png" />',             
            name: 'Safari',             
            maker: 'Apple',                 
            ticked: false   
        },
        { 
            icon: '<img  src="https://cdn1.iconfinder.com/data/icons/google_jfk_icons_by_carlosjj/32/chrome.png" />',  
            name: 'Chrome',             
            maker: 'Google',                
            ticked: true    
        }    
    ];

    $scope.fOpen = function() {
        console.log( 'On-open' );
    }

    $scope.fClose = function() {
        console.log( 'On-close' );
    }    

    $scope.fClick = function( data ) {           
        console.log( 'On-item-click' );        
        console.log( 'On-item-click - data:' );        
        console.log( data );
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
    $scope.showMe = function(){
                      alert($scope.someProp);
                   };

    $scope.gridOptions = {};

    //you can override the default assignment if you wish
    //$scope.gridOptions.appScopeProvider = someOtherReference;

      $scope.gridOptions.columnDefs = [
            { name: 'name' },
            { name: 'gender'},
            { name: 'company'},
            { name: 'ShowScope',
                cellTemplate:'<button class="btn primary" ng-click="grid.appScope.showMe()">Click Me</button>' },
            { name: 'multiselect',
                cellTemplate:' <div isteven-multi-select input-model="modernBrowsers" output-model="outputBrowsers" button-label="name" item-label="name" tick-property="ticked" helper-elements="" on-open="fOpen()" on-close="fClose()" on-item-click="fClick( data )" on-select-all="fSelectAll()" on-select-none="fSelectNone()" on-reset="fReset()" on-clear="fClear()" on-search-change="fSearchChange( data )"></div>' }
          ];
    
      
      
   $scope.gridOptions.data = [
   	    {
   	        "name": "Ethel Price",
   	        "gender": "female",
   	        "company": "Enersol"
   	    },
   	    {
   	        "name": "Claudine Neal",
   	        "gender": "female",
   	        "company": "Sealoud"
   	    },
   	    {
   	        "name": "Beryl Rice",
   	        "gender": "female",
   	        "company": "Velity"
   	    }
   ];
    
}]);
