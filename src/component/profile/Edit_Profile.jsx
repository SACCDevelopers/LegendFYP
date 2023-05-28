import React, { Component } from "react";
import { Avatar } from "@mui/material";

import Profile_info from "../common/profile/Profile_Info";
import Complete_Profile_Navbar from "../common/profile/Complete_Profile_Navbar";

class Edit_Profile extends Component {
  state = {
    fix_col: ["Name", "Father Name", "Gender", "Matric Marks", "Inter Marks"],
    data: ["qasim", "M.Siddique", "M", "900", "1000"],
  };

  render() {
    const mystyle = {
      background: "linear-gradient(to bottom, #FFDF24, #FDF9E2)",
    };

    const mystyl = {
      height: "200px",
    };

    return (
      <React.Fragment>
        <div className="container-fluid pt-5 pb-5" style={mystyle}>
          <div
            className="pt-4 mb-3 mx-auto shadow-lg ps-1 m-5 bg-white rounded"
            style={{ width: "50%" }}
          >
            <div className="row border-bottom border-3 m-auto">
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
                      <Profile_info Value="Name" readonly={false} />
                      <Profile_info Value="Qasi" readonly={false} />
                    </tr>
                    <tr>
                      <Profile_info Value="Nam" readonly={false} />
                      <Profile_info Value="Qasim" readonly={false} />
                    </tr>
                    <tr>
                      <Profile_info Value="Nae" readonly={false} />
                      <Profile_info Value="sim" readonly={false} />
                    </tr>
                    <tr>
                      <Profile_info Value="Name" readonly={false} />
                      <Profile_info Value="Qasim" readonly={false} />
                    </tr>
                    <tr>
                      <Profile_info Value="Name" readonly={false} />
                      <Profile_info Value="Qasim" readonly={false} />
                    </tr>
                    <tr>
                      <Profile_info Value="Name" readonly={false} />
                      <Profile_info Value="Qasim" readonly={false} />
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

export default Edit_Profile;
