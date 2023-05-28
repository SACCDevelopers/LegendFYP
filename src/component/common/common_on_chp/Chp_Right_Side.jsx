import React from "react";
import "../../css/books.css";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

const Chp_Right = (props) => {
  return (
    <React.Fragment>
      
      <div className="row booksrow">
        <div className="col-5 "></div>

        <div className="col-2  ">
          <div className="v1"></div>
        </div>
        <div className="col-5 flex_right ">
          <div className="horiright "></div>
          <div className="ava_right">
            <Link to={props.src}>
              <Avatar id="avatar" src={props.src} />
            </Link>
            <p>{props.name}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Chp_Right;
