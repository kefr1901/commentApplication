const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routes = require('./routes/routes')
const cors = require("cors")

//server
const app = express()
const port = 4000;


dotenv.config()

//DB Connect

mongoose.connect(`mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_CLUSTER}/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`,
 () => console.log('Database connected'))

//Body parser
app.use(express.json());
app.use(cors());
app.use('/app', routes);
app.listen(port, () => {
  console.log(`Server is running on ${port}`)
})

