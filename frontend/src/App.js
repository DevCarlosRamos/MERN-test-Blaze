import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter as Router, Route } from 'react-router-dom';

import ListOrders from './components/ListOrders';
import ListProducts from './components/ListProducts';
import Navbar from './components/Navbar';
import Order from './components/Order';
import addProduct from './components/addProduct';
import editProduct from './components/editProduct';
import editOrder from './components/editOrder';
import addOrder from './components/addOrder';

function App() {
  return (
    <Router>
      <Navbar/>
      <Route path="/" exact component={ListOrders}/>
      <Route path="/Orders" exact component={ListOrders}/>
      <Route path="/Products" exact component={ListProducts}/>
      <Route path="/Orders/:id" exact component={Order}/>
      <Route path="/Orders/add" component={addOrder}/>
      <Route path="/Orders/:id/edit" component={editOrder}/>
      <Route path="/Products/add" component={addProduct}/>
      <Route path="/Products/:id/edit" component={editProduct}/>
    </Router>
    
  );
}

export default App;
