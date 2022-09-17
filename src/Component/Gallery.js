import React from 'react'
import cone from '../Images/cone.jpg';
import cone2 from "../Images/mgcone.jpg"
import cone3 from "../Images/abcone.jpg"

function Gallery() {
    return <>

        <header>
        <section className=" Gallery-container">
        <h1 className="main-heading text-center">Gallery</h1>
    <div className="row">
                    <div className="col-12 col-lg-6 header-left-side  align-items-start">
                      <div className='gallary_g'>
                        <img src={cone} alt="img1"/>
                        <img src={cone2} alt="img1"/>
                        <img src={cone3} alt="img1"/>
                      </div>
                      </div>
               
                      

                </div>
            </section>
        </header>
    </>

}

export default Gallery