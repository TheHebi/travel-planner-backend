const express = require('express');
const sequelize = require("./config/connection")
const compression = require('compression')
const cors = require('cors')

// Sets up the Express App
// =============================================================
const app = express();
app.use(compression())
const PORT = process.env.PORT || 3000;
const allRoutes = require('./controllers');


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// cors
app.use(cors())
// app.use(cors({ origin:["https://trips-refocused.herokuapp.com"]}))


app.use('/',allRoutes);

sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
    });
});