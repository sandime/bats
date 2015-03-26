/**
 * Created by SHERRI on 3/25/15.
 */
/*
function FirstCtrl($scope) {

}

function SecondCtrl($scope) {

}*/
// the above no longer works with angular. thanks thinkster. https://thinkster.io/egghead/the-dot



var app = angular.module('myApp',[]);

app.controller('FirstCtrl', ['$scope', function($scope) {


}]);
app.controller('SecondCtrl', ['$scope', function($scope) {

}]);
