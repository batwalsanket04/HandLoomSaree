import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './componant/Navbar'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './componant/Footer/Footer'
import ScrollTop from './componant/Footer/ScrollTop'
import LoginPopUp from './componant/LoginPopUp/LoginPopUp'
 

function App() {
  const [count, setCount] = useState(0);
  const [showLogin,setShowLogine]=useState(false);

  return (
    <>
    {
      showLogin?<LoginPopUp  setShowLogine={setShowLogine}/>:<></>
    }
    <Router>
      <Navbar setShowLogine={setShowLogine}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<PlaceOrder/>} />

        
      </Routes>
      <ScrollTop/>
      <Footer/>
    </Router>
    </>
  )
}

export default App
