# Social Network API

### **This project was created as a  Social Network API using Node.js, Express.js, MongoDB and Insomnia.** 

### **This is a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.**

## **Local set up**

### Set up the application in your terminal

#### Configure your local environment

Create your .env file
```
cp .env.EXAMPLE .env
```

... then fill in your .env file with your Mongo Database URI

#### Install dependencies
```
npm install
```

#### Launch the application
```
npm run start
```

## **How to use the application**

* The user can enter the command to invoke the application, the server is started and the Mongoose models are synced to the MongoDB database.

* Using Insomnia routes for users and thoughts allows the data for each of these routes to be displayed in a formatted JSON, also the user can test API POST, PUT, and DELETE routes in Insomnia.

* The user can create, update, and delete users and thoughts in the database

* Using API POST and DELETE routes in Insomnia the user is able to successfully create and delete reactions to thoughts, also add and remove friends to a user’s friend list.


### **Preview**

💡 Walkthrough video: [Click here!](https://drive.google.com/file/d/1fIGpdkrkE7FmV6c5mGEUmXM2CkSboRLZ/view?usp=sharing)
