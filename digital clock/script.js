function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var day = now.getDate();
    var month = now.getMonth() + 1;
    var year = now.getFullYear();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    document.getElementsByClassName("hours")[0].innerHTML = hours;
    document.getElementsByClassName("minutes")[0].innerHTML = minutes;
    document.getElementsByClassName("seconds")[0].innerHTML = seconds;
    document.getElementsByClassName("day")[0].innerHTML = day;
    document.getElementsByClassName("month")[0].innerHTML = month;
    document.getElementsByClassName("year")[0].innerHTML = year;
}

updateClock();
setInterval(updateClock, 1000);
