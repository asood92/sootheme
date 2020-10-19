//  jquery to show/hide instructions on click
$(document).ready(function(){
$("#instruction-button").click(function(){
    $(".style-instructions").toggle();
    });
});

//  startInhale()
//  Use: replace the contents of the element at id #breathingStep with text
//  Parameters: None
function startInhale() {
    document.querySelector("#breathingStep").innerHTML = "Inhale through your nose";
    setTimeout(startInhale, 4000);
}

//  holdBreath()
//  Use: replace the contents of the element at id #breathingStep with text
//  Parameters: None
function holdBreath() {
    document.querySelector("#breathingStep").innerHTML = "Hold your breath";
    setTimeout(holdBreath, 7000);
}

//  slowExhale()
//  Use: replace the contents of the element at id #breathingStep with text
//  Parameters: None
function slowExhale() {
    document.querySelector("#breathingStep").innerHTML = "Exhale through your mouth";
    setTimeout(slowExhale, 8000);
}

//  startBreathing
//  Use: Call all of the other functions for actual chained output
//  Parameters: None
function startBreathing() {
    startInhale();
    holdBreath();
    slowExhale();
}