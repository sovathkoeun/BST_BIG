var timer = () => {
    let days = new Date();
    let hours = (days.getHours() % 12).toString();
    let minutes = days.getMinutes().toString();
    let second = days.getSeconds().toString();
    
    if (hours.length < 2) {
        hours = '0' + hours;
    }
    if (minutes.length < 2) {
        minutes = '0' + minutes;
    }
    if (second.length < 2) {
        second = '0' + second;
    }

    // result clock;
    let result = document.getElementById("timer");
    let message = document.getElementById('message');
    if (days.getHours() < 12) {
        result.innerHTML = hours + ":" + minutes + ":" + second + "  " + "AM";
        message.innerHTML = "Good morning";
    } else {
        result.innerHTML = hours + ":" + minutes + ":" + second + "  " + "PM";
        message.innerHTML = "Good afternoon";
    }
    if (days.getHours() == 12) {
        result.innerHTML = days.getHours() + ":" + minutes + ":" + second + " " + "PM";
        message.innerHTML = "Good afternoon";
    }
    if (days.getHours() >= 17) {
    result.innerHTML = hours + ":" + minutes + ":" + second + " " + "PM";
        message.innerHTML = "Good evening";
    }
    if(days.getHours() >= 19) {
      result.innerHTML = hours + ":" + minutes + ":" + second + " " + "PM";
      message.innerHTML = "Good nigth";
    }
 }
setInterval(timer, 1000);