import React from 'react'
import cone from '../Images/cone.jpg';
function Header() {
    return <>

        <header>
        <section className="container aboutus-container">
                <div className="row">
                    <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start">
                        <h1 className="display-2">Timeless products,
                        great <span className="highlight">brands.</span></h1>
                        <p className="aboutus-para">
                        Krusty Cone, an idea born out of passion and mission to spread test and delight, is a quirky food place located in the Lal Baugh arena of the mumbail district.                        </p>
                        <h3> DISCOVER OUR WORK</h3>
                    </div>
                       {/* <img src={cone} alt='Background' className='img-fluid mainbg' /> */}

                </div>
            </section>
        </header>
    </>

}

export default Header