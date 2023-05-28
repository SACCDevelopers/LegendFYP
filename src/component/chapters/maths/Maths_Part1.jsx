import React, { Component } from "react";
import Chp_Left from "../../common/common_on_chp/Chp_Left_Side";
import Chp_Right from "../../common/common_on_chp/Chp_Right_Side";
import Common_on_chp from "../../common/common_on_chp/On_Top";

class Maths_Part1 extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Common_on_chp name="Maths 11" />
        <div id="container-fluid" className="container-fluid ">
          <Chp_Left name="1.Number Systems" src="/images/maths_part_1/a.png" href="/chapter/nextpage" />

          <Chp_Right
            name="2.Sets Functions and Groups"
            src="/images/maths_part_1/b.png"
          href="/chapter/nextpage" />

          <Chp_Left
            name="3.Matrices and Determinants"
            src="/images/maths_part_1/c.png"
          href="/chapter/nextpage" />

          <Chp_Right
            name="4.Quadratic Equations"
            src="/images/maths_part_1/d.png"
          href="/chapter/nextpage" />

          <Chp_Left
            name="5.Parial Fractions"
            src="/images/maths_part_1/e.png"
          href="/chapter/nextpage" />

          <Chp_Right
            name="6.Sequences and Series"
            src="/images/maths_part_1/f.png"
          href="/chapter/nextpage" />

          <Chp_Left
            name="7.Permutations Combination and Probability"
            src="/images/maths_part_1/g.png"
          href="/chapter/nextpage" />

          <Chp_Right
            name="8.Mathematical Induction and Binomial Theoreom"
            src="/images/maths_part_1/h.png"
          href="/chapter/nextpage" />

          <Chp_Left
            name="9.Fundamentals of Trignometry"
            src="/images/maths_part_1/i.png"
          href="/chapter/nextpage" />

          <Chp_Right
            name="10.Trignometric Identities"
            src="/images/maths_part_1/j.png"
          href="/chapter/nextpage" />

          <Chp_Left
            name="11.Trignometric Functions and their Graphs"
            src="/images/maths_part_1/k.png"
          href="/chapter/nextpage" />

          <Chp_Right
            name="12.Applications of Trignometry"
            src="/images/maths_part_1/l.png"
          href="/chapter/nextpage" />

          <Chp_Left
            name="13.Inverse Trignometric Functions"
            src="/images/maths_part_1/m.png"
          href="/chapter/nextpage" />

          <Chp_Right
            name="14.SOlutions of Trignometric Functions"
            src="/images/maths_part_1/n.png"
          href="/chapter/nextpage" />

<Chp_Left
            name="15.Function and Limit"
            src="/images/maths_part_2/a.png"
          href="/chapter/nextpage" />

          <Chp_Right
            name="16.Differentiation"
            src="/images/maths_part_2/b.png"
          href="/chapter/nextpage" />

          <Chp_Left name="17.Integration" src="/images/maths_part_2/c.png" href="/chapter/nextpage" />

          <Chp_Right
            name="18.Introduction to Analytical Geometry"
            src="/images/maths_part_2/d.png"
          href="/chapter/nextpage" />

          <Chp_Left
            name="19.Linear Inequalities"
            src="/images/maths_part_2/e.png"
          href="/chapter/nextpage" />

          <Chp_Right name="20.Conic Sections" src="/images/maths_part_2/f.png" href="/chapter/nextpage" />

          <Chp_Left name="21.Vectors" src="/images/maths_part_2/g.png" href="/chapter/nextpage" />
        
        </div>
      </React.Fragment>
    );
  }
}

export default Maths_Part1;
