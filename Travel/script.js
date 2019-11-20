


(async function (){
var url="https://www.travel-advisory.info/api";
var api= await fetch(url);
var arr= await api.json();
arr=arr.data.DE;
console.table(arr);
document.getElementById("run").addEventListener("click",function (arr){
    let str=document.getElementById("input").value;
    let success=false;
    let safety=999;
    arr.forEach(el => {
        if (el.name==str){
            success=true;
            safety=el.advisory.score;
        }
    });
    if (!success){
        console.log(str+" not found");
    }
    else {
        console.log(" The safety score in "+str+" is "+safety);
    }
})



console.log("end of script!");
})();