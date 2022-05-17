
const student = localStorage.getItem('student')
const data = JSON.parse(student)
const btn = document.getElementById('btn')
// const name = document.getElementById('name')
const city = document.getElementById('city')
const email = document.getElementById('email')

name.innerHTML = data['name']
city.innerHTML = data['city']
email.innerHTML = data['email']

btn.addEventListener('click', () => {
    localStorage.removeItem('student')
    window.location.href = './index.html'
})