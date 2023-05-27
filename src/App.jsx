import { createContext, useState } from 'react'
import './App.css'
import LoginForm from './components/LoginForm/LoginForm'
import Navbar from './components/NavBar/Navbar';
import NewsLetter from './components/Newsletter/NewsLetter';
import Equipaments from './components/Equipaments/Equipaments';


export const CurrentSection = createContext("LoginForm");
function App() {
  const currentSectionIterable = Object.values(useState("LoginForm"));
  const [currentSection, setCurrentSection] = currentSectionIterable;

  return (
    <>
      <CurrentSection.Provider value={currentSectionIterable}>
        {currentSection != "LoginForm" && <Navbar></Navbar>}
        {currentSection == "LoginForm" && <LoginForm></LoginForm>}
        {currentSection == "Newsletter" && <NewsLetter></NewsLetter>}
        {currentSection == "Equipaments" && <Equipaments></Equipaments>}
      </CurrentSection.Provider>
    </>
  )
}

export default App
