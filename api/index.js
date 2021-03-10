const express = require('express');
//swagger ui (documentation)
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const config = require('../config.js')
//import router
const user = require('./components/user/network');

//config express
const app = express();

//config
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//router
app.use('/api/user', user);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.listen(config.api.port, () => {
  console.log(`Listen PORT ${config.api.port}`)
})