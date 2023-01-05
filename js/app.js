
const newYears = '31 December 2023';

const countDown = () => {

    const newYearDate  = new Date(newYears);
    const currentDate  = new Date();

    const totalSeconds = Math.abs(newYearDate -  currentDate) / 1000;

    const days     = Math.floor(totalSeconds / 3600 / 24);
    const hours    = Math.floor(totalSeconds / 3600) % 24;
    const minutes  = Math.floor(totalSeconds /60) % 60 ;
    const seconds  = Math.floor(totalSeconds) % 60;

    document.getElementById('days').innerHTML    = days;
    document.getElementById('hours').innerHTML   = formatTime(hours);
    document.getElementById('minutes').innerHTML = formatTime(minutes);
    document.getElementById('seconds').innerHTML = formatTime(seconds);

}
 const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
}

document.addEventListener("DOMContentLoaded", () => {
    setInterval(countDown,1000);
})
