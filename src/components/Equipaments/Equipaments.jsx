import React, { useState } from "react";
import Equipament from "../Equipament/Equipament"
import "./Equipaments.css"
import CurrentEquipament from "../CurrentEquipament/CurrentEquipament";

const mockData =[
    {
      "id": 1,
      "category": "Notebook",
      "name": "Dell XPS 13",
      "qtd": 5
    },
    {
      "id": 2,
      "category": "Microphone",
      "name": "Shure SM58",
      "qtd": 3
    },
    {
      "id": 3,
      "category": "Cable",
      "name": "HDMI Cable",
      "qtd": 10
    },
    {
      "id": 4,
      "category": "Projector",
      "name": "Epson PowerLite 1781W",
      "qtd": 2
    },
    {
      "id": 5,
      "category": "Headphones",
      "name": "Sony WH-1000XM4",
      "qtd": 8
    },
    {
      "id": 6,
      "category": "Camera",
      "name": "Canon EOS Rebel T7i",
      "qtd": 4
    },
    {
      "id": 7,
      "category": "Speaker",
      "name": "JBL Flip 5",
      "qtd": 6
    },
    {
      "id": 8,
      "category": "Monitor",
      "name": "LG 27UK850-W",
      "qtd": 7
    },
    {
      "id": 9,
      "category": "Keyboard",
      "name": "Logitech MX Keys",
      "qtd": 9
    },
    {
      "id": 10,
      "category": "Printer",
      "name": "HP LaserJet Pro MFP M428fdw",
      "qtd": 1
    }
  ] 




const Equipaments = () => {
    let counter = 0;

    const [currentEquipament, setCurrentEquipament] = useState(false);

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
                {mockData.map(equipament => {
                    if (counter % 2 == 0) {
                        counter++;
                        return <Equipament currentEquipamentObject={{ currentEquipament, setCurrentEquipament }} bg={"white"} name={equipament.name} qtd={equipament.qtd} category={equipament.category} id={equipament.id} key={equipament.name}></Equipament>
                    }
                    else {
                        counter++;
                        return <Equipament currentEquipamentObject={{ currentEquipament, setCurrentEquipament }} bg={"rgba(80,80,80,0.05)"} name={equipament.name} qtd={equipament.qtd} category={equipament.category} id={equipament.id} key={equipament.name}></Equipament>
                    }
                })}
            </div>
            {currentEquipament && <CurrentEquipament currentEquipament={currentEquipament}/>}
        </div>
    )
}


export default Equipaments