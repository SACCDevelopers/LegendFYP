import React, { Component } from "react";
import Chp_Left from "../../common/common_on_chp/Chp_Left_Side";
import Chp_Right from "../../common/common_on_chp/Chp_Right_Side";
import Common_on_chp from "../../common/common_on_chp/On_Top";

class Physics_Part1 extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Common_on_chp name="Physics 11" 
        />
        <div id="container-fluid" className="container-fluid ">
          <Chp_Left name="1.Measurements" src="/images/physics_part_1/a.png" href="/chapter/nextpage"
          />

          <Chp_Right
            name="2.Vectors and Equilibrium"
            src="/images/physics_part_1/b.png"
          href="/chapter/nextpage"
          />

          <Chp_Left
            name="3.Force and Motion"
            src="/images/physics_part_1/c.png"
          href="/chapter/nextpage"
          />

          <Chp_Right
            name="4.Work and Energy"
            src="/images/physics_part_1/d.png"
          href="/chapter/nextpage"
          />

          <Chp_Left
            name="5.Circular Motion"
            src="/images/physics_part_1/e.png"
          href="/chapter/nextpage"
          />

          <Chp_Right
            name="6.Fluid Dynamics"
            src="/images/physics_part_1/f.png"
          href="/chapter/nextpage"
          />

          <Chp_Left name="7.Oscillations" src="/images/physics_part_1/g.png" href="/chapter/nextpage"
          />

          <Chp_Right name="8.Waves" src="/images/physics_part_1/h.png" href="/chapter/nextpage"
          />

          <Chp_Left
            name="9.Physical Optics"
            src="/images/physics_part_1/i.png"
          href="/chapter/nextpage"
          />

          <Chp_Right
            name="10.Optical Instruments"
            src="/images/physics_part_1/j.png"
          href="/chapter/nextpage"
          />

          <Chp_Left
            name="11.Heat and Thermodynamics"
            src="/images/physics_part_1/k.png"
          href="/chapter/nextpage"
          />

<Chp_Right
            name="12.Electrostatics"
            src="/images/physics_part_2/a.png"
          href="/chapter/nextpage"
          />

          <Chp_Left
            name="13.Current Electricity"
            src="/images/physics_part_2/b.png"
          href="/chapter/nextpage"
          />

          <Chp_Right
            name="14.Electromagnetism"
            src="/images/physics_part_2/c.png"
          href="/chapter/nextpage"
          />

          <Chp_Left
            name="15.Alternating Current"
            src="/images/physics_part_2/e.png"
          href="/chapter/nextpage"
          />

          <Chp_Right
            name="16.Electromagnetic Induction"
            src="/images/physics_part_2/f.png"
          href="/chapter/nextpage"
          />

          <Chp_Left
            name="17.Physics of Solids"
            src="/images/physics_part_2/g.png"
             href="/chapter/nextpage"
          />

          <Chp_Right name="18.Electronics" src="/images/physics_part_2/h.png" href="/chapter/nextpage"
          />

          <Chp_Left
            name="19.Dawn of Modern Physics"
            src="/images/physics_part_2/i.png"
          href="/chapter/nextpage"
          />

          <Chp_Right
            name="20.Atomic Spectra"
            src="/images/physics_part_2/j.png"
          href="/chapter/nextpage"
          />

          <Chp_Left
            name="21.Nuclear Physics"
            src="/images/physics_part_2/k.png"
          href="/chapter/nextpage"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Physics_Part1;
