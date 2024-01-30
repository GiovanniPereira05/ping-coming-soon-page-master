let email = document.getElementById('iemail')
let send = document.getElementById('submit')
let error = document.getElementById('errorMessage')


function submit(){
if (email.value.length === 0 || !email.value.includes('@')){
    error.innerHTML = 'Please provide a valid Email'
    email.style.borderColor = 'hsl(354, 100%, 66%)'
} else{
    email.style.borderColor = ''
    error.innerHTML = ''
}
}

send.addEventListener('click', submit);