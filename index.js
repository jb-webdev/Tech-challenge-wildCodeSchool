// TICKET PRICES
const priceAdulte = 8;
const PriceChildren = 5;

// FUNCTION TO AVOID WRITING IN THE TAG

function isInputNumber (evt) {

    let charts = String.fromCharCode (evt.witch);
    if (!(/[0-9]/.test(charts))) {
        evt.preventDefault ();
    }
}

// FUNCTION TO CALCULATE THE AMOUNT
function calculFinalPrice () {

    const adult = document.getElementById ('idNumberOfAdultPlaces').value;
    const children = document.getElementById ('idNumberOfChildPlaces').value;

    
    if (adult < 0 || children < 0) {

        let messageOne = document.getElementById('messageOne');    
        messageOne.innerHTML = "veuillez entrer des valeurs correct ";

        let messageTwo = document.getElementById('messageTwo');    
        messageTwo.innerHTML = " ";
        
        let messageThree = document.getElementById('messageThree');    
        messageThree.innerHTML = " ";

    } else {
        let finalePriceAdulte = priceAdulte * adult;
        let finalPriceChildren = PriceChildren * children;
    
        const calculatePrice = finalePriceAdulte + finalPriceChildren;
    
        let messageOne = document.getElementById('messageOne');    
        messageOne.innerHTML = "The price to pay is " + calculatePrice + " $"; 

        let messageTwo = document.getElementById('messageTwo');    
        messageTwo.innerHTML = adult + " adult tickets at $ " + priceAdulte;
        
        let messageThree = document.getElementById('messageThree');    
        messageThree.innerHTML = "And " + children + " children tickets at $" + PriceChildren;

    }
    
}

// EVENTS LISTENER
document.getElementById("idNumberOfAdultPlaces").addEventListener( "change", calculFinalPrice );
document.getElementById("idNumberOfChildPlaces").addEventListener( "change", calculFinalPrice );