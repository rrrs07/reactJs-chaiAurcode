import React from 'react'

import './App.css'
import Sidebar from './components/sidebar/Sidebar'
import Home from './components/home/Home'
import Portfolio from './components/portfolio/Portfolio'
import Resume from './components/resume/Resume'
import Contact from './components/contact/Contact'
import About from './components/about/About'
import Projects from './components/projects/Projects'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Sidebar />
      <main className='main'></main>
      <Home />
      <About />
      <Projects />
      <Resume />
      <Portfolio />
      <Contact />
      

    </>
  )
}

export default App
