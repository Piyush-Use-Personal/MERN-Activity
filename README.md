# MERN Activity

In this activity, I have created a Product, It's Category and It's Sizes CRUD Operations using MERN Stack

## Getting Started

To Getting Started with this project, One need to have NodeJS Install along with along with NPM Setup. One can also use NVM to achieve different version issues. 

### Prerequisites

To run this project, open two instances of vscode in a folder backend and frontend respectively. After opening the folders install all the dependencies from there using: 

```
npm install
```

### Installing

After installing packages, you need to setup mongoDB, either you can use local mongoDB or Cloud Cluster. Aim is to get the URI first

After getting the URI, paste the link over mentioned file as Dev env, You can follow same process for staging as well as Production

```
/backend/config/database.config.js
```

set the env as 

```
module.exports = {
    dev: "your-development-url",
    staging : 'your-staging-uri',
    prod : 'your-prod-uri'
}

```
one can modify the environment/port using the path reference:
```
/backend/config/env.config.js
```

set the env as 

```
module.exports = {
    current_env: 'dev',
    dev: {
      port: 8000,
    },
    staging: {
      port: 8000,
    },
    prod: {
      port: 8000,
    },
  };

```
After doing this,
Run the setup using any of the following commands
```
1. node server.js
2. npm run nodemon
```
If your project runs successfully, you will recieve this message
```
Server is listening on port 8000
Successfully connected to the database
```

To start your frontend server,
just run
```
npm start
```
and you are good to go.
Thank you!
## Authors

* **Piyush Dubey** - *Initial work* - [Piyush_Personal](https://gitlab.com/Piyush_Personal/)

See also the list of [contributors](https://gitlab.com/Piyush_Personal/mern-activity/-/graphs/master) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
