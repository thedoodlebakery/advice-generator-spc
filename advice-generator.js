async function adviceGetter() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const adviceResponse = await response.json();
    //console.log(adviceResponse.slip.advice);

    const adviceNumber = document.getElementById('advice-id');
    adviceNumber.append(adviceResponse.slip.id);
    const adviceBody = document.getElementById('advice-body');
    adviceBody.append(adviceResponse.slip.advice);
    console.log("adviceGetter");
}



// add event listener for dice

// why is clickDice only firing once? 
// figure out another option for adding in the advice something other than append
// look at the timing for innerHTML
// stuttering on load


const clickDice = function () {
    const adviceNumber = document.getElementById('advice-id');
    const adviceBody = document.getElementById('advice-body');
    if (adviceBody.innerHTML !== "" && adviceNumber.innerHTML !== "") {
        adviceBody.innerHTML = "";
        adviceNumber.innerHTML = "";

    }
    const diceBtn = document.getElementById('dice-button');

    //clickDice.addEventListener('click', adviceGetter);
    diceBtn.addEventListener('click', adviceGetter, false);
    console.log("clickDice");

}

adviceGetter();
clickDice();
