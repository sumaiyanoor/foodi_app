import React from 'react';
import TableForm from '../components/TableForm/TableForm';
import About from '../components/AboutUs/About';
import Feature from '../components/Feature/Feature';
import FoodCard from '../components/FoodCard/FoodCard';
import FoodMenu from '../components/FoodMenu/FoodMenu';

const HomePage = () => {
    return ( 
    <div>
        <TableForm />
        <About />
        <Feature />
        <FoodCard />
        <FoodMenu />
    </div>
     );
}
 
export default HomePage;