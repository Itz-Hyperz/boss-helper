// Code used for front end tool
var bossChatBoxElement = document.getElementById("bossChatBox");
function bossChatToggle() {
    if(bossChatBoxElement.style.display == 'none') {
        bossChatBoxElement.style.display = "block";
    } else {
        bossChatBoxElement.style.display = "none";
    };
};
