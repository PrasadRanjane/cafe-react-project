import React from 'react';
import cone from "../Images/abcone.jpg"

function AboutUs() {
  return (
    <div>
     <section>
    <div className="test-container">
    <h1 className="main-heading text-center">AboutUs</h1>
    <div className="row">
    <div className="col-12 col-lg-6 text-center about-container-img">
                    <img src={cone} alt='Background' className='img-fluid aboutbg' />
                </div>
                <div className="col-12 col-lg-6 text-center menu-container-img">
    <h1 className="display-2 sub-heading">Krusty Cone, an idea born out of passion and mission to spread test and delight, is a quirky food place located in the Lal Baugh arena of the mumbail district. The city, being such an incredibly busy place, always has people on the go, consistantly depending on top quality, good tasting fast-food. Krusty Cone fills the gap by delivering Cone Pizzas that are super-delicious, Waffies that give you as quickly as you go about your busy lives, Choose between our rustic, cheesy pizzas made in the compact-handy shape of a cone, or Walffles, all hot and crispy and freshly made shakes to complement the savoury choices.</h1>
                        
                        <h3> DISCOVER OUR WORK</h3>
                        <div className="input-group mt-3">
                            <div className="line rectangle"></div>
                        </div>
                        </div>
    </div>

    </div>
  </section>
    </div>
  )
}

export default AboutUs