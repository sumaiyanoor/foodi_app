import React from 'react'
import Img1 from '../../image/feature-1.jpg';
import Img2 from '../../image/feature-2.jpg';
import Img3 from '../../image/feature-3.jpg';
import Img4 from '../../image/feature-4.jpg';
import FEATURE_TITLE from '../../data/data-section';
import './Feature.css'

class Feature extends React.Component {
    state = { 
        items : FEATURE_TITLE //all feature load from data-section
     };

    render() { 
        return ( 
            <div className="mt-5 feature">
            <div className="container "> 
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
                                    <img src={Img1} alt="food" />
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
                                <button  className=" w-100 btn custom-btn" type="submit">Book Now</button>
                            </div>  

                            <div className="ditto"> {/*feature section replace as ditto*/}
                                {this.state.items.map(item => (
                            <div class="cotto" key={item.id}>
                                <div className="cotto-item">
                                <img src={item.imageUrl} alt="food" />
                                <h4>{item.title}</h4>
                                <p> {item.content}</p>
                                </div>
                            </div>
                            ))}
                        </div>
                       </div>
                    </div>
                </div> 
            </div>
        </div>
         );
    }
}
 
export default Feature;