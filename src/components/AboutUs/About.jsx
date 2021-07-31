import React from 'react'
import Shef from '../../Image/about.jpg'
import './About.css'

function About() {
    return (
        <section className="about_main"> 
            <div className="container  ">
                <div className="row ">
                 <div className="col-md-6 img_container">
                        <img src={Shef} alt="" />
                        <button type="button" class="btn-play" data-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-target="#videoModal">
                            <span></span>
                        </button>
                    </div>
                    <div className="col-md-6 about_text">
                        <h3>About Us</h3>
                        <h1>Cooking Since 1990</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus. Aenean consectetur convallis porttitor. Aliquam interdum at lacus non blandit.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
