# node-js-getting-started

A barebones Node.js app using [Express 4](http://expressjs.com/).

This application supports the [Getting Started with Node on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs) article - check it out.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku CLI](https://cli.heroku.com/) installed.

```sh
$ git clone git@github.com:heroku/node-js-getting-started.git # or clone your own fork
$ cd node-js-getting-started
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)

===========================================================================================================

OrganicBuy API Documentation

1. Create New Customer API
[Method : POST]
API Signature :
http://organicbuy.herokuapp.com/createCustomer

API Parametres :
Name [String]  [Mandatory]
Email [String] [Mandatory Either]
Phone [Number] [Mandatory Either]
Password [String] [Mandatory]
Address [String] [NON Mandatory]

Note : all the parameter will pass in http body using ajax request or form post.

Result/Return of the API :
1. Success
{
      status:true,
      message:'user registered sucessfully',
      data: results of newly registered user
}

2. Failure
{
     status:false,
     message:'there are some error with query',
     data : {error messages of sql database}
}


1. Authenticate Customer API
[Method : POST]
API Signature :
http://organicbuy.herokuapp.com/authenticateCustomer

API Parametres :
Email/Phone [String] [Mandatory Any]
Password [String] [Mandatory]



=====New API ====

1. Get All Categories API
[Method: GET]
API Signature:
http://organicbuy.herokuapp.com/getAllCategories

API Parameters:
No Parameter


2. Get Single Category API
[Method: GET]
API Signature:
http://organicbuy.herokuapp.com/getCategory/{Id}

API Parameters:
Id [integer value]

3. Get All Products API
[Method: GET]
API Signature:
http://organicbuy.herokuapp.com/getAllProducts

API Parameters:
CategoryId [integer value]


4. Get Products by Category | API
[Method: GET]
API Signature:
http://organicbuy.herokuapp.com/getCategoryProduct/{CategoryId}

API Parameters:
CategoryId [Integer Value]


5. Get Single Product API
[Method: GET]
API Signature:
http://organicbuy.herokuapp.com/getProduct/{Id}

API Parameters:
Id [Integer Value]


6. Get All Sub Category | API
[Method: GET]
API Signature:
http://organicbuy.herokuapp.com/getSubCategory/{CategoryId}

API Parameters:
CategoryId [Integer Value]
