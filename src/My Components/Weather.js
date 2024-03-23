import React, {useState} from 'react'

export const Weather = () => {

  const api = {
    key: "a69b42de595dd8840932b56c7166db62",
    base: "https://api.openweathermap.org/data/2.5/"
  }
  const [search, setSearch] = useState("");
  const [weather, setSetweater] = useState("");
  const searchPressed = () =>{
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
    .then((res)=> res.json())
    .then((result)=>{
      setSetweater(result)
      console.log(result)
    })
  }
  return (
    <>
    <div className='text-center weather_app'>
      <h5 style={{color: "#1400ff", fontWeight: "bolder"}}>Check Wether Status</h5>
      <div className='searchbar'>
        <input type='text' className='form-control' placeholder='Search..' onChange={(e)=> setSearch(e.target.value)}/>
        <button className='btn btn-sm btn-warning' style={{fontWeight:'bold'}} onClick={searchPressed}>Search</button>
      </div>
      {/* if whether is not undefined */}
      {typeof weather.main != "undefined" ? (
        <div className='weatherstatus mt-4'>
           <p>Location: <span style={{color:"#fff"}}>{weather.name}</span></p>
           <p>Temprature: <span style={{color:"#fff"}}>{weather.main.temp}°C</span></p>
           <p>Status: <span style={{color:"#fff"}}>{weather.weather[0].main}</span></p>
           <p>DescriptioN: <span style={{color:"#fff"}}>{weather.weather[0].description}</span></p>
        </div>
      ) :(
        ""
      ) }
     
      
    </div>
    </>
  )
}
