const express=require('express');
const app=express();
const bodyParser = require('body-parser');

require('./Models/conn.js');

require('./Models/ModelSchemas.js')

const student=require("./Controllers/StudentController.js");
const counsellor=require("./Controllers/CounsellorController.js");

const port=process.env.port||8000;

//getting form request body data
app.use(express.json());

// parse incoming JSON data
app.use(bodyParser.json());


app.get('/',(req,res)=>
{
    res.send('Hello world');
})

app.use('/api/Student',student);
app.use('/api/Counsellor',counsellor);

app.listen(port,()=>{
    console.log(`app listen at port no ${port}`);
})

