import { createContext, useState } from 'react'
import './App.css'
import LoginForm from './components/LoginForm/LoginForm'
import Navbar from './components/NavBar/Navbar';
import NewsLetter from './components/Newsletter/NewsLetter';
import Equipaments from './components/Equipaments/Equipaments';
import EventSection from './components/EventSection/EventSection';
import Perfil from './components/Perfil/Perfil';


export const CurrentSection = createContext("LoginForm");
export const LoggedIn = createContext("");
function App() {
  const currentSectionIterable = Object.values(useState("LoginForm"));
  const LoggedInIterable= Object.values(useState(""));

  const [loggedIn, setLoggedIn] = LoggedInIterable;
  const [currentSection, setCurrentSection] = currentSectionIterable;

  return (
    <>
      <LoggedIn.Provider value={LoggedInIterable}>
      <CurrentSection.Provider value={currentSectionIterable}>
        {currentSection != "LoginForm" && <Navbar></Navbar>}
        {currentSection == "LoginForm" && <LoginForm></LoginForm>}
        {currentSection == "Newsletter" && <NewsLetter></NewsLetter>}
        {currentSection == "Equipaments" && <Equipaments></Equipaments>}
        {currentSection == "Perfil" && <Perfil></Perfil>}
        {currentSection == "Events" && <EventSection></EventSection>}
      </CurrentSection.Provider>
      </LoggedIn.Provider>
    </>
  )
}

export default App
