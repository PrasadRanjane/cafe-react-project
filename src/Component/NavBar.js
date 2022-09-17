import React, { useState } from 'react';
import brandlg from '../Images/logo.png';

const Navbar = () => {
    const [show, setShow] = useState(false);
    return <>
        <section className="navbar-bg">
            <nav class="navbar navbar-expand-lg navbar-light ">
                <div class="container">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setShow(!show)}>
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <a class="navbar-brand" href="#"><span className="highlight"><img src={brandlg} alt='logo' className='img-fluid logo' /></span></a>
                           
                    <div>
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                                <a class="nav-link" href="#home">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#aboutUs">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#menu">Menu</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Reviews</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Gallery</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact Us</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </section>

    </>

}

export default Navbar;