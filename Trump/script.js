var personal =[];
var nonPersonal=[];

var url="https://api.whatdoestrumpthink.com/api/v1/quotes";

const personalQuote=(list, name)=>{
    document.getElementById("output").innerHTML= (name+" "+list[Math.floor(Math.random()*list.length)]);
}

const unpersonalQuote=(list)=>{
    document.getElementById("output").innerHTML= (list[Math.floor(Math.random()*list.length)]);
}

(async function(){
    document.getElementById("output").innerHTML= ("I made it!");
    var api= await fetch(url);
    var quotes= await api.json();
    personal=quotes.messages.personalized;
    nonPersonal= quotes.messages.non_personalized;
    document.getElementById("person").addEventListener("click", ()=>{
        let name= document.getElementById("input").value;
        personalQuote(personal, name);
    });
    document.getElementById("unperson").addEventListener("click", ()=>{
        unpersonalQuote(nonPersonal);
    });
    document.getElementById("yomama").addEventListener("click", ()=>{
        personalQuote(personal,"Yo mamma");
    })
})();

