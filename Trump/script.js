var personal =[];
var nonPersonal=[];

var url="https://api.whatdoestrumpthink.com/api/v1/quotes";

const speak =(msg)=>{
    var sound = new SpeechSynthesisUtterance(msg);
    
    window.speechSynthesis.speak(sound);
}


const personalQuote=(list, name)=>{
    var msg=name+" "+list[Math.floor(Math.random()*list.length)];
    document.getElementById("output").innerHTML= (msg);
    speak(msg);
    
}

const unpersonalQuote=(list)=>{
    var msg=list[Math.floor(Math.random()*list.length)];
    document.getElementById("output").innerHTML= (msg);
    speak(msg);

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
        personalQuote(personal,"Yo momma");
    })
})();

