console.log("client side js file loaded")


const weather_form = document.querySelector('form')
const search = document.querySelector('input')
weather_form.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log(data.error)
            } else {
                console.log(data)
            }
        })
    })
})