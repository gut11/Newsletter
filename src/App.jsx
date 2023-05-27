import { createContext, useState } from 'react'
import './App.css'
import LoginForm from './components/LoginForm/LoginForm'


export const CurrentSection = createContext("LoginForm");
function App() {
  const currentSectionIterable = Object.values(useState("LoginForm"));
  const [currentSection, setCurrentSection] = currentSectionIterable;

  return (
    <>
      <CurrentSection.Provider value={currentSectionIterable}>
        {currentSection == "LoginForm" && <LoginForm></LoginForm>}
        {currentSection == "Newsletter" && <NewsLetter></NewsLetter>}
        {currentSection == "Equipament" && <Equipament></Equipament>}
      </CurrentSection.Provider>
    </>
  )
}

export default App
