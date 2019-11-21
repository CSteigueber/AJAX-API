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

(async function (){
    var abc="A B C D E F G H I J K L M N O P Q R S T U V W X Y Z".split(" ");
    var url="https://www.travel-advisory.info/api";
    var api= await fetch(url);
    var arr= await api.json();
    arr=arr.data;

    let countries=[];
    for (let i=0; i<abc.length;i++){
        for (let j=0;j<abc.length;j++){
            if(arr[abc[i]+abc[j]]!=undefined){
                countries.push(abc[i]+abc[j]);
            }
        }
    }
    console.log(countries);

    console.log(arr);

    //Get a countries safety:
    document.getElementById("run").addEventListener("click",function (){
        let str=document.getElementById("input").value;
        let safety=999;
    // If a country name is entered its iso code must be found:       
        str=getIso(str, countries, arr);
        if (!arr[str]){
            console.log(str+" not found");
        }
        else {
            let score=arr[str].advisory.score;
            let div=document.getElementById("output");
            let p=document.createElement("p");
            switch (true){
                case score>4.5: p.setAttribute("class", "bg-danger");  break;
                case score>3.5: p.setAttribute("class", "bg-warning"); break;
                case score>2.5: p.setAttribute("class", "bg-info");    break;
                case score>0:   p.setAttribute("class", "bg-success"); break;            
            }

            let node= document.createTextNode(" The safety score in "+arr[str].name+" is "+arr[str].advisory.score);
            p.appendChild(node);
            div.appendChild(p);
        }
    })

    //Find countries that are of same safety:
    document.getElementById("same").addEventListener("click", function same(){
        let str=document.getElementById("input").value;
        let res=[];
        for (i=0;i<countries;i++){
            if (arr[countries[i]].advisory.score=="later"){
                console.log("later");
            }
        }
    })

    // Clear output:
    document.getElementById("clear").addEventListener("click", function clear (){
        document.getElementById("output").innerHTML="";
    })



    console.log("end of script!");
})();