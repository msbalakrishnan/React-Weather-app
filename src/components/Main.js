import { useState } from "react";

import AltertToast from "./AltertToast";
const Main = ()=>{
    const [city,setcity] = useState("");
    const [ alldatails, setdatails] = useState({cod:404});
    // create the usestate for toast creation 
    const[maketoast,settoast]=useState(false);
    const [error , seterror]= useState(false);
    const [togle , settogel]= useState(true);
    const [first , changefirst]=useState(false);
    const [forcekey , forcechange]=useState(1);


    // creating toast logic 
    // if( alldatails.cod=="404" && first){
        
        
    //     settoast(true);
    // }


    // var first = false;
    // var errordesign = "error p-3 text-danger-emphasis bg-danger-subtle border border-danger-subtle rounded-3 text-center";
    var errordesign = "alert alert-danger alert-dismissible fade show text-center m-2";
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
        if(city.trim()==""){
            alert("please enter the city name .")
            
        }
        else{fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=994ac541710ea51e8b04dc49cd157c23`)
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
                    changefirst(true);
                }
                ).catch(
                    // (e)=> seterror(e)
                    )
                   }
                    
                    
                    
    }
    return (
        <div   className="d-flex align-items-center all" >
        <div > 
            <div className="altertoast">
                {console.log("enrerign")}
                {console.log(alldatails.cod=="404" && first)}
                 { alldatails.cod=="404" && first &&  < AltertToast key={forcekey} />}
                 {/* {alldatails.cod=="404" && first && forcechange(forcekey+1)} */}

            </div>
            
            {/* <div className={alldatails.cod=="404" && first && errordesign} role="alert"> */}

                {/* {error} */}
                {/* {alldatails.cod=="404" &&  first &&"city not found sorry !"} */}
                {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}

            {/* </div> */}

            <form className="text-center ">
                <input className="p-2 m-1 " type="text" value={city} onChange={(e)=>{ onchanges(e) }}></input>
                <input className="bg-danger text-white" type="button" value=" search " onClick={search}></input>
            {/* <button onClick={()=> call()} > check</button> */}
            </form>
            <div className="data text-white mt-5">
                <div className="row row-cols-1  row-cols-md-2 row-cols-lg-3 text-align-center ">
                    <div className="col " >
                        <h3 className="text-center "> latitude : {alldatails.cod!=404 && alldatails.coord.lat}</h3>
                        
                    </div>
                    <div className="col">
                    <h3 className="text-center"> longitude : {alldatails.cod!=404 && alldatails.coord.lon} </h3>

                        
                    </div>
                    <div className="col">
                    <h3 className="text-center"> 
                        city : {alldatails.cod!=404 && alldatails.name}
                     </h3>
                        
                    </div>
                    <div className="col"> 
                    <h3 className="text-center"> 
                        Wind speed : {alldatails.cod!=404 && alldatails.wind.speed}
                     </h3>

                    </div>
                    <div className="col">
                    <h3 className="text-center"> 
                        tempterature : {alldatails.cod!=404 && alldatails.main.temp}
                     </h3>
                    </div>
                    <div className="col">
                    <h3 className="text-center"> 
                        max temp: {alldatails.cod!=404 && alldatails.main.temp_max}
                     </h3>
                    </div>
                    <div className="col">
                    <h3 className="text-center"> 
                        min temp : {alldatails.cod!=404 && alldatails.main.temp_min}
                     </h3>
                    </div >

                    <div className="col">
                    <h3 className="text-center"> 
                        humidity : {alldatails.cod!=404 && alldatails.main.humidity}
                     </h3>
                    </div>
                    <div className="col">
                    <h3 className="text-center"> 
                        Overall weather : {alldatails.cod!=404 && alldatails.weather[0].main}
                     </h3>
                    </div>
                </div>
               {/* {alldatails.cod!=404 && "bala ms"} */}
            </div>

        </ div >
        </div>
    )
}
 export default Main;
