import React, { Component } from "react";
import Input from "../../common/Input";
import { Avatar } from "@mui/material";
import "../../css/inpu.css"

class Counselor_Signup extends Component {
 
  state = {
    account: {
      email: "",
      password: "",
      firstname: "",
      lastname: "",
      phoneno: "",
      gender:"",
      education:"",
      experience:""
    },
    step:1
  };

  
  handletype = (e) => {
    const account = { ...this.state.account };
    if(e.currentTarget.name==="gender"){
      account["gender"]= e.currentTarget.value   
    }else{
      account[e.currentTarget.name] = e.currentTarget.value;
    }
    
    this.setState({ account });
    
   
  };


handlesubmit = async(e) => {

    e.preventDefault();

    const obj={
      FirstName:this.state.account.firstname,
      LastName:this.state.account.lastname,
      Password:this.state.account.password,
      Email:this.state.email,
      PhoneNo:this.state.account.phoneno,
      Gender:this.state.account.gender,
      Experinence:this.state.account.experience,
      Education:this.state.account.education

    }
    const res=await fetch("/api/counsellor/addcounsellor",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(obj)
  
    });

     const data=await res.json();
     alert(data.message);


  };

  fun1 =()=> {
    this.setState({...this.state,step:0})
    
  }
  
  render() {
    const mystyle = {
      backgroundColor: "#F5CD01",
      borderTopLeftRadius: "20px",
      borderBottomLeftRadius: "20px",
      height: "39vw",
    };
 
    return (
      <React.Fragment>
        {this.state.step?
        
        <div className="container pt-4 ">
        <div
          className="shadow ps-1 m-5 bg-white rounded"
          style={{height:"39vw"}}
        >
          <div className="row">
            <div className="col-sm-4 " style={mystyle}>
              <Avatar
                className="m-5"
                sx={{ width: 250, height: 250 }}
                src="images/signup.png"
              />

              <h1 className="mt-3">Let's Get You Set Up </h1>
              <p className="mt-2">
                It should take only a couple of minutes to pair with your
                watch
              </p>
            </div>

            <div id="form-col" className="col-sm-8">
              <h1>Counselor Signup Here</h1>

              {/* starting form */}

            <form id="form" method="Post" onSubmit={this.handlesubmit}>
                
            <Input
          
                  value={this.state.account.firstname}
                  name="firstname"
                  type="text"
                  onchange={this.handletype}
                  placeholder="First Name"
                />

                <Input
  
                  value={this.state.account.lastname}
                  name="lastname"
                  type="text"
                  onchange={this.handletype}
                  placeholder="Last Name"
                />

                <Input

                  value={this.state.account.phoneno}
                  name="phoneno"
                  type="tel"
                  onchange={this.handletype}
                  placeholder="Phone Number"
                />

                <Input

                  value={this.state.account.email}
                  name="email"
                  type="email"
                  onchange={this.handletype}
                  placeholder="Email"
                />

                <Input
      
                  value={this.state.account.password}
                  name="password"
                  type="password"
                  onchange={this.handletype}
                  placeholder="Password"
                />
                  <div>
                  <label>
      <input
        type="radio"
        value="Male"
        name="gender"
        onChange={(e)=>this.handletype(e)}
      />
      Male
    </label>
    <br />
    <label>
      <input
        type="radio"
        value="Female"
        name="gender"
        onChange={this.handletype}
      />
      Female
    </label>
  </div>
                

                <button  className="btn btn-primary inputbtn mt-3" onClick={this.fun1}>
                  Next
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>


        :
        <div className="container pt-4 ">
          <div
            className="shadow ps-1 m-5 bg-white rounded"
            style={{height:"39vw"}}
          >
            <div className="row">
              <div className="col-sm-4 " style={mystyle}>
                <Avatar
                  className="m-5"
                  sx={{ width: 250, height: 250 }}
                  src="images/signup.png"
                />

                <h1 className="mt-3">Let's Get You Set Up </h1>
                <p className="mt-2">
                  It should take only a couple of minutes to pair with your
                  watch
                </p>
              </div>

              <div id="form-col" className="col-sm-8">
                <h1>Signup Here</h1>
              <form id="form" onSubmit={this.handlesubmit}>
                  
              <Input
                    
                    value={this.state.account.experience}
                    name="experience"
                    type="text"
                    onchange={this.handletype}
                    placeholder="Experience"
                  />

                  <Input
                    
                    value={this.state.account.education}
                    name="education"
                    type="text"
                    onchange={this.handletype}
                    placeholder="Education"
                  />

                  
                   
                  

                  <button type="submit" className="btn btn-primary inputbtn mt-3">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        
        
        
        }
        
        </React.Fragment>
    );
  }
}

export default Counselor_Signup;
