import { useContext } from "react"
import "./Navbar.css"
import { CurrentSection } from "../../App";



const Navbar = _ => {
    const sections = ["Equipamentos", "Newsletter", "Eventos"]
    const [currentSection,setCurrentSection] = useContext(CurrentSection);

    const changeCurrentSection = section => {
        if(section == "equipaments")
            setCurrentSection("Equipaments")
        else if(section == "newsletter")
            setCurrentSection("Newsletter")
        else if(section == "events")
            setCurrentSection("Events")
        else if(section == "perfil")
            setCurrentSection("Perfil")
    }

    return (
        <div id="nav-container">
            <img src="/IDP-logo-white.svg" alt="idp-logo"></img>
            <ul>
                <a className="link" onClick={_ => changeCurrentSection("equipaments")}><li>Equipamentos</li></a>
                <a className="link" onClick={_ => changeCurrentSection("newsletter")}><li>Newsletter</li></a>
                <a className="link" onClick={_ => changeCurrentSection("events")}><li>Eventos</li></a>
                <a className="link" onClick={_ => changeCurrentSection("perfil")}><li>Perfil</li></a>
            </ul>
        </div>
    )
}


export default Navbar