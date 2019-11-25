var lat=0;
var lng=0;
function getPosition(){
     if(navigator.geolocation){
         console.log("Howdie partner!");
        navigator.geolocation.getCurrentPosition(onPositionUpdate);
        
    }
    else{
        alert("navigator.geolocation is not available");
    }
}
function setNodes(id,value){
    if (document.getElementById(`${id}-p`)){
        document.getElementById(id).removeChild(document.getElementById(`${id}-p`));
    }
    let p=document.createElement("p");
    p.setAttribute("id",`${id}-p`);
    let node=document.createTextNode(value);
    p.appendChild(node)
    document.getElementById(id).appendChild(p);
}
function setResults(arr, adress){
    setNodes("location", adress);
    setNodes("a-twil-begin",arr.astronomical_twilight_begin)
    setNodes("n-twil-begin",arr.nautical_twilight_begin)
    setNodes("c-twil-begin",arr.civil_twilight_begin)
    setNodes("sunrise",arr.sunrise)
    setNodes("sunset",arr.sunset)
    setNodes("c-twil-end",arr.civil_twilight_end)
    setNodes("n-twil-end",arr.nautical_twilight_end)
    setNodes("a-twil-end",arr.astronomical_twilight_end)

}
function onPositionUpdate(position)
{
    lat = position.coords.latitude;
    lng = position.coords.longitude;
}
async function getData (lat, lng){
        let url=`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`;
        let api= await fetch(url);
        let arr= await api.json();
        arr=arr.results;
        return(arr);
}
async function getAdress(lat, lng){
       url=`https://geocode.xyz/${lat},${lng}?json=1`;
       api= await fetch(url);
       res= await api.json();
       let location=`${res.city}, ${res.country}`;
       return(location);
}

(function (){
    getPosition();
    document.getElementById("local").addEventListener("click",async function localData(){
        let arr=await getData(lat,lng);
        let location=await getAdress(lat,lng);
        setResults(arr,location);
    })
   
    document.getElementById("search").addEventListener("click", async function remoteData(){
       let adress=document.getElementById("input").value;
       let url=`https://geocode.xyz/${adress}?json=1`;
       let api=await fetch(url);
       let res= await api.json();
       let lat= res.latt;
       let lng= res.longt;
       let location=await getAdress(lat,lng);
       let arr=await getData(lat,lng);
       setResults(arr,location);
   })

})();