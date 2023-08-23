import { useState } from "react";

const Main = ()=>{
    const [city,setcity] = useState("");
    const [ alldatails, setdatails] = useState({cod:404});
    const [error , seterror]= useState(false);
    const call = ()=>{
        // alert("sdfn");
        console.log("the state value is ");
        console.log(alldatails);
    }
    const onchanges = (e)=>{
        setcity(e.target.value);
        // console.log(city);
    }
    const search = ()=>{
        // var c = city;
        // var url = "https://api.openweathermap.org/data/2.5/weather?q="+c+"&appid=994ac541710ea51e8b04dc49cd157c23";
        
        // https://api.openweathermap.org/data/2.5/weather?q=villupuram&appid=994ac541710ea51e8b04dc49cd157c23
        
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=994ac541710ea51e8b04dc49cd157c23`)
        .then( res=>{
            
            // setdatails(res);
            // var d = res.json();
            return res.json();
            // console.log( d.name);
            // console.log(res.json().responseData.name);
            // console.log(alldatails.responseData.name);
        }).then(
            (data)=>{
                setdatails(data);
                console.log(data);
                // console.log(dar)
                // console.log(data.cod);
                // console.log(alldatails);

            }
        ).then(
            (data)=>{
                console.log(alldatails);
            }
        ).catch(
            (e)=> seterror(e)
        )



    }
    return (
        <div>
            <div className="error">

                {error&& error}

            </div>

            <form>
                <input type="text" value={city} onChange={(e)=>{ onchanges(e) }}></input>
                <input type="button" value=" search " onClick={search}></input>
            {/* <button onClick={()=> call()} > check</button> */}
            </form>
            <div className="data">
                <div>
                    latitude : {alldatails.cod!=404 && alldatails.coord.lat}
                </div>
                <div>
                    longitude : {alldatails.cod!=404 && alldatails.coord.lon}
                </div>
                <div>
                    city : {alldatails.cod!=404 && alldatails.name}
                </div>
                <div>
                    Wind speed : {alldatails.cod!=404 && alldatails.wind.speed}
                </div>
                <div>
                    tempterature : {alldatails.cod!=404 && alldatails.main.temp}
                </div>
                <div>
                    max temp: {alldatails.cod!=404 && alldatails.main.temp_max}
                </div>
                <div>
                    min temp : {alldatails.cod!=404 && alldatails.main.temp_min}
                </div>

                <div>
                    humidity : {alldatails.cod!=404 && alldatails.main.humidity}
                </div>
               {/* {alldatails.cod!=404 && "bala ms"} */}
            </div>

        </ div >
    )
}
 export default Main;
