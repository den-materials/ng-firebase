// Initialize the Firebase SDK
var config = {
  apiKey: 'keyHere',
  authDomain: 'something.firebaseapp.com',
  databaseURL: 'https://something.firebaseio.com/',
  storageBucket: 'gs://something.appspot.com'
};

firebase.initializeApp(config);

var app = angular.module("sampleApp", ["firebase"]);

app.controller("SampleCtrl", function($scope, $firebaseObject) {
  var ref = firebase.database().ref().child("data");
  // download the data into a local object
  var syncObject = $firebaseObject(ref);
  // synchronize the object with a three-way data binding
  syncObject.$bindTo($scope, "data");
});

app.controller("SampleArrayCtrl", function($scope, $firebaseArray) {
  var ref = firebase.database().ref().child("messages");
  // create a synchronized array
  $scope.messages = $firebaseArray(ref);
  $scope.addMessage = function() {
    $scope.messages.$add({
      text: $scope.newMessageText
    });
  };  
});

app.controller("SampleAuthCtrl", function($scope, $firebaseAuth) {
  var auth = $firebaseAuth();

	auth.$signInAnonymously().catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  // ...
	});

	auth.$onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    console.log("signed in with id: " + uid);
    // ...
  } else {
  	console.log("signed out!");
    // User is signed out.
    // ...
  }
  // ...
});

});