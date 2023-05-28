const obj=require('../ModelSchemas');


//Counsellor Login/Verify

const Login = async (req, res) => {
  try {
    const counsellor = await obj.Counsellor.find({Email:req.body.Email,Password:req.body.Password});
   
    if(counsellor.length !=0 && counsellor[0].Status==true)
    {
      console.log(req.body);
      res.status(200).json({result:true});
  
    }
    else if(counsellor.length !=0 && counsellor[0].Status==false){
      res.status(200).json({result:false});
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};



//Getting All Counsellors
const GetAllCounsellors = async (req, res) => {
  try {
    const counsellors = await obj.Counsellor.find();
    res.status(200).json(counsellors);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


//Adding a new Counsellor

const AddCounsellor=async (req,res)=>{

  try{

    const counsellor=new obj.Counsellor(req.body);
    
    await counsellor.save();
    res.status(200).json({message:"Counsellor Added Successfully"});
  }

  catch (err) {
    res.status(400).json({ error: err.message });
  }
};



//View Counsellor Profile

const ViewProfile=async(req,res)=>{

  try{

    const counsellor = await obj.Counsellor.find({_id:req.body.id});
  
    if(counsellor.length === 0)
    {
      res.status(200).json({result:"Counsellor not exist"});
  
    }
    else{
      res.status(200).json({result:counsellor});
    }
  }

  catch(err){

    res.status(400).json({ error: err.message });
  }
}


//Reset Password

const ResetPassword=async(req,res)=>{

  try{


    
    const counsellor= await obj.Counsellor.findByIdAndUpdate({_id:(req.body.id)},{$set:{Password:req.body.Password}})
   
    if(counsellor===null)
    {
      res.status(200).json({result:"Counsellor not found"});
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


    const counsellor= await obj.Counsellor.findByIdAndUpdate({_id:req.body.id},{$set:req.body.counsellor})
 
    if(counsellor===null)
    {
      res.status(200).json({result:"Counsellor not exist"});
  
    }
    else{
      res.status(200).json({result:"Profile Update Successfully"});
    }
  }

  catch(err){

    res.status(400).json({ error: err.message });
  }
}



//Delete Counsellor

const DeleteCounsellor=async(req,res)=>{

  try{

    const counsellor=await obj.Counsellor.findByIdAndDelete({_id:req.body.id})
if(counsellor===null)
{
  res.status(200).json({result:"Counsellor not found"});

}
else
{
  res.status(200).json({result:"Counsellor Deleted Successfully"});
}
  }

  catch(err)
  {
    res.status(400).json({error:err.message})
  }
}


//View all Students of specific counsellor

const ViewStudents = async (req, res) => {
  try {
    const counsellor = await obj.Counsellor.find({_id:req.body.id}).populate('Students');
   
    if(counsellor.length === 0)
    {
      res.status(200).json({result:false});
  
    }
    else{
      res.status(200).json({result:counsellor});
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports={
    Login,
    GetAllCounsellors,
    AddCounsellor,
    ViewProfile,
    ResetPassword,
    UpdateProfile,
    DeleteCounsellor,
    ViewStudents
}