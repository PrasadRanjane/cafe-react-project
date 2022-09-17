import React, { useState } from 'react';
import testo from "../API/testApi";

const Testomonial = () => {
    const [testData, setWorkData] = useState(testo);
  return <>
  
  <section>
    <div className="test-container">
    <h1 className="main-heading text-center">Testomonial</h1>
    <div className="row">
    {testData.map((curElem) =>{
        const{id, logo, title, info } = curElem;
        return(
            <>
            <div className="col-12 col-lg-4 text-center test-container-subdiv">
    <i class={`fontawesome-style ${logo}`}></i>
    <h2 className="sub-heading">{info}</h2>
    <p className="test-hero-para">-
    {title}
    </p>
    </div>
            </>
        );
    })}
   

    </div>

    </div>
  </section>
  
  </>
  
}

export default Testomonial