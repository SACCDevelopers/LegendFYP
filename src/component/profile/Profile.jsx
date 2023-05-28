import React, { Component } from "react";
import { Avatar } from "@mui/material";
import "../css/profile.css";
import Profile_info from "../common/profile/Profile_Info";
import Complete_Profile_Navbar from "../common/profile/Complete_Profile_Navbar";

class Profile extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <div id="yellow"></div>
        <div id="red"></div>
        <div id="grey" className="container-fluid pt-5 pb-5">
          <h1>Profile</h1>
          <div
            className="pt-4 mb-3 mx-auto shadow-lg ps-1 m-5 bg-white rounded"
            style={{ width: "50%" }}
          >
            <div className="row m-auto">
              <Complete_Profile_Navbar />
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

              <div className="col-sm-7 mt-5">
                <table class="table table-striped">
                  <tbody>
                    <tr>
                      <Profile_info Value="Name" readonly="true" />
                      <Profile_info Value="Qasim" readonly="true" />
                    </tr>
                    <tr>
                      <Profile_info Value="Name" readonly="true" />
                      <Profile_info Value="Qasim" readonly="true" />
                    </tr>
                    <tr>
                      <Profile_info Value="Name" readonly="true" />
                      <Profile_info Value="Qasim" readonly="true" />
                    </tr>
                    <tr>
                      <Profile_info Value="Name" readonly="true" />
                      <Profile_info Value="Qasim" readonly="true" />
                    </tr>
                    <tr>
                      <Profile_info Value="Name" readonly="true" />
                      <Profile_info Value="Qasim" readonly="true" />
                    </tr>
                    <tr>
                      <Profile_info Value="Name" readonly="true" />
                      <Profile_info Value="Qasim" readonly="true" />
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Profile;
