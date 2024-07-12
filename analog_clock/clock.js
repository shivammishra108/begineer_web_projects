let hr = document.getElementById("hour");
let min = document.getElementById("minute");
let sec = document.getElementById("sec");

function displayTime(){
    let date = new Date();

    //Getting hour,minute,second from data
    let hh = date.getHours();
    let mm = date.getMinutes();
    ss = date.getSeconds();

    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRoatation = 6*ss;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRoatation}deg)`;
}

setInterval(displayTime,1000);