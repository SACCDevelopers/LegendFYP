// import logo from './logo.svg';
// import './App.css';

// import CarouselPage from "./component/Carousel/CarouselPage";
 import {  Routes,Route} from 'react-router-dom';
// import Homepage from "./component/Home/Homepage";
import Signin from "./component/Signin/signin";

import Student_Signup from './component/signup/student_signup/Student_Signup';
import Routs from './component/routes/Routes';
import Counselor_Signup from './component/signup/counselor_signup/Counselor_Signup';

// import Student_Signup from './component/signup/student_signup/Student_Signup';
// import Student_Next_Signup from './component/signup/student_signup/Student_Next_Signup';
function App() {
  return (
    <>
      <div className="App">

{/* <Signin></Signin> */}
{/* <Student_Signup></Student_Signup> */}
<Signin></Signin>

{/* <Counselor_Signup></Counselor_Signup> */}
      {/* <Routs/> */}
      

{/* 
<Student_Signup></Student_Signup>
<Student_Next_Signup></Student_Next_Signup> */}
    {/* <Routes>
    <Route path="/" element={<Homepage />}></Route>
    <Route path="/CarouselPage" element={<CarouselPage/>}></Route>
    <Route path="/Login" element={<Signin/>}></Route> */}
      {/* <Route index element={<Home />} />
      <Route path="blogs" element={<Blogs />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<NoPage />} /> */}
    
  {/* </Routes> */}

      </div>
    </>

  );
}

export default App;
