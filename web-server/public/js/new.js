const weatform = document.querySelector('form')
const search = document.querySelector('input')
const message = document.querySelector('#forcast')
const message2 = document.querySelector('#weather')
const icon = document.querySelector('#myimg')






weatform.addEventListener('submit', (e)=>{
    e.preventDefault()
    const location = search.value
    if (location) {
        fetch(`/weather?city=${location}`).then((res)=>{
            res.json().then((data)=>{
                if(data.err){
                    message.textContent=data.err
                } else {
                    
                    message.textContent=data.forcast.c
                    message2.textContent=data.forcast.a
                    icon.src = data.forcast.b
                }
            })
        })
    }
})