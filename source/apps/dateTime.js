let currentTime;

let clockWidget = document.getElementById("widget-time-clock");
let clockLaunchwall = document.getElementById("cube-launchwall-clock");
let dateWidget = document.getElementById("widget-time-date");
let rhombusClock = document.getElementById("rhombus-clock-widget");
let launchwallDayNum = document.getElementById("cube-launchwall-num");
let launchwallDayName = document.getElementById("cube-launchwall-day");

const fetchTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const time = `${hours}:${minutes}`;
    clockWidget.innerHTML = time;
    clockLaunchwall.innerHTML = time;
}


const fetchDate = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("en-GB");
    const date = new Date();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName = daysOfWeek[date.getDay()];
    const dayNumber = date.getDate();

    dateWidget.innerHTML = formattedDate;
    launchwallDayNum.innerHTML = dayNumber;
    launchwallDayName.innerHTML = dayName;
}

fetchDate();
fetchTime();
setInterval(fetchTime, 1000);
setInterval(fetchDate, 3600000);