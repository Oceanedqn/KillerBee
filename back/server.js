const express = require('express');
require('dotenv').config();
const app = express();
require("./models/db");
var cors = require('cors')

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
const homeR = require("./routes/home.routes");
app.use("/", homeR);

const collectionsR = require("./routes/collections.routes");
app.use('/api/collections', collectionsR);

const ingredientsR = require("./routes/ingredients.routes");
app.use('/api/ingredients', ingredientsR);

const modelsR = require("./routes/models.routes");
app.use('/api/models', modelsR);

const processR = require("./routes/process.routes");
app.use('/api/process', processR);

const stepsR = require("./routes/steps.routes");
app.use("/api/steps", stepsR);

const connectR = require("./routes/connect.routes");
app.use("/api/connect", connectR);


// Server
app.listen(process.env.PORT, () => console.log(`Server : Started ${process.env.PORT}`));