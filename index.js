document.getElementById("btnOne-El")
document.getElementById("btnTwo-El")
document.getElementById("btnThree-El")
document.getElementById("btnOneG-El")
document.getElementById("btnTwoG-El")
document.getElementById("btnThreeG-El")


let scoreHome = 0
let scoreGuest = 0

let scoreHomeEl = document.getElementById("scoreHome-El")
let scoreGuestEl = document.getElementById("scoreGuest-El")

function addOne() {
    let score= scoreHome += 1
    scoreHomeEl.textContent = score
}

function addTwo() {
    let score= scoreHome += 2
    scoreHomeEl.textContent = score
}

function addThree() {
    let score= scoreHome += 3
    scoreHomeEl.textContent = score
}

function addOneGuest() {
    let score= scoreGuest += 1
    scoreGuestEl.textContent = score
}

function addTwoGuest() {
    let score= scoreGuest += 2
    scoreGuestEl.textContent = score
}

function addThreeGuest() {
    let score= scoreGuest += 3
    scoreGuestEl.textContent = score

}
