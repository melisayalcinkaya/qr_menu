import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/navbar/navbar.jsx'
import SearchBar from './Components/SearchBar/SearchBar.jsx'
function App() {
  //js kodları returnun dışında yazılır
  return (
    <>
      {/* Bu kısımda HTML kodları yazılır */}
      <Navbar />
      <SearchBar />
    </>
  )
}

export default App
