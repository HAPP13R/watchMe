setInterval(() => {
    const watch = document.getElementById('watch');
    const format = t => {
        if (t < 10) t = '0' + t;
        return t;
    }
    let now = new Date();
    let hour = now.getHours();
    let min = format(now.getMinutes());
    let sec = format(now.getSeconds());
    let msc = parseInt(now.getMilliseconds() / 100);

    let ap = '';
    
    if (hour < 12) ap = 'AM'; else ap = 'PM';
    hour = format(hour);

    watch.innerHTML = `${ap} ${hour}:${min}:${sec}.${msc}`;
}, 100);

