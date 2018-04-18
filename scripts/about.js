// refer to question 3 before development starts for scope document

// replace word in "aboutText"
function replaceWord(){
    var str = document.getElementById("aboutText");
    str.innerHTML = str.innerHTML.replace(/Magic/gi, "Something");
    return str;
}
replaceWord();

// Show and hide the more info on click
var showInfo = document.getElementById("moreInfoTrigger").addEventListener("click", displayMoreInfo);
function displayMoreInfo(event){
    if(document.getElementById("moreInfoContent").style.display == "block"){
        document.getElementById("moreInfoContent").style.display = "none";
    } else if(document.getElementById("moreInfoContent").style.display == "none")
        document.getElementById("moreInfoContent").style.display = "block";
}
