var buster = document.querySelector("#btn");
var huster = document.querySelector("#b");
var output = document.querySelector("#print");

var serverURL = "https://api.funtranslations.com/translate/minion.json";


function creatinglink(input){
    return userurl = serverURL +"?text="+input
}
function convertText(){
    var userinput = huster.value;    
    if(userinput==""){
        alert("Please enter some text in the below field ");
        return;
    }
    fetch(creatinglink(userinput))
        .then(anarchy => anarchy.json())
        .then(json =>{
            var outputtext = json.contents.translated
            output.innerText = outputtext
        })
        
}

buster.addEventListener("click",convertText);


   




