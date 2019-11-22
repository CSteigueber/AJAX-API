const getIso = (str, countries, arr)=>{
    if (str.length>2){
        for (let i=0; i<countries.length;i++){
            if (arr[countries[i]].name==str){
                str=countries[i];
            }
        }
    }
    return str;
}

const printArr =(str,arr)=>{
    let score=arr[str].advisory.score;
    let div=document.getElementById("output");
    let p=document.createElement("p");
    switch (true){
        case score>4.5: p.setAttribute("class", "bg-danger");  break;
        case score>3.5: p.setAttribute("class", "bg-warning"); break;
        case score>2.5: p.setAttribute("class", "bg-info");    break;
        case score>0:   p.setAttribute("class", "bg-success"); break;            
    }
    let text=`The safety score in ${arr[str].name} is ${arr[str].advisory.score}`;
    let node= document.createTextNode(text);
    p.appendChild(node);
    div.appendChild(p);
}
//-------------------------main function------------------------------------------
(async function main(){
    const abc="A B C D E F G H I J K L M N O P Q R S T U V W X Y Z".split(" ");
    const url1="https://www.travel-advisory.info/api";
    const api1= await fetch(url1);
    var arr= await api1.json();
    arr=arr.data;

//------------------------------------------get a list of available country codes
    let countries=[];
    for (let i=0; i<abc.length;i++){
        for (let j=0;j<abc.length;j++){
            if(arr[abc[i]+abc[j]]!=undefined){
                countries.push(abc[i]+abc[j]);
            }
        }
    }

    //Get a countries safety:
    document.getElementById("run").addEventListener("click",function (){
        let str=document.getElementById("input").value;
        let safety=999;
           
        str=getIso(str, countries, arr);   // If a country name is entered its iso code must be found
        if (!arr[str]){
            console.log(str+" not found");
        }
        else {
            printArr(str,arr);
        }
    })

    //Find countries that are of same safety:
    document.getElementById("same").addEventListener("click", function same(){
        let str=getIso(document.getElementById("input").value,countries,arr);
        let score=arr[str].advisory.score;
        let res=[];
        for (i=0;i<countries.length;i++){                   //Go through the coutries to look for same safety
            if (arr[countries[i]].advisory.score==score){
                res.push(arr[countries[i]].name);
            }
        }
        for (let i=0; i<res.length;i++){                    //Print all res 
            let iso=getIso(res[i],countries,arr);
            printArr(iso,arr);
        }
    })
    
    document.getElementById("clear").addEventListener("click", function clear (){ 
        document.getElementById("output").innerHTML="";                             // Clear output:
    })
})();