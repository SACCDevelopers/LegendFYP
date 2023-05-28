import React, { Component } from "react";
import Chp_Left from "../../common/common_on_chp/Chp_Left_Side";
import Chp_Right from "../../common/common_on_chp/Chp_Right_Side";
import Common_on_chp from "../../common/common_on_chp/On_Top";

class English extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Common_on_chp name="Chemistry 11" />
        <div id="container-fluid" className="container-fluid ">
          <Chp_Left
            name="1.Vocabulary amd Word Usage"
            src="/images/"
          href="/chapter/nextpage" />

          <Chp_Right
            name="2.Grammar and Sentence structure"
            src="/images/"
          href="/chapter/nextpage" />

          <Chp_Left name="3.Idioms and Phrases" src="/images/" href="/chapter/nextpage" />

          <Chp_Right
            name="4.Synonyms and Antonyms"
            src="/images/"
          href="/chapter/nextpage" />

          <Chp_Left
            name="5.Relationship Between Words"
            src="/images/"
          href="/chapter/nextpage" />

          <Chp_Right
            name="6.Parts of Speech"
            src="/images/"
          href="/chapter/nextpage" />

          <Chp_Left
            name="7.Pronounciation and Phonetics"
            src="/images/"
          href="/chapter/nextpage" />

          <Chp_Right
            name="8.Active and Passive Voice"
            src="/images/"
          href="/chapter/nextpage" />

          <Chp_Left name="9.Preposition and Conjuction" src="/images/" href="/chapter/nextpage" />
        </div>
      </React.Fragment>
    );
  }
}

export default English;
