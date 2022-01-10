setInterval(() => {
    const time = document.getElementById('time');
    const format = t => {
        if (t < 10) t = '0' + t;
        return t;
    }
    let now = new Date();

    let year = now.getFullYear();
    let month = format(now.getMonth() + 1);
    let day = format(now.getDate());
    let wday = now.getDay();
    let arr = ['일', '월', '화', '수', '목', '금', '토'];

    let hour = now.getHours();
    let min = format(now.getMinutes());
    let sec = format(now.getSeconds());
    let msc = parseInt(now.getMilliseconds() / 100);
    let ap = '';

    if (hour < 12) ap = 'AM'; else ap = 'PM';
    hour = format(hour);

    time.innerText = `${year}-${month}-${day} (${arr[wday]})\n${ap} ${hour}:${min}:${sec}.${msc}`;
}, 100);
