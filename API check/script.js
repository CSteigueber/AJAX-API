const url="http://stats.oecd.org/SDMX-JSON/data/";

(async function() {
    const api=await fetch(url);
    console.log(api);
    const arr=await api.json();
    console.log(arr);    
})();