var lat=0;
var lng=0;
function getPosition(){
     if(navigator.geolocation){
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
function setResults(arr){
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
    console.log("Current position: " + lat + " " + lng);

}


(function (){
    console.log("Howdie partner!");
    getPosition();
    document.getElementById("local").addEventListener("click",async function(){
        const url=`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`;
        console.log(url);
        let api= await fetch(url);
        let arr= await api.json();
        arr=arr.results;
        console.log(arr);
        setResults(arr);


    })
   

})();