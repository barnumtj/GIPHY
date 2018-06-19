var topics = ["Lebron James", "Kendrick Lamar", "Eminem", "Michael Jordan" ]
// var famousPerson = $(this).attr("data");


function giphyMagic () {
var famousPerson = $(this).attr("data");
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + famousPerson + "&api_key=d1NFME314CYXFwLEcOXkrNDxBOGhVHkK&limit=10";


$.ajax({
    url: queryURL,
    method: "GET"
  })
   
    .then(function(response) {
    console.log(famousPerson)
    console.log(response)
    var personDiv = $("#personDiv");
    personDiv.empty();
    for (var j = 0; j < response.data.length; j++) {
    
    
    var rating = response.data[j].rating;
    var ratingText = $("<p>").text("Rating: " + rating);
    personDiv.append(ratingText);


    var imgStill = response.data[j].images["downsized_still"].url;
    var imgURL = response.data[j].images["fixed_height"].url;
    

    var image = $("<img>").addClass("pic").attr("src", imgStill).attr("data-gif", imgURL);
    
    personDiv.append(image)
    }
    });
};

    function buttons() {


        $(".buttonDiv").empty();

       
        for (var i = 0; i < topics.length; i++) {

          var newButton = $("<button>");
       
          newButton.addClass("people");
          
          newButton.attr("data", topics[i]);
          
          newButton.text(topics[i]);
          
          $(".buttonDiv").append(newButton);
        }
      }


$("#submitButton").click(function(event) {
    event.preventDefault();
    var famousPerson = $("#formId").val();
    topics.push(famousPerson);
    buttons();
});

$(document).on('click', '.pic', function() {
  const gif = $(this);
  let temp = gif.attr('src');
  gif.attr('src', gif.attr("data-gif"));
  gif.attr('data-gif', temp); 

});










$(document).on("click", ".people", giphyMagic);


buttons()
      

   

    

