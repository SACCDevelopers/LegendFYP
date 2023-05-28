const mongoose=require('mongoose');

//Defining Schema for Student
const StudentSchema=new mongoose.Schema(
    {
       
    FirstName:{
        type:String
        ,
      
            },
        
            LastName:{
                type:String,
               
            },
        
            Email:{
                type:String,
              
            },
        
            PhoneNo:{
                type:String,
              
            },
        
            Password:{
                type:String,
              
            },
        
           
        
            
            Gender:{
                type:String,
               
            },
        
             Status:{
            type:Boolean,
            default:true
    
            },
        
        
            ObtainedMatricMarks:{
                type:Number
            },
        TotalMatricMarks:
        {
            type:Number
        },
        
        ObtainedInterMarks:{
            type:Number
        },
        TotalInterMarks:
        {
        type:Number
        },
        
        FatherIncome:
        {
            type:Number
        }
        
        
    });

//Defining Schema for counsellors

const CounsellorSchema=new mongoose.Schema(
    {

        FirstName:{
            type:String
            ,
          
                },
            
                LastName:{
                    type:String,
                   
                },
            
                Email:{
                    type:String,
                  
                },
            
                PhoneNo:{
                    type:String,
                  
                },
            
                Password:{
                    type:String,
                  
                },
                
                Gender:{
                    type:String,
                   
                },
            
                Status:{
                    type:Boolean,
                    default:true
                },

                Experinence:{
                    type:String
                },
                Education:{
                    type:String
                },

                Students:[ 
                    {
                    type:'ObjectId',
                    ref:'Student'
                    }
                ]

            
            });


//Defining Models for Students
const Student=new mongoose.model('Student',StudentSchema);
//Defining Models for  Counsellors
const Counsellor=new mongoose.model('Counsellor',CounsellorSchema);

module.exports={Student,Counsellor};