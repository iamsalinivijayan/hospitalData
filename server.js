const express = require("express");
// const bodyParser = require("body-parser")
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 3000

app.use(express.json())

app.use('/api/hospital', require("./routes/hospitalRoutes"));
// app.use(express.urlencoded());


app.listen(port, () =>{
    console.log(`Server running on port ${port}`);
});





