import './styles/main.scss'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Footer from './components/Footer'

import React from 'react';


function App() {

  return (
    <>
      <Header />
      <main className="home">
        <Hero />
        <Projects />
      </main>
      <Footer />
    </>
  )
}

export default App