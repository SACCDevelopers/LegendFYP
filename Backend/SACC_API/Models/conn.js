const mongoose=require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/Student_Assessment_Career_Counselling")
.then(()=>{
    console.log("Connection Established Successfully");
}).catch((e)=>{
    console.log(`Connection Not Established ${e}`);
});
