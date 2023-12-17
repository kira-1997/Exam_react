import './App.css'
import { Routes , Route } from "react-router-dom";
import Home from './Pages/Home';
import Det from './Pages/Det';
import Cart from './Pages/Cart';
import Check from './Pages/Check';
import Nav from './Pages/Nav';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Foo from './Pages/Foo';
function App() {

  return (
    <>
   <Nav></Nav>
       <Routes>
       <Route path='/Details/:id' element={<Det/>} ></Route>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/Cart' element={<Cart/>} ></Route>
        <Route path='/Check' element={<Check/>} ></Route>
        <Route path='/SignIn' element={<SignIn/>} ></Route>
        <Route path='/SignUp' element={<SignUp/>} ></Route>


       </Routes>
     <Foo></Foo>
    </>
  )
}

export default App
