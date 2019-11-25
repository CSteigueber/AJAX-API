const url="https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&date=today";

(async function() {
    const api=await fetch(url);
    console.log(api);
    const arr=await api.json();
    console.log(arr);    
})();