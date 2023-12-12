AOS.init();

const eventTime = new Date("Dec 10, 2023 20:00:00");
const eventTimeStamp = eventTime.getTime();

const dateCount = setInterval(function(){
    const actualDate = new Date();
    const actualTimeStamp = actualDate.getTime();

    const eventDistance = eventTimeStamp - actualTimeStamp;
    const dayConversion = 1000 * 60 * 60 * 24;
    const hourConversion = 1000 * 60 * 60;
    const minuteConversion = 1000 * 60;

    const daysUntilEvent = Math.floor(eventDistance / dayConversion);
    const hoursUntilEvent = Math.floor(eventDistance % dayConversion / hourConversion);
    const minutesUntilEvent = Math.floor(eventDistance % hourConversion / minuteConversion);
    const secondsUntilEvent = Math.floor(eventDistance % minuteConversion / 1000)


    const counter = document.getElementById('counter');
    counter.innerHTML = `começa em ${daysUntilEvent}d ${hoursUntilEvent}h ${minutesUntilEvent}m ${secondsUntilEvent}s`;

    if (actualTimeStamp < 0) {
        clearInterval(dateCount);
        counter.innerHTML = "O EVENTO FOI FINALIZADO"
    }

}, 1000)