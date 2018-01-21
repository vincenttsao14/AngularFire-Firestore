// firebase.initializeApp({
//   apiKey: "AIzaSyA-DLxL7vmdlMqh_a2t9aHQhidnfNu0O08",
//   authDomain: "blinding-fire-7640.firebaseapp.com",
//   projectId: "blinding-fire-7640"
// });

var config = {
  apiKey: "AIzaSyA-DLxL7vmdlMqh_a2t9aHQhidnfNu0O08",
  authDomain: "blinding-fire-7640.firebaseapp.com",
  databaseURL: "https://blinding-fire-7640.firebaseio.com",
  storageBucket: "blinding-fire-7640.appspot.com",
  messagingSenderId: "1028917595562",
  projectId: "blinding-fire-7640"  
};
firebase.initializeApp(config);

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();


var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {

db.collection("Databases/Test_Database/Classes").onSnapshot(querySnapshot => {
    querySnapshot.forEach((doc) => {
    	var id = doc.id;
    	// var test= 
        $scope.userClasses.id = doc.data();
        console.log(doc.id, doc.data());
        console.log($scope.userClasses)
        $scope.$apply();
    });
});

});

// (function(){
  // angular.module('floop').controller("floopCtrl", ["$scope", "$firebaseArray", "$firebaseObject", "userdata", "$location", "notifications","studentdata", "$timeout", "$route",
  //   function($scope, $firebaseArray, $firebaseObject, userdata, $location, notifications, studentdata, $timeout, $route) {

  // }])
// })