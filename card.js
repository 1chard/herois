"use strict"

const herois = [
    'IronMan - Wounded, captured and forced to build a weapon by …make the world a safer, better place as Iron Man.',
    'Thanos - The Mad Titan Thanos, a melancholy, brooding indiv…he became more powerful than any of his brethren.',
    'SpiderMan - Peter’s relatively normal life changed abruptly du…it escaped and bit Peter before it was destroyed.',
    'Thor - As the Norse God of thunder and lightning, Thor wi…never, ever stop fighting for a worthwhile cause.',
    'CaptainAmerica - Vowing to serve his country any way he could, youn… living, breathing symbol of freedom and liberty.',
    'Anything - fjakfjkafjkajfkfjd'
]

const main = document.querySelector("main")

herois.forEach( (text, index, array) => {
    const card = document.createElement("div")

    card.classList.add("card")
    card.innerHTML = `<header>
        ${text.substring(0, text.indexOf('-') - 1)}
    </header>
    <main>
        ${text.substring(text.indexOf('-') + 1)}
    </main>
`

    main.appendChild(card)
})