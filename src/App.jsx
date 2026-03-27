import React from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { About } from './pages/About'

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Footer />
    </>
  )
}