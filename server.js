require('dotenv').config()
const express = require("express");
const cors = require('cors')


const routes = require("./app/routes")
const app = express();



app.use(cors({
    origin: '*'
}))
app.use(express.json({ limit: '50mb' })); 
app.use(express.urlencoded({limit: '50mb'}));


app.use(routes);
app.listen(process.env.PORT, () => {
    console.log(`server is working on port ${process.env.PORT}`);
}); 

