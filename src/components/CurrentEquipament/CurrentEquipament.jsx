import { useState } from "react"




const CurrentEquipament = props => {

    const [date,setDate] = useState("");

    function isDateValid(){
        const reservationDate = new Date(date);
        const currentDate = new Date(Date.now());
        const dateDiff = (Number(reservationDate.getTime()) - Number(currentDate.getTime())) / (1000 * 3600 * 24);
        return (dateDiff <= 7);
    }

    return(
    <div id="black-screen">
        <div id="current-equipament-container">
            <h1>Reservar</h1>
            <form>
                <input value={date} onChange={e => setDate(e.target.value)} type="date" />
                {!isDateValid() && <p className="warning">A data de devoluçâo deve ser no maximo 7 dias a partir da data atual</p>}
            </form>
            <p>{"Voce realmente deseja reservar " + props.currentEquipament.name + "?"}</p>
            <button>Reservar</button>
        </div>
    </div>
    )
}


export default CurrentEquipament

