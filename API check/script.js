const url="https://geocode.xyz/Haselbusch.,+28757+Bremen-Vegesack?json=1";

(async function() {
    const api=await fetch(url);
    console.log(api);
    const arr=await api.json();
    console.log(arr);    
})();