nodePrototype-webService
========================
This is a demo of NodeJS and MongoDB applying some concepts of DDD, like hexagonal architecture.

The project is divided in two repositories, the web service (this repository) and the [business logic](https://github.com/AitorGuerrero/nodePrototype-src).
This repository have the business logic repository dependency through npm.

As it is a demo, it is not ready for production. It should have:
- Error control tests
- Functional tests
- Authentication and authorization
- Indexes created in the DB
- MongoDB sharding
- https

Also, the tests are only the acceptance tests.

Installation
------------
Requirements:
* [MongoDB](http://www.mongodb.org/)
* [NodeJS + npm](http://nodejs.org/)

Steps:
* Clone this repository
* At the root of the project, execute `npm install`
* Init MongoDB server `mongod`
* Init node application `node app.js`
* Application listens to "http://0.0.0.0:3000"
