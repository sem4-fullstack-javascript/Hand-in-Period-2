[Back to Course Overview](https://sem4-fullstack-javascript.github.io/Fullstack-JavaScript/)

# Node.js/Express

![Full Stack JavaScript](https://www.altexsoft.com/media/2016/11/Full-Stack-JS.png)

## ![Green](green.png) Why would you consider a Scripting Language as JavaScript as your Backend Platform?

Using Node.js as your server technology gives your team a great boost that comes from using the same language on both the front end and the back end. This, means that your team is more efficient and cross-functional, which, in turn, leads to lower development costs. In addition to that, it’s worth mentioning that JavaScript is the most popular programming language, so your application’s codebase will be easier to understand for more engineers. You can also reuse and share the code between the frontend and the backend parts of your application, which speeds up the development process. On top of that, the Node.js community is constantly growing – the number of StackOverflow questions is steadily increasing, so the knowledge base for the technology is widely available. The fact that the whole Node.js technology stack is open-source and free is also great news. Finally, Node offers a great package manager, npm, and the amount of available open-source tools in npm’s registry is massive and growing fast.

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

#### Performance bottlenecks and design issues

Two of the most argued about aspects of Node.js programming are its insufficiency with heavy computations and the so-called “callback hell”. Before we get into too many details, let’s figure out what’s what.

As we know, JavaScript (and, as a result, Node.js) is asynchronous by nature and has a non-blocking I/O (input/output) model. This means, it can process several simple tasks (for example, read/write database queries) queued in the background without blocking the main thread and do so quickly.

At the same time, Node.js is a single-threaded environment, which is often considered a serious drawback of the technology. Indeed, in some cases, a CPU-bound task (number crunching, various calculations) can block the event loop resulting in seconds of delay for all Node.js website users.

This represents a serious issue. That is why, to avoid it, it is recommended not to use Node.js with computation-heavy systems.

Due to its asynchronous nature, Node.js relies heavily on callbacks, the functions that run after each task in the queue is finished. Keeping a number of queued tasks in the background, each with its callback, might result in the so-called callback hell, which directly impacts the quality of code. Simply put, it’s a “situation where callbacks are nested within other callbacks several levels deep, potentially making it difficult to understand and maintain the code.”

Yet, this is often considered a sign of poor coding standards and lack of experience with JavaScript and Node.js in particular.

#### Immaturity of tooling

Although, the core Node.js modules are quite stable and can be considered mature, there are many tools in the npm registry which are either of poor quality or not properly documented/tested. Moreover, the registry itself isn’t structured well enough to offer the tools based on their rating or quality. Hence it might be difficult to find the best solution for your purposes without knowing what to look for.

The fact that the Node.js ecosystem is mostly open source, has its impact as well. While the quality of the core Node.js technology is supervised by Joyent and other major contributors, the rest of the tools might lack the quality and high coding standards set by global organizations.

### Conclusion

Obviously, with all the listed Node.js advantages and disadvantages, the technology is no silver bullet. But neither is Java, .Net framework or PHP. Yet, there are specific cases where each one of the technologies perform best. For Node.js, these are real-time applications with intense I/O, requiring speed and scalability.

This might be social networks, gaming apps, live chats or forums as well as stock exchange software or ad servers, where speed is everything. Fast and scalable, Node.js is the technology of choice for data-intensive, real-time IoT devices and applications.

Due to its non-blocking architecture, Node.js works well for encoding and broadcasting video and audio, uploading multiple files, and data streaming.

Recently, Node.js has been actively used in enterprise-level software. While there is still much argument about this, many large companies and global organizations, such as NASA, have already adopted Node.js. And the enterprise Node.js ecosystem continues to mature.

Yet, you can’t choose a language or tool just because another super-successful company did. It makes no sense to look at the others when your product and your business is at stake. You need to get your priorities straight and clearly identify the benefits the technology will give you, without forgetting about the hidden drawbacks.

## ![Yellow](yellow.png) Node.js uses a Single Threaded Non-blocking strategy to handle asynchronous task. Explain strategies to implement a Node.js based server architecture that still could take advantage of a multi-core Server

Node JS follows Single Threaded with Event Loop Model. Node JS Processing model mainly based on Javascript Event based model with Javascript callback mechanism.

As Node JS follows this architecture, it can handle more and more concurrent client requests very easily.

The main heart of Node JS Processing model is “Event Loop”. If we understand this, then it is very easy to understand the Node JS Internals.

### Single Threaded Event Loop Model Processing Steps

- Clients Send request to Web Server.
- Node JS Web Server internally maintains a Limited Thread pool to provide services to the Client Requests.
- Node JS Web Server receives those requests and places them into a Queue. It is known as “Event Queue”.
- Node JS Web Server internally has a Component, known as “Event Loop”. Why it got this name is that it uses indefinite loop to receive requests and process them.
- Event Loop uses Single Thread only. It is main heart of Node JS Platform Processing Model.
- Even Loop checks any Client Request is placed in Event Queue. If no, then wait for incoming requests for indefinitely.
- If yes, then pick up one Client Request from Event Queue
    - Starts process that Client Request
    - If that Client Request Does Not requires any Blocking IO
    - Operations, then process everything, prepare response and send it back to client.
    - If that Client Request requires some Blocking IO Operations like interacting with Database, File System, External Services then it will follow different approach
        - Checks Threads availability from Internal Thread Pool
        - Picks up one Thread and assign this Client Request to that thread.
        - That Thread is responsible for taking that request, process it, perform Blocking IO operations, prepare response and send it back to the Event Loop
        - Event Loop in turn, sends that Response to the respective Client.

![Node JS Architecture – Single Threaded Event Loop](https://cdn.journaldev.com/wp-content/uploads/2015/04/NodeJS-Single-Thread-Event-Model-768x576.png)

## ![Green](green.png) Explain briefly how to deploy a Node/Express application including how to solve the following deployment problems:

[Deploying Node.js app on digital ocean](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-16-04)

### ![Green](green.png) Ensure that you Node-process restarts after a (potential) exception that closed the application

If you start your server with [`forever`](https://github.com/nodejitsu/forever), you can use:
```js
process.on('uncaughtException', function (err) {
console.log(err); //Send some notification about the error
process.exit(1); });
```
and the `forever` will automatically restart the server
```
Express server listening on port 3000
error: Forever detected script exited with code: 1
error: Forever restarting script for 2 time
Express server listening on port 3000
```

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
