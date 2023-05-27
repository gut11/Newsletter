import { useContext, useState } from "react"
import { backend } from "../LoginForm/LoginForm";
import { LoggedIn } from "../../App";



const CurrentEquipament = props => {
    const [date,setDate] = useState("");
    const [loggedIn, setLoggedIn] = useContext(LoggedIn);
    const setCurrentEquipament = props.setCurrentEquipament;

    function isDateValid(){
        if(date == "")
            return true;
        const reservationDate = new Date(date);
        const currentDate = new Date(Date.now());
        const dateDiff = (Number(reservationDate.getTime()) - Number(currentDate.getTime())) / (1000 * 3600 * 24);
        return (dateDiff <= 7);
    }

    function reservateEquipament(data){
        console.log(data)
        fetch(backend + "/reserva", {
            method: "POST",
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            },
            
            body: JSON.stringify(data),
        }).then(response => {
            if (response.status == 202) {
                console.log("bananas de pijamas")
                setCurrentSection("Equipament")
            } else {
                console.log("deu ruim")
            }
        })
    }

    return(
    <div id="black-screen">
        <div id="current-equipament-container">
            <div onClick={() => {setCurrentEquipament(false)}} style={{position:"absolute", top:".5em", right: ".5em", cursor: "pointer"}}>X</div>
            <h1>Reservar</h1>
            <form>
                <input value={date} onChange={e => setDate(e.target.value)} type="date" />
                {!isDateValid() && <p className="warning">A data de devoluçâo deve ser no maximo 7 dias a partir da data atual</p>}
            </form>
            <p>{"Voce realmente deseja reservar " + props.currentEquipament.name + "?"}</p>
            <button onClick={() => {reservateEquipament({ra: loggedIn,idExternoProd:props.currentEquipament.id, dataTimeInicio:Date.now(), dataTimeFim:date})}}>Reservar</button>
        </div>
    </div>
    )
}


export default CurrentEquipament

