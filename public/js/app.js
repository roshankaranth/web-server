console.log("client side js file loaded")


const weather_form = document.querySelector('form')
const search = document.querySelector('input')
const msg1 = document.querySelector('#message-1')
const msg2 = document.querySelector('#message-2')

weather_form.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    msg1.textContent = 'loading..'
    msg2.textContent = ''
    fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                msg1.textContent = data.error
            } else {
                msg1.textContent = `${data.location.name} ${data.location.region}, ${data.location.country}`
                msg2.textContent = `Today's temperature is ${data.current.temp_c} and the humidity is ${data.current.humidity}.  `

            }
        })
    })
})

