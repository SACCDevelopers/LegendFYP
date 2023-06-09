import React, { Component } from 'react'
import Basic_Chp from '../common/basic_maths';
import '../css/books.css'
class Chapters extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <div id='main_page' className='container-fluid container-flu'>
                    <div className='row basicrow'>
                        <Basic_Chp
                        name="Chemistry"
                        src="images/subject_page/Chemistry.png"
                        href="/chapter/chemistry"
                        class="col-6"
                        />

                        <Basic_Chp
                        name="Physics"
                        src="images/subject_page/Physics.jpg"
                        href="/chapter/physics"
                        class="col-6"
                        
                        />
                    </div>

                    <div className='row basicrow'>
                        <Basic_Chp
                        name="Mathematics"
                        src="images/subject_page/Maths.jpg"
                        href="/chapter/maths"
                        class="col-6"
                        />

                        <Basic_Chp
                        name="English"
                        src="images/subject_page/English.jpg"
                        href="/chapter/english"
                        class="col-6"
                        />
                    </div>

                    <div className='row basicrow'>
                        <Basic_Chp
                        name="Computer"
                        src="images/subject_page/Computer.jpg"
                        href="/chapter/computer"
                        class="col-6"
                        />

                        <Basic_Chp
                        name="Analytical & IQ"
                        src="images/subject_page/Iq.jpg"
                        href="/chapter/iq"
                        class="col-6"
                        />
                    </div>

                    <div className='row basicrow'>
                        <Basic_Chp
                        name="Basic Maths"
                        src="images/subject_page/Basic.jpg"
                        href="/chapter/basicmaths"
                        class="col"
                        />

                       
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Chapters;