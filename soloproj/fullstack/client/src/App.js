
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from './components/Header';
import Cart from './components/Cart';
import EditProduct from './components/EditProduct';
import OrderDetails from './components/OrderDetails';

function App() {
  return (
    <BrowserRouter>
    
    <div className="App"> 

    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/allproducts" element={<Cart />} />
      <Route path="/solo/edit/:id" element={<EditProduct />} />
      <Route path="/solo/orderdetails" element={<OrderDetails />} />
    </Routes>
    
    </div>
    

    </BrowserRouter>
  );
}

export default App;
