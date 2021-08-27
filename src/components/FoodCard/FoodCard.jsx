import React from 'react';
import { Link } from 'react-router-dom';
import FOOD_ITEMS from '../../data/food-items';
import './FoodCard.css';

class FoodCard extends React.Component {
    state = { 
    items : FOOD_ITEMS //all items load from food_items
     };
    
    render() { 
        return ( 
        <div className="food_card_container">
            <div className="container ">
                <div className="row food_card_row">

                    {this.state.items.map(item => (
                    <div className="col-md-3 text-center food_card" key={item.id}>
                        <div  className="food_card_img">
                            <img src={item.imageUrl} width="80px" height="80px" alt="" />
                        </div>
                        <h1>{item.title}</h1>
                        <p> {item.content} </p>
                        <Link className="viewMenu" to="/">View Menu</Link>
                    </div>
                    ))}

                </div>
            </div>
        </div>
         );
    }
}
 
export default FoodCard;