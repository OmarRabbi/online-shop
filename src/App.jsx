import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Shop from './pages/Shop'
import Header from './components/Header'
import Category from './pages/Category'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Login from './pages/Login'
import men_banner from './assets/banner_mens.png'
import women_banner from './assets/banner_womens.png'
import kid_banner from './assets/banner_kids.png'
import Footer from './components/Footer'
function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<Category banner={men_banner} category="men"/>}/>
        <Route path='/womens' element={<Category banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<Category banner={kid_banner} category="kid"/>}/>
        <Route path='/product' element={<Products/>}>
          <Route path=':productId' element={<Products/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
