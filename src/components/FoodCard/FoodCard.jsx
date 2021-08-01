import React from 'react';
import './FoodCard.css';
import snack from '../../Image/svg/snack.svg';
import burger from '../../Image/svg/cheese-burger.svg'
import cocktail from '../../Image/svg/cocktail.svg'
import { Link } from 'react-router-dom';
const FoodCard = () => {
    return (
        <section className="food_card_container">
            <div className="container ">
                <div className="row food_card_row">
                    <div className="col-md-3 text-center food_card">
                        <div  className="food_card_img">
                            <img src={burger} width="80px" height="80px" alt="" />
                        </div>
                        <h1>Burgers</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis beatae esse nisi culpa veritatis! Dolor soluta illum aperiam recusanda.</p>
                        <Link className="viewMenu" to="/">View Menu</Link>
                    </div>
                    <div className="col-md-3 text-center food_card">
                       <div  className="food_card_img">
                       <img src={snack} width="80px" height="80px" alt="" />
                       </div>
                        <h1>Burgers</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis beatae esse nisi culpa veritatis! Dolor soluta illum aperiam recusanda.</p>
                        <Link className="viewMenu" to="/">View Menu</Link>
                    </div>
                    <div className="col-md-3 text-center food_card">
                       <div className="food_card_img">  
                       <img src={cocktail} width="80px" height="80px" alt="" />
                       </div>
                        <h1>Beverages</h1>
                        <p className="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis beatae esse nisi culpa veritatis! Dolor soluta illum aperiam recusanda.</p>
                        <Link className="viewMenu" to="/">View Menu</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FoodCard
