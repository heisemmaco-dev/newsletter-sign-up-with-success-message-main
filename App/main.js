// get my dom, store in a variable
let form = document.body.querySelector('form')
let firstPage = document.body.querySelector('.first_section')
let successfullPage = document.body.querySelector('.second_section')


form.addEventListener('submit', e => {
    e.preventDefault()

    let email = form.querySelector('input').value
    let errorMassage = form.querySelector('span')
    let btn = form.querySelector('button')

    if (email.trim() === '') {
        form.classList.add('error')
        errorMassage.innerHTML = 'Email cannot be empty'
        errorMassage.style.color = 'red'
     } else if (!valid(email)) {
        form.classList.add('error')
        errorMassage.innerHTML = 'Valid email required'
        errorMassage.style.color = 'red'
     } else if (valid(email)) {
        errorMassage.style.color = 'green'
        errorMassage.innerHTML = 'Email comfirm'

        setTimeout(() => {
        form.classList.remove('error')
        }, 1000);

        btn.innerHTML = 'loading...'
        let emailValue = successfullPage.querySelector('strong')

        setTimeout(() => {
            firstPage.style.display = 'none'
            successfullPage.style.display = 'flex'
            emailValue.innerHTML = `${email}.`

            }, 1000);
     }

     let dismissBtn = successfullPage.querySelector('button')

     dismissBtn.addEventListener('click', () => {
       location.reload();
     })

})



function valid(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(String(email).toLocaleLowerCase());
}