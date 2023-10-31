
// const date = "10 November 2023 10:20 PM";
const date = "15 November 2029 01:20 PM";
document.getElementById('hed').innerHTML = date;




const inp = document.querySelectorAll('input')
const clock = () => {
    const target = new Date(date);
    const newDate = new Date();
    const dif = (target - newDate) / 1000;
    const month = Math.floor(dif / 18000 / 100)
    const days = Math.floor(dif / 3600 / 24);
    const hr = (Math.floor(dif / 3600) % 24);
    const mnt = (Math.floor(dif / 60) % 60)
    const sec = (Math.floor(dif) % 60)
    inp[0].value = month;
    inp[1].value = days;
    inp[2].value = hr;
    inp[3].value = mnt;
    inp[4].value = sec;
}

clock();


setInterval(() => {
    console.log(clock())
    clock()
}, 1000);