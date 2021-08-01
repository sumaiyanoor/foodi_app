import logo from './logo.svg';
import './App.css';
import About from './components/AboutUs/About';
import TableForm from './components/TableForm/TableForm';
import Feature from './components/Feature/Feature';
import FoodCard from './components/FoodCard/FoodCard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FoodMenu from './components/FoodMenu/FoodMenu';

function App() {
  return (
    <Router className="">
      <Route path="/">
        <TableForm />
        <About/>
        <Feature/>
        <FoodCard />
        <FoodMenu/>
      </Route>
      
    </Router>
  );
}

export default App;
