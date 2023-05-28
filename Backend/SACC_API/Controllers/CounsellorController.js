const express=require('express');
const router=express.Router();
const counsellor_repo=require("../Models/Repositories/CounsellorRepository");



router.get('/GetAllCounsellors',counsellor_repo.GetAllCounsellors);
router.post('/AddCounsellor',counsellor_repo.AddCounsellor);
router.post('/Login',counsellor_repo.Login);
router.post('/ViewProfile',counsellor_repo.ViewProfile);
router.post('/ResetPassword',counsellor_repo.ResetPassword);
router.post('/ViewStudents',counsellor_repo.ViewStudents)
router.put('/UpdateProfile',counsellor_repo.UpdateProfile);
router.delete('/DeleteCounsellor',counsellor_repo.DeleteCounsellor);









module.exports=router;
