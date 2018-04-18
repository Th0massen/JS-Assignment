// refer to question 1 before development starts for scope document
// connect to this api https://api.magicthegathering.io/v1/cards


// IMPORTANT!! Open in Firefox, there is a security setting in google chrome that wont allow you to fetch the api from a different domain

// Fetch the API
fetch('https://api.magicthegathering.io/v1/cards')
    .then(result => result.json())
    .then((res) => { 
        newCard(res); 
    })
    .catch(err => console.log(err))

   function newCard(result, searchString){
       console.log(result);
       // Filtering
       if(searchString){
            var filterCards = result.cards.filter(function(card){
                console.log(card.name.toLowerCase() == searchString.toLowerCase());
                if(card.name.toLowerCase() == searchString.toLowerCase()){
                    return true;
                } else{
                    return false;
                }
            })
            result.cards = filterCards;
        }
       for(var i = 0; i < result.cards.length; i++){
        // Creating containers    
        var cardStack = document.getElementById("cards");
            var cardArea = document.createElement("div");
            cardArea.className = "col-sm-4";
            var cardContainer = document.createElement("div");
            cardContainer.className = "card-container";
            cardStack.appendChild(cardArea);
            cardArea.appendChild(cardContainer);
            // Card Name
            var cardName = document.createElement("h4");
            cardName.innerHTML = result.cards[i].name;
            cardContainer.appendChild(cardName);
            // Card Image
            var cardImage = document.createElement("img");
            cardImage.src = result.cards[i].imageUrl;
            cardImage.style.width = "100%";
            cardContainer.appendChild(cardImage);
            // Button
            var cardButton = document.createElement("a");
            cardButton.href = "card-specific.html?id=" + result.cards[i].id;
            cardButton.innerHTML = "View More";
            cardButton.className = "btn btn-success";
            cardContainer.appendChild(cardButton);   
       }
   }
   // Search Button
    var searchActivate = document.getElementById("searchButton").addEventListener("click", searchBar);
    function searchBar(event){
        event.preventDefault();
        console.log(event);
        var card_container = document.getElementById("cards");
        card_container.innerHTML = null;
        var searchValue = document.getElementById("search").value;
        fetch('https://api.magicthegathering.io/v1/cards')
        .then(result => result.json())
        .then(result =>{
            newCard(result, searchValue);
        })
    } 
   







