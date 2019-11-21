(async function (){
var abc="A B C D E F G H I J K L M N O P Q R S T U V W X Y Z".split(" ");
console.log(abc);
var url="https://www.travel-advisory.info/api";
var api= await fetch(url);
var arr= await api.json();
arr=arr.data;

document.getElementById("run").addEventListener("click",function (){
    let str=document.getElementById("input").value;
    let safety=999;
// If a country name is entered its iso code must be found:
    if (str.length>2){
        for (let i=0; i<abc.length;i++){
            for (let j=0;i<abc.length; j++){
                if (arr[abc[i]+abc[j]]!=undefined){
                    console.log(abc[i]+abc[j]);
                }
            } 
        }
        console.log("finished")
    }

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