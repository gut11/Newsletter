import { useContext, useState } from "react"
import "./LoginForm.css"
import { CurrentSection, LoggedIn } from "../../App";

export const backend = "http://192.168.49.156:8080"


const LoginForm = _ => {
    const [ra, setRa] = useState("");
    const [password, setPassword] = useState("");
    const [tryedToLogin, setTryedToLogin] = useState(false);
    const [currentSection, setCurrentSection] = (useContext(CurrentSection));
    const [loggedIn,setLoggedIn] = useContext(LoggedIn);

    const submitForm = e => {
        e.preventDefault();
        const loginData = { ra, password }
        console.log(JSON.stringify(loginData))
        fetch(backend + "/log", {
            method: "POST",
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            },
            
            body: JSON.stringify(loginData),
        }).then(response => {
            if (response.status == 202) {
                setLoggedIn(loginData.ra)
                setCurrentSection("Newsletter")
            } else {
                setTryedToLogin(true);
            }
        })
    }

    return (
        <div id="form-container">
            <div className="background-select"></div>
            <img id="idp-login-logo" src="/IDP-logo-blue.svg" alt="idp-logo" />
            <form id="login-form">
                <div id="login-symbol-container">
                    <svg id="login-symbol" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" /></svg>
                    <input placeholder="Registro Academico" value={ra} onChange={e => setRa(e.target.value)} type="text" id="ra">
                    </input>
                </div>
                <div id="password-symbol-container">
                    <svg id="password-symbol" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" /></svg>
                    <input placeholder="Password" value={password} onChange={e => { setPassword(e.target.value) }} type="password" id="password" />
                </div>
                {tryedToLogin && <p className="warning">Senha incorreta</p>}
                <button id="send-button" onClick={submitForm}>Login</button>
            </form>
        </div>
    )
}


export default LoginForm