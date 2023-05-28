
const obj=require('../ModelSchemas');
const mongoose = require('mongoose');

//Student Login 

const Login = async (req, res) => {
  try {
    const student = await obj.Student.find({Email:req.body.Email,Password:req.body.Password});
    if(student.length !=0 && student[0].Status==true)
    {
      res.status(200).json({result:true});
  
    }
    else if(student.length !=0 && student[0].Status==false)
    {
      res.status(200).json({result:false});
  
    }

   
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};



//Getting All Students
const GetAllStudents = async (req, res) => {
  try {
    const students = await obj.Student.find();
    res.status(200).json(students);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


//Adding a new student
const AddStudent = async (req, res) => {
  try {
  console.log(req.body);
    const student = new obj.Student(req.body);
    
    await student.save();
    res.status(200).json({message:"Student Added Successfully"});
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};



//View Profile

const ViewProfile=async(req,res)=>{

  try{

    const student = await obj.Student.find({_id:req.body.id});
    console.log(student);
    if(student.length === 0)
    {
      res.status(200).json({result:"Student not exist"});
  
    }
    else{
      res.status(200).json({result:student});
    }
  }

  catch(err){

    res.status(400).json({ error: err.message });
  }
}



//Reset Password

const ResetPassword=async(req,res)=>{

  try{


    
    const student= await obj.Student.findByIdAndUpdate({_id:(req.body.id)},{$set:{Password:req.body.Password}})
    console.log(student);
    if(student===null)
    {
      res.status(200).json({result:"Student not found"});
    }
    else{
      res.status(200).json({result:"Password Reset Successfully"});
    }
  
  
  }


  catch(err){

    res.status(400).json({ error: err.message });
  }
}


//Update Profile

const UpdateProfile=async(req,res)=>{

  try{


    const student= await obj.Student.findByIdAndUpdate({_id:req.body.id},{$set:req.body.student})
 
    if(student===null)
    {
      res.status(200).json({result:"Student not exist"});
  
    }
    else{
      res.status(200).json({result:"Profile Update Successfully"});
    }
  }

  catch(err){

    res.status(400).json({ error: err.message });
  }
}



//Delete Student

const DeleteStudent=async(req,res)=>{

  try{

    const student=await obj.Student.findByIdAndDelete({_id:req.body.id})
if(student===null)
{
  res.status(200).json({result:"Student not found"});

}
else
{
  res.status(200).json({result:"Student Deleted Successfully"});
}
  }

  catch(err)
  {
    res.status(400).json({error:err.message})
  }
}


module.exports={
    GetAllStudents
    ,AddStudent,
    Login,
    ViewProfile,
    ResetPassword,
    UpdateProfile,
    DeleteStudent
}