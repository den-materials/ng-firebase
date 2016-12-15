# 🔥AngularFire🔥

<!--11:05 5 minutes -->
<!--Hook: Getting tired of saving your own data?  Mongoose got you down?  Not to worry.  If you love building front-end stuff, and want someone else to take care of saving your data, Firebase is a great solution! -->

## Learning Objectives

By the end of this lesson you will be able to:

* **Write** Javascript that communicates with a Firebase back-end
* **Integrate** AngularFire into an Angular app
* **Implement** 3-way data binding!
* **Implement** a tutorial written for general industry

## Firebase Intro

[Firebase](https://firebase.google.com/) is a Platform as a Service (PaaS) that provides a graphical 
interface to set up a JSON back end, both the database and the API. One way to think about Firebase is that it 
handles the MongoDB, Express, and Node parts of the stack. All you need to do is worry about the front end.

Firebase has two methods for accessing your data: as an array or as an object. 

You can access the data you create in your database using
standard REST resources. Basically you can think about Firebase as automatically creating a REST endpoint 
for every collection in a Mongo database.

Instead of sending HTTP requests and responses, Firebase lets you access your data through web sockets.
What are websockets? We'll talk more about websockets in a just a minute.

Finally, Firebase also automatically provides auth. If you are using Firebase you can easily create a way 
to use a social login for your app!

<!--11:10 5 minutes -->

### Websockets

Instead of HTTP (HyperText Transfer Protocol), which supports the familiar request/response cycle, Websockets maintain a connection between your browser and the server, allowing data to be passed bidirectionally. These connections are persistent (always on), full-duplex (bi-directional) and real time.

Picture HTTP as the *postal system*. You, abroad, send out some letters to a friend back home. The system delivers these letters through various paths and arrive safely. Your friend reads them and sends a letter back, getting your location from the outside of your envelope. In HTTP, the server can not send you a message unless you first send a request: that's the request/response cycle.

Websockets are more like a *phone call*. You have the ability to hold a conversation, talking at the same time. Once you have initiated a connection with the server, both of you can send messages, as needed.

<figure>
    <img src="https://camo.githubusercontent.com/c0e4e20b1756769aa20540351c69b1757d1c9cb1/687474703a2f2f7777772e7075626e75622e636f6d2f626c6f672f77702d636f6e74656e742f75706c6f6164732f323031342f30392f576562536f636b6574732d4469616772616d2e706e67">
    <figcaption>A client can send an HTTP request to the server which can reply with status 426, "Upgrade Required". At that point the client can then send a new request with the appropriate upgrade headers while keeping the connection open.</figcaption>
</figure>

<!--11:15 30-50 minutes -->

## Firebase Test

We will be using the [AngularFire](https://github.com/firebase/angularfire) library to access Firebase from 
Angular. Google owns Firebase and developed Angular, so they work nicely together.

To introduce ourselves to this technology, we'll be using the 
[AngularFire quick start guide](https://github.com/firebase/angularfire/blob/master/docs/quickstart.md).  This will help prepare us for the documentation you will have to read in Project 3 and throughout your careers.

Start by using the Quick Start Guide to set up a project and add the configuration to a basic angular app 
that includes an ``index.html`` and ``app.js`` file.

Before we start working, change the Firebase database access to public.

<details>
On the Firebase console, go to the database and use the following rules to make your database public. Note you'll get a warning on the Firebase console once you do this.  We're rebels, it's fine.

    ```
    {
      "rules": {
        ".read": "true",
        ".write": "true"
      }
    }
    ```
    
</details>

Setting up the config object can be a little difficult.  You can look at [this documentation](https://firebase.google.com/docs/web/setup) to make it a little easier.

The final step uses FB auth, but we don't have that set up yet.  Let's [enable anonymous authentication](https://firebase.google.com/docs/auth/web/anonymous-auth).

Now we can use `$firebaseObject` or `$firebaseArray` in a controller to help us manage working with firebase objects or collections in Angular.

### Self Challenges

If you are finished, have a look at the next steps in the [AngularFire guide](https://github.com/firebase/angularfire/blob/master/docs/guide/README.md).

<!-- 5 minutes -->

### Zeb's Firebase

If you want to see an example of this in action, Sensus is currently experimenting with Firebase to save its events.  Let's have a look.

### Conclusion 

If your data model is fairly simple Firebase can be a great solution. It lets you focus on the front end interactions 

Let's take a look at this demo [Chat Room App](https://firechat.firebaseapp.com/) to see how it can allow us to build real-time applications.

Finally, feel free to deploy an app to [Firebase Hosting](https://firebase.google.com/docs/hosting/)! 🔥

## Licensing
All content is licensed under a CC­BY­NC­SA 4.0 license.
All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
