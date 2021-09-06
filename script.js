// wire the input button
const userinp = document.querySelector("#inp-txt")

// wire the output button
var opText = document.querySelector("#op-text")

// wire the translate button
const btnTranslate = document.querySelector("#btn-translate")
// assign the api end point to some variable

const serverURL = "https://api.funtranslations.com/translate/russian-accent.json"

// listen to the user click on translate button and call appropriate function for it
btnTranslate.addEventListener("click",clickHandler);

// definition for the function when the user clicks
function clickHandler() {
    
    // encode the endpoint of api and user input inside a variable
     var text = serverURL+"?text="+userinp.value
    // do a fetch call
    fetch(text)
    .then(response => response.json())
    .then(json => opText.innerHTML = json.contents.translated)
    .catch(errorHandler)
    // convert the response data into a json

    // assign the retreived data to the output variable

    // in case of a server problem catch the error and call the error handling function 
}

// definition for error handling function 
function errorHandler(error)
{
    console.log("You are being hacked,,Taking control 50%,,JK,,server problem",error);
    alert("You are being hacked,,Taking control 525%..50%,..25%..,JK,,server problem,,,I dont have the subscription for this api,,so only 5 calls per hour,,")

    opText.innerHTML = "Sorry 5 api calls per hour limit reached."
}