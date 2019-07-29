// elements 

const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const focus = document.getElementById('focus');
const body = document.getElementById('body')

const timeFunc = () => {

    const today = new Date();
    const hour = today.getHours();
    const min = today.getMinutes();
    const sec = today.getSeconds();


    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;
    setTimeout(timeFunc, 1000)
}

const addZero = (n) => {
    return Number(n) < 10 ? '0' + n : n;
}
const background = () => {
    const today = new Date();
    n = Number(today.getHours());
    if (n < 12) {
        greeting.innerHTML = 'Good Morning'
        body.background = `images/morning.jpg`
        body.style.color = 'white'

    } else if (n < 18) {
        greeting.innerHTML = 'Good Afternoon'
        body.background = `images/afternoon.jpg`
        body.style.color = 'white'
    } else {
        greeting.innerHTML = 'Good Evening'
        body.background = `images/evening.jpg`
        body.style.color = 'white'
    }
}
const getName = () => {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name')
    }

}
const getFocus = () => {
    if (localStorage.getItem('name') === null) {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus')
    }
}

function setName(e) {
    if (e.type === 'keypress') {
        if (e.keyCode === 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);

    }
}

function setFocus(e) {
    if (e.type === 'keypress') {
        if (e.keyCode === 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);

    }
}
name.addEventListener('keypress', setName)
name.addEventListener('blur', setName)
focus.addEventListener('keypress', setFocus)
focus.addEventListener('blur', setFocus)

timeFunc();
background();
getName();
getFocus();