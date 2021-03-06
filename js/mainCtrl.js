var app = angular.module('chatroom');

app.controller('mainCtrl', function($scope, parseService, $interval){
  //In your controller you'll have a getParseData function and a postData function, but should be placed on $scope.

  //The getParseData function will call the getData method on the parseService object. You'll then save the result of that request to 
  //your controllers $scope as messages ($scope.messages)
$scope.getParseData = function() {
      parseService.getData().then(function(results) {
          $scope.messages = results.results;
      });
};
setInterval(function(){
    $scope.getParseData();
}, 1500)

  //The postData function will take whatever the user typed in (hint: look at the html and see what ng-model correlates to on the input box),
  //pass that text to the postData method on the parseService object which will then post it to the parse backend.
$scope.postData = function() {
    parseService.postData(message).then(function() {
        delete $scope.message;
    });
}



  //uncomment this code when your getParseData function is finished
  //This goes and gets new data every second, which mimicking a chat room experience.
//$interval is better to use on the interval function - do it by adding it to the app.controller function as: $interval and then replacing the "setInterval" with $interval

/*setInterval*/
$interval(function(){
     $scope.getParseData();
   }, 1500)
})



//.then in the controller - how does it relate
//hereItIs.data.results in the parseService.getData - how do we know it is located in .data.results....