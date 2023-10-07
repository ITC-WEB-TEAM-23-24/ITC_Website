import React from 'react'
import TT_cards from './tt_cards/tt_cards'
import './style.css'

function TT_Pack() {
    const cards = [
        {
            title: "IITB Racing Team1",
            body: "Welcome to IIT Bombay Racing, India's premier Formula Student Electric team. Our mission is to revolutionize electric mobility in India by focusing on sustainable technologies and innovations. We are dedicated to participating in prestigious international competitions such as Formula Student, where we showcase our cutting-edge electric car designs.",
            img: "https://iitbrocketteam.in/rtlogo1.png",
            id: "tt_card1"
        },
        {
            title: "IITB Rocket Team2",
            body: "We are the IITB Rocket Team, a group of more than 30 rocket enthusiasts hailing from diverse specialties. We are proud to be recognized as India's first INSPACe and PMO approved rocket team. Our collective mission is to revolutionize the field of rocket engineering within the country and ignite a passion for this discipline among students at all levels of education.",
            img: "https://iitbrocketteam.in/rtlogo1.png",
            id: "tt_card2"
        },
        {
            title: "IITB Racing Team3",
            body: "Welcome to IIT Bombay Racing, India's premier Formula Student Electric team. Our mission is to revolutionize electric mobility in India by focusing on sustainable technologies and innovations. We are dedicated to participating in prestigious international competitions such as Formula Student, where we showcase our cutting-edge electric car designs.",
            img: "https://iitbrocketteam.in/rtlogo1.png",
            id: "tt_card3"
        },
        {
            title: "IITB Rocket Team4",
            body: "We are the IITB Rocket Team, a group of more than 30 rocket enthusiasts hailing from diverse specialties. We are proud to be recognized as India's first INSPACe and PMO approved rocket team. Our collective mission is to revolutionize the field of rocket engineering within the country and ignite a passion for this discipline among students at all levels of education.",
            img: "https://iitbrocketteam.in/rtlogo1.png",
            id: "tt_card4"
        },
        {
            title: "IITB Racing Team5",
            body: "Welcome to IIT Bombay Racing, India's premier Formula Student Electric team. Our mission is to revolutionize electric mobility in India by focusing on sustainable technologies and innovations. We are dedicated to participating in prestigious international competitions such as Formula Student, where we showcase our cutting-edge electric car designs.",
            img: "https://iitbrocketteam.in/rtlogo1.png",
            id: "tt_card5"
        },
        {
            title: "IITB Rocket Team6",
            body: "We are the IITB Rocket Team, a group of more than 30 rocket enthusiasts hailing from diverse specialties. We are proud to be recognized as India's first INSPACe and PMO approved rocket team. Our collective mission is to revolutionize the field of rocket engineering within the country and ignite a passion for this discipline among students at all levels of education.",
            img: "https://iitbrocketteam.in/rtlogo1.png",
            id: "tt_card6"
        },
        {
            title: "IITB Racing Team7",
            body: "Welcome to IIT Bombay Racing, India's premier Formula Student Electric team. Our mission is to revolutionize electric mobility in India by focusing on sustainable technologies and innovations. We are dedicated to participating in prestigious international competitions such as Formula Student, where we showcase our cutting-edge electric car designs.",
            img: "https://iitbrocketteam.in/rtlogo1.png",
            id: "tt_card7"
        },
        {
            title: "IITB Rocket Team8",
            body: "We are the IITB Rocket Team, a group of more than 30 rocket enthusiasts hailing from diverse specialties. We are proud to be recognized as India's first INSPACe and PMO approved rocket team. Our collective mission is to revolutionize the field of rocket engineering within the country and ignite a passion for this discipline among students at all levels of education.",
            img: "https://iitbrocketteam.in/rtlogo1.png",
            id: "tt_card8"
        },
        {
            title: "IITB Rocket Team9",
            body: "We are the IITB Rocket Team, a group of more than 30 rocket enthusiasts hailing from diverse specialties. We are proud to be recognized as India's first INSPACe and PMO approved rocket team. Our collective mission is to revolutionize the field of rocket engineering within the country and ignite a passion for this discipline among students at all levels of education.",
            img: "https://iitbrocketteam.in/rtlogo1.png",
            id: "tt_card9"
        },
        {
            title: "IITB Rocket Team10",
            body: "We are the IITB Rocket Team, a group of more than 30 rocket enthusiasts hailing from diverse specialties. We are proud to be recognized as India's first INSPACe and PMO approved rocket team. Our collective mission is to revolutionize the field of rocket engineering within the country and ignite a passion for this discipline among students at all levels of education.",
            img: "https://iitbrocketteam.in/rtlogo1.png",
            id: "tt_card10"
        },
        {
            title: "IITB Racing Team11",
            body: "Welcome to IIT Bombay Racing, India's premier Formula Student Electric team. Our mission is to revolutionize electric mobility in India by focusing on sustainable technologies and innovations. We are dedicated to participating in prestigious international competitions such as Formula Student, where we showcase our cutting-edge electric car designs.",
            img: "https://iitbrocketteam.in/rtlogo1.png",
            id: "tt_card11"
        },
        {
            title: "IITB Rocket Team12",
            body: "We are the IITB Rocket Team, a group of more than 30 rocket enthusiasts hailing from diverse specialties. We are proud to be recognized as India's first INSPACe and PMO approved rocket team. Our collective mission is to revolutionize the field of rocket engineering within the country and ignite a passion for this discipline among students at all levels of education.",
            img: "https://iitbrocketteam.in/rtlogo1.png",
            id: "tt_card12"
        },
    ]
    return (
        <div className='tt_pack'>
            <div className='cards'>
                {cards.map((card) => (
                    <div className="tt_pack">
                        <TT_cards 
                            title={card.title} 
                            body={card.body} 
                            img={card.img} 
                            ids={card.id}
                        />
                    </div>
                ))}
            </div>           
            <div className='sidebar'>
                <span>TECH TEAMS</span>
            </div>

        </div>
    )
}

export default TT_Pack