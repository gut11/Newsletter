import React from "react";
import Equipament from "../Equipament/Equipament"
import "./Equipaments.css"

const mockData = [
    {
        "category": "Notebook",
        "name": "Dell XPS 13",
        "qtd": 5
    },
    {
        "category": "Microphone",
        "name": "Shure SM58",
        "qtd": 3
    },
    {
        "category": "Cable",
        "name": "HDMI Cable",
        "qtd": 10
    },
    {
        "category": "Projector",
        "name": "Epson PowerLite 1781W",
        "qtd": 2
    },
    {
        "category": "Headphones",
        "name": "Sony WH-1000XM4",
        "qtd": 8
    },
    {
        "category": "Camera",
        "name": "Canon EOS Rebel T7i",
        "qtd": 4
    },
    {
        "category": "Speaker",
        "name": "JBL Flip 5",
        "qtd": 6
    },
    {
        "category": "Monitor",
        "name": "LG 27UK850-W",
        "qtd": 7
    },
    {
        "category": "Keyboard",
        "name": "Logitech MX Keys",
        "qtd": 9
    },
    {
        "category": "Printer",
        "name": "HP LaserJet Pro MFP M428fdw",
        "qtd": 1
    }
]


const Equipaments = () => {
    return (
        <>
            <div id="equipaments-collum-top">
                <div id="name-collum-top" className="collum-name">Nome
                </div>
                <div id="categories-collum-top" className="collum-category">Categoria</div>
                <div id="qtd-collum-top" className="collum-qtd">Quantidade</div>
            </div>
            {mockData.map(equipament => {
                return <Equipament name={equipament.name} qtd={equipament.qtd} category={equipament.category} key={equipament.name}></Equipament>
            })}
        </>
    )
}


export default Equipaments