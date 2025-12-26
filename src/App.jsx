import Navbar from './components/Navbar'
import About from './pageses/About'
import Footer from './pageses/Footer'
import Home from './pageses/Home'
import Project from './pageses/Project'
import Skill from './pageses/Skill'
import Contact from './pageses/Contact'
// import Background from './components/Background'
import Cursor from './components/Cursor'

function App() {
 

  return (
    <>
    <div className='relative gradient text-white'>
      <Cursor/>
     


      <Navbar/>
      <Home/>
      <About/>
      <Skill/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
    </>
  )
}

export default App
