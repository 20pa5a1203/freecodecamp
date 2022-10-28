import React, { Fragment } from "react";
import Nav from './Nav';

function Main(props){
    return(
        <Fragment>
        {/* <Nav></Nav> */}
        <section id="welcome-section" className="welcome-section">
            <h1>Hey I am <i><b><abbr title="JOGI PYDI DURGA RAO">Pydi</abbr></b></i></h1>
            <p>a web developer</p>
        </section>
    </Fragment>
    );
}


export default Main;