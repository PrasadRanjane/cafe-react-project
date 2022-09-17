import React, { useState } from 'react'
import menuapi from "../API/MenuAPI"
import cone from "../Images/abcone.jpg"
const Menu = () => {
    const [menuData, setWorkData] = useState(menuapi);

    return <>
        <section className='menu-section'>
            <div className=" menu-container" id='#menu'>
                <h1 className="main-heading text-center">Menu</h1>
                <div className="row">
                <div className="col-12 col-lg-6 text-center menu-container-img">
                    <img src={cone} alt='Background' className='img-fluid mainbg' />
                </div>
                    <div className="col-12 col-lg-6 text-center menu-container-subdiv">
                    {menuData.map((curElem) => {
                        const { id, title, } = curElem;
                        return (
                            <>

                            <i  className="our-services-number">{id}</i>
                                    <h2 className="sub-heading">{title}</h2>
                               

                            </>
                        );
                    })}

                </div>

            </div>
        </div>
    </section>
  
  </>
}

export default Menu