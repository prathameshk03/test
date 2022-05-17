
check.style.display = "none"
const btn = document.getElementById('btn');
const sendData = () => {
    let xhr = new XMLHttpRequest()
    let data = JSON.stringify({
        city,
        email,
    })

    xhr.open('POST', 'http://localhost:5500//storedata', true);

    xhr.setRequestHeader("Content-Type", 'application/json');

    xhr.send(data)
    console.log(this.responseText)
}


btn.addEventListener('click', () => {

    let city = document.getElementById('city').value;
    let email = document.getElementById('email').value
    let check = document.getElementById('check')

    if (!city || !email) {
        check.style.display = "block"
    }
    else {
        localStorage.setItem('student', JSON.stringify({
            city,
            email,
        }))

        console.log(localStorage.getItem('student'))

        sendData();
        console.log(JSON.parse(localStorage.getItem('student')))
        if (localStorage.getItem('student')) {
            window.location.href = './display.html'
        }
        else {
            check.style.display = "block"
        }
    }


})


