import { useContext, useState } from "react"
import "./LoginForm.css"
import { CurrentSection } from "../../App";




const LoginForm = _ => {
    const [ra, setRa] = useState("");
    const [password, setPassword] = useState("");
    const [currentSection,setCurrentSection] = (useContext(CurrentSection));

    const submitForm = e => {
        e.preventDefault();
        setCurrentSection("Newsletter")
    }

    return (
        <div id="form-container">
            <form id="login-form">
                <label htmlFor="ra">RA</label>
                <input value={ra} onChange={e => setRa(e.target.value)} type="text" id="ra">
                </input>
                <label htmlFor="password">Senha</label>
                <input value={password} onChange={e => {setPassword(e.target.value)}} type="password" id="password" />
                <button id="send-button" onClick={submitForm}>Login</button>
            </form>
        </div>
    )
}


export default LoginForm