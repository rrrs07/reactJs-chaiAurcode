import React from 'react'

import './App.css'
import Sidebar from './components/sidebar/Sidebar'
import Home from './components/home/Home'

import Resume from './components/resume/Resume'
import Contact from './components/contact/Contact'
import About from './components/about/About'
import Projects from './components/projects/Project'



function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Sidebar />
      <main className='main'></main>
      <Home />
      <About />
      <Projects />
      <Resume />
      <Contact />
      

    </>
  )
}

export default App
