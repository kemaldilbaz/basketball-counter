let homeCount,guestCount
let homescore=0
let guestscore=0
homeCount= document.getElementById("home-count")
guestCount=document.getElementById("guest-count")
function homeAdd1(){
    homescore+=1;
    homeCount.textContent=homescore
}
function homeAdd2(){
    homescore+=2;
    homeCount.textContent=homescore
}
function homeAdd3(){
    homescore+=3;
    homeCount.textContent=homescore;
}
function guestAdd1(){
    guestscore+=1;
    guestCount.textContent=guestscore
}
function guestAdd2(){
    guestscore+=2;
    guestCount.textContent=guestscore
}
function guestAdd3(){
    guestscore+=3;
    guestCount.textContent=guestscore
}

