import React from 'react'
import Img1 from '../../Image/feature-1.jpg'
import Img2 from '../../Image/feature-2.jpg'
import Img3 from '../../Image/feature-3.jpg'
import Img4 from '../../Image/feature-4.jpg'
import chefSvg from '../../Image/svg/cooking.svg'
import vegSvg from '../../Image/svg/vegetable.svg'
import medSvg from '../../Image/svg/medal.svg'
import meatSvg from '../../Image/svg/meat.svg'
import couSvg from '../../Image/svg/courier.svg'
import fruitSvg from '../../Image/svg/healthy-food.svg'
import './Feature.css'

function Feature() {
    return (
        <section className="mt-5 feature">
            <div className="container"> 
                <div className="row">
                    <div className="col-md-6 col-lg-5">
                       <div className="mb-3">
                            <h3>Why Choose us</h3>
                            <h1>Our key Features</h1>
                       </div>
                       <div className="feature_text">
                        <div className="feature_img">
                                <div className="row ">
                                    <div className="col-6">
                                        <img src={Img1} alt="" />
                                    </div>
                                    <div className="col-6">
                                        <img src={Img2} alt="" />
                                    </div>
                                    <div className="col-6">
                                        <img src={Img3} alt="" />
                                    </div>
                                    <div className="col-6">
                                        <img src={Img4} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium doloremque rerum totam, officiis officia, sapiente non veritatis, vel nobis minus dicta repudiandae in fuga illo dolorem quia alias consequuntur dignissimos accusamus. Deleniti eaque provident, quod, corporis iure officiis nesciunt at dolorem minima iste placeat non voluptatem facilis accusamus, dicta tempore.</p>
                            </div>
                            <div>
                                <button  class=" w-100 btn custom-btn" type="submit">Book Now</button>
                            </div>
                            
                       </div>
                    </div>
                    <div className="col-md-6 col-lg-7 px-4">
                        <div className="row">
                            <div className="col-6 mb-3">
                                <div className="feature_item">
                                    <img src={chefSvg} alt="" />
                                    <h4>World’s best Chef</h4>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad impedit laborum in saepe dolorum perferendis dignissimos quas perspiciatis totam voluptatum?</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="feature_item">
                                <img src={vegSvg} alt="" />
                                    <h4>World’s best Chef</h4>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad impedit laborum in saepe dolorum perferendis dignissimos quas perspiciatis totam voluptatum?</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-6">
                                <div className="feature_item">
                                    <img src={medSvg} alt="" />
                                    <h4>World’s best Chef</h4>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad impedit laborum in saepe dolorum perferendis dignissimos quas perspiciatis totam voluptatum?</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="feature_item">
                                <img src={meatSvg} alt="" />
                                    <h4>World’s best Chef</h4>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad impedit laborum in saepe dolorum perferendis dignissimos quas perspiciatis totam voluptatum?</p>
                                </div>
                            </div>

                        </div>
                        <div className="row">
                        <div className="col-6">
                                <div className="feature_item">
                                    <img src={couSvg} alt="" />
                                    <h4>World’s best Chef</h4>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad impedit laborum in saepe dolorum perferendis dignissimos quas perspiciatis totam voluptatum?</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="feature_item">
                                <img src={fruitSvg} alt="" />
                                    <h4>World’s best Chef</h4>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad impedit laborum in saepe dolorum perferendis dignissimos quas perspiciatis totam voluptatum?</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default Feature
