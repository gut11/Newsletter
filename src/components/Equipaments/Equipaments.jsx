import React, { useEffect, useState } from "react";
import Equipament from "../Equipament/Equipament"
import "./Equipaments.css"
import CurrentEquipament from "../CurrentEquipament/CurrentEquipament";
import { backend } from "../LoginForm/LoginForm";








const Equipaments = () => {
    let counter = 0;

    const [currentEquipament, setCurrentEquipament] = useState(false);
    const [equipaments,setEquipaments] = useState([]);

    const fetchEquipaments = () => {
      fetch(backend + "/findall").then(response => {
        return response.json();
      }).then(json => {
        console.log(json)
        setEquipaments(json)
      })
    }

    useEffect(fetchEquipaments,[]);
    return (
        <div id="equipaments-container">
            <h1 className="gradient">Reserva de equipamentos</h1>
            <div id="equipaments-table">
                <div id="equipaments-collum-top">
                    <div id="name-collum-top" className="collum-name">Nome
                    </div>
                    <div id="categories-collum-top" className="collum-category">Categoria</div>
                    <div id="qtd-collum-top" className="collum-qtd">Quantidade</div>
                </div>
                {equipaments.map(equipament => {
                    if (counter % 2 == 0) {
                        counter++;
                        return <Equipament currentEquipamentObject={{ currentEquipament, setCurrentEquipament }} bg={"white"} name={equipament.nome} qtd={equipament.quantidade} category={equipament.categoria} id={equipament.id} key={equipament.nome}></Equipament>
                    }
                    else {
                        counter++;
                        return <Equipament currentEquipamentObject={{ currentEquipament, setCurrentEquipament }} bg={"rgba(80,80,80,0.05)"} name={equipament.nome} qtd={equipament.quantidade} category={equipament.categoria} id={equipament.id} key={equipament.nome}></Equipament>
                    }
                })}
            </div>
            {currentEquipament && <CurrentEquipament setCurrentEquipament={setCurrentEquipament} currentEquipament={currentEquipament}/>}
        </div>
    )
}


export default Equipaments