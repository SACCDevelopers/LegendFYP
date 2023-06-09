
import React from 'react'

import {  Route, Routes} from "react-router-dom";
import Profile from './../profile/Profile';
import Edit_Profile from '../profile/Edit_Profile';
import Reset_Password from './../profile/reset_password/Reset_Password';
import Student_Signup from '../signup/student_signup/Student_Signup';

import Chapters from '../chapters/chapters';
import Chem_Part1 from './../chapters/chem/Chem_Part1';
import Physics_Part1 from './../chapters/phy/Phy_Part1';
import Maths_Part1 from './../chapters/maths/Maths_Part1';
import Basic_Maths from './../chapters/basic_math/Basic_Math';

import NextPage from '../chapters/onclickpageshow/NextPage.';
import Homepage from '../Home/Homepage';
import Counselor_Signup from '../signup/counselor_signup/Counselor_Signup';
import English from '../chapters/english/English';
import Signin from '../Signin/signin';
import IQ from '../chapters/iq/IQ';






function Routs() {
  return (
    
      
          
          <Routes>
            
            <Route exact path='/' element={<Homepage/>}/>

<Route path='/chapter' element={<Chapters/>}/>
<Route path='/chapter/chemistry' element={<Chem_Part1/>}/>
<Route path='/chapter/physics' element={<Physics_Part1/>}/>
          <Route path='/chapter/maths' element={<Maths_Part1/>}/>
          <Route path='/chapter/basicmaths' element={<Basic_Maths/>}/>
          <Route path='/chapter/english' element={<English/>}/>
          <Route path='chapter/iq' element={<IQ/>}/>
          <Route path='/nextpage' element={<NextPage/>}/>  

          <Route path='/student-signup' element={<Student_Signup/>} />
          <Route path='/counselor-signup' element={<Counselor_Signup/>}/>
          <Route path='signin' element={<Signin/>}/> 
          
          <Route path="/profile" element={<Profile/>} />
          <Route path="/edit_profile" element={<Edit_Profile/>} />
          <Route path="/reset_password" element={<Reset_Password/>} />
            
         
            </Routes>
          
          
        
      
      
     
    
  );
}

export default Routs;
