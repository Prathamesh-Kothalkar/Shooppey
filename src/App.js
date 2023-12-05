
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Foot from './Components/Footer/Footer';
import mens_banner from './Components/Assets/banner_mens.png'
import womens_banner from './Components/Assets/banner_women.png'
import child_banner from './Components/Assets/banner_kids.png'
import LoadingBar from 'react-top-loading-bar'
function App() {
  return (
    <div>
      <BrowserRouter>
      <LoadingBar />
        <Navbar/>
        <Routes>
          <Route path="/" element={<Shop/>}/>
          <Route path="/mens" element={<ShopCategory banner={mens_banner} category="men"/>}/>
          <Route path="/womens" element={<ShopCategory banner={womens_banner} category="women"/>}/>
          <Route path="/kids" element={<ShopCategory banner={child_banner} category="kid"/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/product" element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path="/login" element={<LoginSignup login={"login"}/>}/>
          <Route path="/signup" element={<LoginSignup login={"signup"}/>}/>
        </Routes>
        <Foot/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
