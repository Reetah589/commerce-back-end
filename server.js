const express = require('express');
const routes = require('./routes');
// import Sequence from 'mysql2/typings/mysql/lib/protocol/sequences/Sequence';
// import sequelize connection
const sequelize = require('./config/connection')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});


//sequelize
    //.authenticate()
    //.then(() => {
      //console.log('Connection has been established successfully.');
    //})
    //.catch(err => {
      //console.error('Unable to connect to the database:', err);
    //});

