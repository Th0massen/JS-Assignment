// refer to question 2 before development starts for scope document
// get URL query string
function getQueryStringValue (key) {
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}
// variable for the id
var id = getQueryStringValue("id");
fetch('https://api.magicthegathering.io/v1/cards?id='+ id)
    .then(result => result.json())
    .then((res) => { 
        console.log(id); 
        specificCard(res);
    })

function specificCard(res){
    console.log(res);
    var filterID = res.cards.filter(function(card){
        console.log(card.name);
        var imageArea = document.getElementById("cardImage");
        var detailsArea = document.getElementById("cardDetails");
        // image
        var cardImage = document.createElement("img");
        cardImage.src = card.imageUrl;
        cardImage.style.width = "100%";
        console.log(imageArea);
        console.log(cardImage);
        // name
        var cardName = document.createElement("h2");
        cardName.innerHTML = card.name;
        // text
        var cardDetails = document.createElement("p");
        cardDetails.innerHTML = card.text;
        // rarity
        var cardRarity = document.createElement("p");
        cardRarity.innerHTML = "Rarity : " + card.rarity;
        // colour
        var cardColor = document.createElement("p");
        cardColor.innerHTML = "Color : " + card.colors;
        // Append Everything
        imageArea.appendChild(cardImage);
        detailsArea.appendChild(cardName);
        detailsArea.appendChild(cardDetails);
        detailsArea.appendChild(cardRarity);
        detailsArea.appendChild(cardColor);
    });
} 