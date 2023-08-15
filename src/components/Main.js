import { useState } from "react";

const Main = ()=>{
    const [city,setcity] = useState("");
    
    const onchanges = (e)=>{
        setcity(e.target.value);
        console.log(city);
    }
    const search = ()=>{
        // var c = city;
        // var url = "https://api.openweathermap.org/data/2.5/weather?q="+c+"&appid=994ac541710ea51e8b04dc49cd157c23";
        
        // https://api.openweathermap.org/data/2.5/weather?q=villupuram&appid=994ac541710ea51e8b04dc49cd157c23
        
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=994ac541710ea51e8b04dc49cd157c23`)
        .then( res=>{
            console.log((res.json()));
        })



    }
    return (
        <div>
            <form>
                <input type="text" value={city} onChange={(e)=>{ onchanges(e) }}></input>
                <input type="button" value=" search " onClick={search}></input>
            </form>

        </ div >
    )
}
 export default Main;
