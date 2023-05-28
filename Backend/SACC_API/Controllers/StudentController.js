const express=require('express');
const router=express.Router();
const stu_rep=require("../Models/Repositories/StudentRepository");





router.get('/GetAllStudents',stu_rep.GetAllStudents);
router.post('/AddStudent',stu_rep.AddStudent);
router.post('/Login',stu_rep.Login);
router.post('/ViewProfile',stu_rep.ViewProfile);
router.post('/ResetPassword',stu_rep.ResetPassword);
router.put('/UpdateProfile',stu_rep.UpdateProfile);
router.delete('/DeleteStudent',stu_rep.DeleteStudent);

module.exports=router;
