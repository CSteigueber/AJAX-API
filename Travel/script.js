var mapsKey="";

  

(async function (){
var url="https://www.travel-advisory.info/api";
var api= await fetch(url);
var arr= await api.json();
arr=arr.data;
document.getElementById("run").addEventListener("click",function (){
    console.log(arr);
    let str=document.getElementById("input").value;
    let safety=999;

    if (!arr[str]){
        console.log(str+" not found");
    }
    else {
        console.log(" The safety score in "+arr[str].name+" is "+arr[str].advisory.score);
        let div=document.getElementById("output");
        let p=document.createElement("p");
        let node= document.createTextNode(" The safety score in "+arr[str].name+" is "+arr[str].advisory.score);
        p.appendChild(node);
        div.appendChild(p);
    }
})



console.log("end of script!");
})();