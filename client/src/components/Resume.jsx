import React,{ useState } from 'react';
import res from './aug18again-1.png';
import res2 from './aug18again-2.png';



const Resume = props => {


    return(
    <>
    <div className="container text-center">
        <div className="jumbotron" height="50px"></div>
        <img src={res} alt="resume" width="95%" />
        <img className="mt-5" src={res2} alt="resume2" width="95%"/>

    </div>
    


    </>

    );
}
export default Resume;