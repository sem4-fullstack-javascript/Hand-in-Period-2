[Back to Course Overview](https://sem4-fullstack-javascript.github.io/Fullstack-JavaScript/)

# Node.js/Express

![Full Stack JavaScript](https://www.altexsoft.com/media/2016/11/Full-Stack-JS.png)

## ![Green](green.png) Why would you consider a Scripting Language as JavaScript as your Backend Platform?



## ![Green](green.png) Explain Pros & Cons in using Node.js + Express to implement your Backend compared to a strategy using, for example, Java/JAX-RS/Tomcat

### Pros

#### Robust technology stack

Using Node.js for backend, you automatically get all the pros of full stack JavaScript development, such as:
- better efficiency and overall developer productivity
- code sharing and reuse
- speed and performance
- easy knowledge sharing within a team
- huge number of free tools

Consequently, your team is a lot more flexible, the development is less time-consuming and as a result you get fast and reliable software.

Despite a common belief, with full stack web development you are in no way limited to the traditional MEAN (MongoDB, Express.js, AngularJS, and Node.js) stack. The only must-have in this case is Node.js (there is no alternative in JavaScript for backend programming). The rest of the technologies within this stack are optional and may be replaced with some other tools providing similar functionality (read about the alternatives in our separate article).

#### Fast and event-based

When using a common language for both client- and server-side, synchronization happens fast, which is especially helpful for event-based, real-time applications. Thanks to its asynchronous, non-blocking, single-threaded nature, Node.js is a popular choice for online gaming, chats, video conferences, or any solution that requires constantly updated data.

Not only does app performance benefit from Node.js’ lightness, the team’s productivity will increase as well. Developers trained in frontend JavaScript can start programming the server side with the minimum learning curve. With the same language on both sides, you can reuse code on front-end and back-end by wrapping it into modules and creating a new level of abstraction.

#### Scalable technology for microservices

Since it’s a lightweight technology tool, using Node.js for microservices architecture is a great choice. This architectural style is best described by Martin Fowler and James Lewis as “an approach to developing a single application as a suite of small services, each running in its own process and communicating with lightweight mechanisms, often an HTTP resource API.”

Accordingly, breaking the application logic into smaller modules, microservices, instead of creating a single, large monolithic core, you enable better flexibility and lay the groundwork for further growth. As a result, it is much easier to add more microservices on top of the existing ones than to integrate additional features with the basic app functionality.

![Monolithic vs Microservices](https://www.altexsoft.com/media/2016/11/The-difference-between-the-monolithic-and-microservices-architecture-1.png)

With each microservice communicating with the database directly through streams, such architecture allows for better performance and speed of application.

#### Rich ecosystem

One word – npm, a default Node.js package manager, it also serves as a marketplace for open source JavaScript tools, which plays an important role in the advance of this technology. With about 350,000 tools available in the npm registry as of now, and over 10,000 new ones being published every week, the Node.js ecosystem is quite rich.

With such a vast variety of free tools accessible in a few clicks, there is a huge potential for the use of Node.js. At the same time, open source software enjoys a growing popularity as it allows you to build new solutions reducing the overall costs of development and time to market.

### Cons



## ![Yellow](yellow.png) Node.js uses a Single Threaded Non-blocking strategy to handle asynchronous task. Explain strategies to implement a Node.js based server architecture that still could take advantage of a multi-core Server

## ![Green](green.png) Explain briefly how to deploy a Node/Express application including how to solve the following deployment problems:

### ![Green](green.png) Ensure that you Node-process restarts after a (potential) exception that closed the application

### ![Green](green.png) Ensure that you Node-process restarts after a server (Ubuntu) restart

### ![Red](red.png) Ensure that you can take advantage of a multi-core system

### ![Green](green.png) Ensure that you can run “many” node-applications on a single droplet on the same port (80)

## ![Green](green.png) Explain the difference between “Debug outputs” and application logging. What’s wrong with console.log(..) statements in our backend-code

## ![Green](green.png)  Demonstrate a system using application logging and ![Yellow](yellow.png) “coloured” debug statements

## ![Green](green.png) Explain, using relevant examples, concepts related to testing a REST-API using Node/JavaScript + relevant packages

## ![Green](green.png) Explain, using relevant examples, the Express concept; middleware

## ![Red](red.png) Explain, using relevant examples, how to implement sessions and the legal implications of doing this

## ![Green](green.png) Compare the express strategy toward (server side) templating with the one you used with Java on second semester

## ![Green](green.png) Demonstrate a simple Server Side Rendering example using a technology of your own choice (pug, EJS, ..)

## ![Green](green.png) Explain, using relevant examples, your strategy for implementing a REST-API with Node/Express and show how you can "test" all the four CRUD operations programmatically using, for example, the Request package

## ![Green](green.png) Explain, using relevant examples, about testing JavaScript code, relevant packages (Mocha etc.) and how to test asynchronous code

## ![Red](red.png) Explain, using relevant examples, different ways to mock out databases, HTTP-request etc.

## ![Green](green.png) Explain, preferably using an example, how you have deployed your node/Express applications, and which of the Express Production best practices you have followed

# NoSQL, MongoDB and Mongoose

## ![Green](green.png) Explain, generally, what is meant by a NoSQL database

## ![Green](green.png) Explain Pros & Cons in using a NoSQL database like MongoDB as your data store, compared to a traditional Relational SQL Database like MySQL

## ![Green](green.png) Explain reasons to add a layer like Mongoose, on top on of a schema-less database like MongoDB

## ![Green](green.png) Explain about indexes in MongoDB, how to create them, and demonstrate how you have used them

## ![Green](green.png) Explain, using your own code examples, how you have used some of MongoDB's "special" indexes like TTL and 2dsphere

## ![Green](green.png) Demonstrate, using a REST-API you have designed, how to perform all CRUD operations on a MongoDB

## ![Green](green.png) Explain the benefits of using Mongoose, and demonstrate, using your own code, an example involving all CRUD operations

## ![Green](green.png) Explain the “6 Rules of Thumb: Your Guide Through the Rainbow” as to how and when you would use normalization vs. denormalization

## ![Green](green.png) Demonstrate, using your own code-samples, decisions you have made regarding → normalization vs denormalization

## ![Green](green.png) Explain, using a relevant example, a full JavaScript backend including relevant test cases to test the REST-API (not on the production database)
