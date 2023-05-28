import React, { Component } from "react";
import { Avatar } from "@mui/material";

class NextPage extends Component {
    state = {};
    render() {
      return (
        <React.Fragment>
            <div className="container">
              <div className="row linerow">
                <div className="col">
                  <h3>Chapter Name</h3>
                  <hr/>
                </div>
              </div>
              <div className="row ">
                <div className="col content">
                  <div className="nextpagenote">
            <Avatar id="avatar" src="images/notes.png" />
            <h3>Notes</h3>
            </div>
            <div className="Nextpagenote">
            <Avatar id="avatar" src="images/video.png" />
            <h3>Video</h3>
            </div>
            </div>
            </div>
            </div>
        </React.Fragment>
      );
    }
}
export default NextPage