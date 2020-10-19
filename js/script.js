//  jquery to show/hide instructions on click
$(document).ready(function(){
$("#instruction-button").click(function(){
    $(".style-instructions").toggle();
    });
});

function startInhale() {
    document.querySelector("#breathingStep").innerHTML = "Inhale through your nose";
    setTimeout(startInhale, 4000);
}
function holdBreath() {
    document.querySelector("#breathingStep").innerHTML = "Hold your breath";
    setTimeout(holdBreath, 7000);
}
function slowExhale() {
    document.querySelector("#breathingStep").innerHTML = "Exhale through your mouth";
    setTimeout(slowExhale, 8000);
}
function startBreathing() {
    startInhale();
    holdBreath();
    slowExhale();
}