const request = require('request');


const forcast = (city, call, iconic) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4013093f340dfd0ea3c4d9eccdc3dc0e`
request({url:url, json:true}, (err, res) => {
    if (err){
    call('Unable to connect to weather service!', undefined)
    } else if (res.body.name === undefined) {
        call('Unable to find location', undefined)
    } else {
    const temp =Math.round(res.body.main.temp - 273.15)
    const location=res.body.name
    const count=res.body.sys.country
    const hum =res.body.main.humidity
    const weather = res.body.weather[0].description
    const icon = `http://openweathermap.org/img/wn/${res.body.weather[0].icon}@2x.png`
    call( undefined, {a:`${weather}`,
                    c:`It is currently ${temp} degress out in ${location}, ${count} . There is a ${hum}% humidity.`,
                    b:`${icon}`})
    }
})
}

module.exports =forcast