let clock = () => {

    let date = new Date();

    let day = date.getDay();
    let specificDay = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    specificDay = specificDay + "th";

    if (day == 0) {

        day = "Sunday";

    } else if (day == 1) {

        day = "Monday";

    } else if (day == 2) {

        day = "Tuesday";

    } else if (day == 3) {

        day = "Wednesday";

    } else if (day == 4) {

        day = "Thursday";

    } else if (day == 5) {

        day = "Friday";

    } else if (day == 6) {

        day = "Saturday";

    }

    if (month == 0) {

        month = "January";

    } else if (month == 1) {

        month = "February";

    } else if (month == 2) {

        month = "March";

    } else if (month == 3) {

        month = "April";

    } else if (month == 4) {

        month = "May";

    } else if (month == 5) {

        month = "June";

    } else if (month == 6) {

        month = "July";

    } else if (month == 7) {

        month = "August";

    } else if (month == 8) {

        month = "September";

    } else if (month == 9) {

        month = "October";

    } else if (month == 10) {

        month = "November";

    } else if (month == 11) {

        month = "December";
    }

    let time1 = `${day} ${specificDay} ${month}, ${year}`;

    document.getElementById("clock1").innerText = time1;

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (hours < 10) {

        hours = "0" + hours;
    }

    if (minutes < 10) {

        minutes = "0" + minutes;
    }

    if (seconds < 10) {

        seconds = "0" + seconds;
    }

    let time2 = `${hours}.${minutes}.${seconds}`;

    document.getElementById("clock2").innerText = time2;



    if (hours < 12) {

        seconds = seconds + " AM";

    } else {

        hours = hours - 12;
        seconds = seconds + " PM";

    }

    let time3 = `${hours}:${minutes}:${seconds}`;

    document.getElementById("clock3").innerText = time3;
    
}

clock();

setInterval(clock, 1000);