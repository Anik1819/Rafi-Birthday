const birthday = "8 October 2022";

function countdown() {
    const birthDay = new Date(birthday);
    const currentDate = new Date();
    const totalSeconds = (birthDay - currentDate) / 1000;


    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor(totalSeconds % (3600 * 24) / 3600);
    const minutes = Math.floor(totalSeconds % 3600 / 60);
    const seconds = Math.floor(totalSeconds % 60);

    document.getElementById("days").innerText = formatTime(days);

    document.getElementById("minutes").innerText = formatTime(minutes);
    document.getElementById("hours").innerText = formatTime(hours);
    document.getElementById("Seconds").innerText = formatTime(seconds);

}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}
setInterval(countdown, 1000);
countdown();