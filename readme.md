#🔥AngularFire🔥

##Learning Objectives

By the end of this lesson you will be able to:

* Write Javascript that communicates with a Firebase back-end
* Integrate AngularFire into an Angular app
* Deploy your app to Firebase Hosting
* Implement 3-way data binding!
* Implement a tutorial written for general industry

##Firebase Intro

[Firebase](https://firebase.google.com/) is a Platform as a Service (PaaS) that provides a graphical 
interface to set up a JSON back end, both the database and api. One way to think about Firebase is that it 
handles the MongoDB, Express, and Node parts of the stack. All you need to do is worry about the front end.

Firebase has two methods for accessing your data. You can access the data you create in your database using
standard REST resources. Basically you can think about Firebase as automatically creating a REST endpoint 
for every collection in a Mongo database.

Another way to access your data is through web sockets. What are websockets? We'll talk more about 
websockets in a just a minute.

Finally, firebase also automatically provides auth!. If you are using Firebase you can easily create a way 
to use a social login or collect email and passwords for your app.

###Websockets

Instead of HTTP (HyperText Transfer Protocol), which supports the familiar request/response cycle, Websockets maintain a connection between your browser and the server, allowing data to be passed bidirectionally. These connections are persistent (always on), full-duplex (bi-directional) and real time.

Picture HTTP as the our *postal system*, you, abroad, send out some letters to a friend back home. The system delivers these letters through various paths and arrive safely. Your friend reads them and sends a letter back, knowing your location. In http, the server can not send you a message unless you first send a request: the request/response cycle.

Websockets are more like a *phone call*. You have the ability to hold a conversation, talking at the same time. Once you have initiated a connection with the server, both an you can send messages, as needed.

<figure>
    <img src="https://camo.githubusercontent.com/c0e4e20b1756769aa20540351c69b1757d1c9cb1/687474703a2f2f7777772e7075626e75622e636f6d2f626c6f672f77702d636f6e74656e742f75706c6f6164732f323031342f30392f576562536f636b6574732d4469616772616d2e706e67">
    <figcaption>A client can send an HTTP request to the server which can reply with status 426, "Upgrade Required". At that point the client can then send a new request with the appropriate upgrade headers while keeping the connection open.</figcaption>
</figure>

##Rapid Prototype: ToEat.ly

We will be using the [AngularFire](https://github.com/firebase/angularfire) library to access Firebase from 
Angular. Google owns Firebase and developed Angular, so they work nicely together.

For more details around exactly how to build this protype we'll be pinging back and forth between the 
[AngularFire quick start guide](https://github.com/firebase/angularfire/blob/master/docs/quickstart.md) and 
a more requirements driven description.

Start by using the Quick Start Guide to set up a project and add the configuration to a basic angular app 
that includes an ``index.html`` and ``app.js`` file.

Before we start working, change the Firebase database access to public. 

<details>
On the Firebase console, go to the database and use the public rules example to make your database public. Note you'll get a warning on the Firebase console once you do this.
</details>

Once we've created a basic app, we'll need to inject `firebase` as a dependency into our Angular application.

```js
  angular.module("ToEatly", ["firebase"]);
```

Now we have the option of also using `$firebaseObject` or `$firebaseArray` into a controller to help us manage working with firebase objects or collections in angular. Since we're working with a collection of foods let's use a [`$firebaseArray`](https://github.com/firebase/angularfire/blob/master/docs/guide/synchronized-arrays.md) to store them.

```js
//...
angular.module('ToEatly')
.controller("FoodController", foodController);
  
foodController.$inject = ["$scope", "$firebaseArray"];
function foodController($scope, $firebaseArray) {
  // change to your application URL
  var ref = firebase.database().ref().child("foods");
  // create a synchronized array to store a collection
  $scope.foods = $firebaseArray(ref);
}
```

<details>
<summary>How can we use a form to build up a `food` model with the attributes `name` and `yumminess` so that when it is submitted it triggers a function, `addFood`?</summary>

```html
<form ng-submit="addFood()">
    <input placeholder="name" ng-model="food.name">
    <input yumminess="yumminess" ng-model="food.yumminess">
    <button type="submit">Eat me!</button>
</form>
```
</details>

<details>
<summary>How can we send our food model to the backend when the form is submitted? Hint: your `$firebaseArray` has a `.$add` method on it.</summary>

```js
  $scope.addFood = function() {
    $scope.foods.$add({
      name: $scope.food.name,
      yumminess: $scope.food.yumminess
    });
  };
```
</details>

<details>
<summary>How can we repeat all the foods on the page, so we see an index of them?</summary>

```html
<div class="food" ng-repeat="food in foods">
    <b>Name:</b> {{food.name}} | <b>Yumminess:</b> {{food.yumminess}}
</div>
```
</details>

<details>
<summary>How can we modify the `addFood` function so that the form is cleared after it is submitted?</summary>

```js
  $scope.addFood = function() {
    $scope.foods.$add({
      name: $scope.food.name,
      yumminess: $scope.food.yumminess
    });
    // clears form
    $scope.food = {};
  };
```
</details>

###Self Challenges

Figure out the following user stories on your own. User can...

* Delete a food
* Edit a food

### Conclusion 

If your data model is fairly simple Firebase can be a great solution. It lets you focus on the front end interactions 

Let's take a look at this demo [Chat Room App](https://firechat.firebaseapp.com/) to see how it can allow us to build real-time applications.

Finally, feel free to deploy an app to [Firebase Hosting](https://firebase.google.com/docs/hosting/)! 🔥


## Licensing
All content is licensed under a CC­BY­NC­SA 4.0 license.
All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.