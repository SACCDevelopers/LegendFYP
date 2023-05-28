import React, { Component } from "react";
import Input from "../../common/Input";
import { Avatar } from "@mui/material";
import "../../css/inpu.css"

class Student_Signup extends Component {
 
  state = {
    account: {
      email: "",
      password: "",
      firstname: "",
      lastname: "",
      phoneno: "",
      gender:"",
      religion: "",
      matric_marks: "",
      inter_marks: "",
      father_income: "",
      total_matric_marks: "",
      total_inter_marks: "",
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


   handlesubmit=async (e)=> {
   e.preventDefault();
      const obj={
      Email:this.state.account.email,
      Password:this.state.account.password,
      FirstName:this.state.account.firstname,
      LastName:this.state.account.lastname,
      PhoneNo:this.state.account.phoneno,
      Gender:this.state.account.gender,
      ObtainedMatricMarks:this.state.account.matric_marks,
      TotalMatricMarks:this.state.account.total_matric_marks,
      ObtainedInterMarks:this.state.account.inter_marks,
      TotalInterMarks:this.state.account.total_inter_marks,
      FatherIncome:this.state.account.father_income

    }
    const res=await fetch("/api/Student/AddStudent",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(obj)
    });
    const data=await res.json();
     alert(data.message);
    }


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
              <h1>Student Signup Here</h1>

        {/* Form Started */}
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
          id="shadow"
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
                    
                    value={this.state.account.matric_marks}
                    name="matric_marks"
                    type="number"
                    onchange={this.handletype}
                    placeholder="Matric Marks"
                  />

                  <Input
                    
                    value={this.state.account.total_matric_marks}
                    name="total_matric_marks"
                    type="number"
                    onchange={this.handletype}
                    placeholder="Total Matric Marks"
                  />

                  <Input
                    
                    value={this.state.account.inter_marks}
                    name="inter_marks"
                    type="number"
                    onchange={this.handletype}
                    placeholder="Inter Marks"
                  />

                  <Input
                    
                    value={this.state.account.total_inter_marks}
                    name="total_inter_marks"
                    type="number"
                    onchange={this.handletype}
                    placeholder="Total Inter Marks"
                  />

                  <Input
                    
                    value={this.state.account.father_income}
                    name="father_income"
                    type="number"
                    onchange={this.handletype}
                    placeholder="Father Income"
                  />
             
                  

                  <button type="submit" onClick={this.displaynext} className="btn btn-primary inputbtn mt-3">
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

export default Student_Signup;
