
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/shared/Navbar'
import Footer from './components/shared/Footer'


function App() {


  return (
    <div className='max-w-7xl mx-auto' >
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>

      {/* <h1 className='text-6xl text-red-900 font-bold'>Job search</h1> */}
    </div>

  )
}

export default App
