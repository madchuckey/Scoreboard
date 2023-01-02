let homeScore = document.getElementById("home-counter");
let guestScore = document.getElementById("guest-counter");
let homeScoreBtnOne = document.getElementById("home-score-btn-1");
let guestScoreBtnTwo = document.getElementById("guest-score-btn-1");
let home = 0;
let guest = 0;

function homeBtn1() {
    home += 1;
    homeScore.textContent = home;
}

function homeBtn2() {
    home += 2;
    homeScore.textContent = home;
}

function homeBtn3() {
    home += 3;
    homeScore.textContent = home;
}

function guestBtn1() {
    guest += 1;
    guestScore.textContent = guest;
}

function guestBtn1() {
    guest += 1;
    guestScore.textContent = guest;
}

function guestBtn2() {
    guest += 2;
    guestScore.textContent = guest;
}

function guestBtn3() {
    guest += 3
    guestScore.textContent = guest
}
