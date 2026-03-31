var photos = []; //Declare an empty array to store image element
var fileNames = []; //Declare an empty element to store image file names
var imageList = []; //Declare an empty array to store html list that contains an image
var image; //Declare an empty variable to store the assembled image list codes
var openList = "<li id='photo' style='list-style: none; text-align: center;'>"; //Declare a variable to contain open list tag
var closeList = "</li>"; //Declare a variable to contain close list tag
var openCaptionTag = '<div class="caption">' //Declare a variable to contain open caption tag
var closeDivTag = '</div>' //Declare a variable to contain close caption tag
var openDescTag = '<div class="description">' //Declare a variable to contain open description tag


const captionTexts = ["BEAUTIFUL WINTER", "PEACEFUL HARBOR", "FROZEN LAKE", "SERENE RIVER", "WINTRY WILDLIFE", "GORGEOUS TUNDRA"]
const descTexts = ["Beautiful winter scenery in the morning", "A tranquil harbor surrounded by icy mountains", "An idyllic frozen waterscape", "A picturesque frigid river bend", "A cute doe makes its way through the snow", "An ethereal frozen tundra landscape"]

//Create a loop to create 6 images starting with an index of 0
for (var i = 0; i < 6; i++) {
    fileNames.push("winterland" + (i + 1)); //Create image file name and store in the array
    photos.push("<img src='images/" + fileNames[i] + ".jpg' style='width: 100%; display: block;'>"); //Assemble file name into image element and store in an array
    image = openList + photos[i] + openCaptionTag + captionTexts[i] + closeDivTag + openDescTag + descTexts[i] + closeDivTag + closeList; //Assemble image element from array with list elements and store in a variable
    imageList.push(image); //Store(push) the assembled list codes into an array

    //Display all six image codes stored in the array
    var myAlbum = document.getElementById("album");
    if (myAlbum) {
        myAlbum.style.display = "grid";
        myAlbum.style.gridTemplateColumns = "1fr 1fr";
        myAlbum.style.gap = "20px";
        myAlbum.style.padding = "0"
        myAlbum.innerHTML = imageList.join("");
    }
}

// Info Box Variables
var infoTexts = [
    "Most of plants and animals are having their hibernation period, so winter is not full of bright colors, but who says that white, snowy and a bit magical winter is not cool?",
    "The most beautiful phenomenon of the winter is snow! You know that the snowflakes are never repeat themselves, they have amazing shapes, that different with each new snowflake.",
    "Nature looks beautiful even when everything is frozen and covered in a blanket of white snow.",
    "A winter landscape with trees showing the pure beauty of a cold snowy day.",
    "Looking down a snowy path, showing how winter transforms the world into a quiet, white wonderland.",
    "The sunlight glowing on the snow provides a warm contrast to the freezing temperatures of winter."
];
var closeText = "Click This To Close";

// Info Box Open and Close Tags
var openBox = "<div id='infoBox' style='visibility: hidden; position: fixed; top: 50%; left: 50%; width: 350px; padding: 30px; background-color: rgba(0, 0, 0, 0.85); color: white; transform: translate(-50%, -50%); text-align: center; border-radius: 10px; z-index: 1000;'>";
var closeBox = "</div>";
var openHeading = "<h2 id='infoHeader' style='margin-top: 0; font-size: 24px;'>";
var closeHeading = "</h2>";
var openText = "<p id='infoText' style='font-size: 16px; line-height: 1.5; margin-bottom: 30px;'>";
var closeTextTag = "</p>";
var openLink = "<a href='#' id='closeLink' style='color: #ffcc00; text-decoration: none; font-weight: bold;'>";
var closeLinkTag = "</a>";

// Create Info Box within the gallery using innerHTML
if (myAlbum) {
    document.getElementById("album").insertAdjacentHTML("beforebegin", openBox + openHeading +  closeHeading + openText + closeTextTag + openLink + closeText + closeLinkTag + closeBox);

    // DOM Elements
    var infoBox = document.getElementById("infoBox");
    var infoHeader = document.getElementById("infoHeader");
    var infoTextPara = document.getElementById("infoText");
    var closeLink = document.getElementById("closeLink");
    var descriptions = document.querySelectorAll(".description");

    // Add event listener to each description
    for (let i = 0; i < descriptions.length; i++) {
        descriptions[i].addEventListener("click", function() {
            // Set up DOM CSS properties innerHTML and visibility
            infoHeader.innerHTML = captionTexts[i];
            infoTextPara.innerHTML = infoTexts[i];
            infoBox.style.visibility = "visible";
        });
    }

    // Add event listener to close the info box
    closeLink.addEventListener("click", function(e) {
        e.preventDefault();
        infoBox.style.visibility = "hidden";
    });
};
/* Contact Form Scripts */
var contactSelect = document.getElementById("contactSelect");
var emailBox = document.getElementById("emailbox");
var phoneBox = document.getElementById("phonebox");

// Hide both boxes when the page initially loads and only run this code if the contact form is actually on the page
if (contactSelect) {
    emailBox.style.display = "none";
    phoneBox.style.display = "none";

    // Listen for changes on the dropdown menu
    contactSelect.addEventListener("change", function() {
        // Check what the current value of the dropdown is (email, phone, or none)
        var selectedOption = contactSelect.value;
        
        if (selectedOption === "email") {
            // Show the email box, hide the phone box
            emailBox.style.display = "block";
            phoneBox.style.display = "none";
            
        } else if (selectedOption === "phone") {
            // Show the phone box, hide the email box
            phoneBox.style.display = "block";
            emailBox.style.display = "none";
            
        } else {
            // If they pick "Select One", hide both boxes
            emailBox.style.display = "none";
            phoneBox.style.display = "none";
        }
    });
}