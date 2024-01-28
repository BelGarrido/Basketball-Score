let scoreHomeCount = document.getElementById("score-home")
let scoreGuestCount = document.getElementById("score-guest")
let scoreHome = 0
let scoreGuest = 0

// funciones botones HOME

function add1H(){
    scoreHome += 1
    scoreHomeCount.textContent = scoreHome
}

function add2H(){
    scoreHome += 2
    scoreHomeCount.textContent = scoreHome
}

function add3H(){
    scoreHome += 3
    scoreHomeCount.textContent = scoreHome
}

// funciones botones GUEST

function add1G(){
    scoreGuest += 1
    scoreGuestCount.textContent = scoreGuest
}

function add2G(){
    scoreGuest += 2
    scoreGuestCount.textContent = scoreGuest
}

function add3G(){
    scoreGuest += 3
    scoreGuestCount.textContent = scoreGuest
}


function newGame(){
    scoreGuest = 0
    scoreHome = 0
    scoreHomeCount.textContent = scoreHome
    scoreGuestCount.textContent = scoreGuest
}


