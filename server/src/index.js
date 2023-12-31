const express = require('express');
const app = express();
const cors = require('cors');
const authRoutes = require('./routers/Auth.js')
const {  environmentVariables } = require("./config");


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




app.use('/auth', authRoutes)

app.get('/', (req, res) => {
    res.send({message: "medical pager"})
})


  app.listen(environmentVariables.APP_PORT || 8000, (err) => {
    try {
      console.info(
        `Server running on ${environmentVariables.APP_HOST}:${environmentVariables.APP_PORT}`
      );
    } catch (error) {
      console.log(error);
    }
  });
