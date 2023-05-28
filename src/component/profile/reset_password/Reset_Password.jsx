import React, { Component } from 'react'
import Input from '../../common/Input';
import { Avatar } from '@mui/material';
import Complete_Profile_Navbar from '../../common/profile/Complete_Profile_Navbar';
import { Link } from 'react-router-dom';

class Reset_Password extends Component {
    state = { account:{
        password:""
    } } 
    
  handletype = (e) => {
    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
  };
  handlesubmit = (e) => {
    e.preventDefault();
  };
    render() { 
        const mystyle = {
            background: "linear-gradient(to bottom, #FFDF24, #FDF9E2)",
            
            
          };
          
        return (<React.Fragment>
            <div
          className="container-fluid pt-5 pb-5"
          style={ mystyle}
        >
          <div className="pt-4 mb-3 mx-auto shadow-lg ps-1 m-5 bg-white rounded" style={{width:"50%"}}>
          <div className="row border-bottom border-3 m-auto">
            <Complete_Profile_Navbar/>
          </div>
          <div className="row">
            <div className="col-sm-4 ">
              <Avatar
                
                src="images/signup.png"
                sx={{ width: 200, height: 200 }}
              />

              <h4 className="mt-3">hi </h4>
              <p className="mt-2"></p>
            </div>

            <div className="col-sm-8 mt-5">
              <h3>Reset Password</h3>
            <form className="ga" onSubmit={this.handlesubmit}>
                  <Input
                    label="Enter Password"
                    value={this.state.account.password}
                    name="password"
                    type="password"
                    onchange={this.handletype}
                    placeholder="Password"
                  />
                  <Link to="/student_next_signup">
                  <button type="submit" className="btn btn-primary mt-3">
                     Next
                  </button>
                  </Link>

                  </form>
            </div>
          </div>
          </div>
          </div>
        </React.Fragment>);
    }
}
 
export default Reset_Password;