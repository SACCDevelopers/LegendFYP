import React, { Component } from 'react'
import Input from "../common/Input"
import '../css/signin.css';


class Signin extends Component {
    state = { 
        account:{
            Email:"",
            Password:""
        }
     } 

    handletype = (e) => {
        const account = { ...this.state.account };
        account[e.currentTarget.name] = e.currentTarget.value;
        this.setState({ account });
      };



      handlesubmit = async(e) => {
        e.preventDefault();
        
        //checking admin exist or not
        if(this.state.account.Email=="ali@gmail.com" && this.state.account.Password=="123"){
          window.location.href = "http://www.w3schools.com";
          return;
        }

       //checking student exist or not

      const res=await fetch("/api/Student/Login",{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body: JSON.stringify(this.state.account)
        });
        const studentResponse=await res.json();
        if(studentResponse.result==true)
        {
          window.location.href = "https://www.uet.edu.pk/";
          return;
        }
        
        else if(studentResponse.result==false)
        {
          alert("Your Account is Currently Block Contacat With Admin");
         
          return;
        }
        
        
        //Checking Consellor exist or not

        const res2=await fetch("/api/Counsellor/Login",{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body: JSON.stringify(this.state.account)
        });
        const counsellorResponse=await res.json();
        if(counsellorResponse.result==true)
        {
          
alert(counsellorResponse.result);
          window.location.href = "https://www.nu.edu.pk/";
          return;
        }
        
       else if(counsellorResponse.result==false)
        {
          alert(counsellorResponse.result);
          alert("Your Account is Currently Block Contacat With Admin");
         
          return;
        }


        alert("Invalid User Name or Password");


      };

    render() { 
        const mystyle = {
            backgroundColor: "#F5CD01",
            borderTopLeftRadius: "20px",
            borderBottomLeftRadius: "20px",
            height: "100px",
            
          };
      
          
        return (
            <React.Fragment>
               <div id='parent' className=" container  signincontainer">
                
          <div
            className="shadow  bg-white rounded"
            id='shadow'
          >
            <div className="row">
              <div className="col-sm-5 " id='signinleft' >
                <img src='/images/signin3.jpg'/>
              </div>

              <div className="col-sm-7 p-3 ">
                <h1>Sign In</h1>

              {/* Starting Form */}
                <form method='Post' onSubmit={this.handlesubmit}>
                  <Input
                    label="Email"
                    value={this.state.account.email}
                    name="Email"
                    type="email"
                    onchange={this.handletype}
                    placeholder="Email"
                  />

<Input
                    label="Password"
                    value={this.state.account.Password}
                    name="Password"
                    type="password"
                    onchange={this.handletype}
                    placeholder="Password"
                  />
                  

                  <button type="submit" id='button' className="btn signinbtn mt-3">
                    Sign In
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div> 
            </React.Fragment>
        );
    }
}
 
export default Signin;