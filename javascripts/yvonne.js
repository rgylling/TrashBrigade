//CHART ON CHRISTMAS PAGE


    var toyData = {
    	labels : ["January","February","March","April","May","June"],
    	datasets : [
    		{
    			fillColor : "rgba(172,194,132,0.4)",
    			strokeColor : "#ACC26D",
    			pointColor : "#fff",
    			pointStrokeColor : "#9DB86D",
    			data : [203,156,99,251,305,247]
    		}
    	]
    }

    var toys = document.getElementById('toyChart').getContext('2d');
        new Chart(toys).Line(toyData);



var userInput = {};


//Event Listeners for Submit Button

SubmitButton.addEventListener("click", validateDonationFormName);
SubmitButton.addEventListener("click", validateDonationFormLocation);
// SubmitButton.addEventListener("submit", validateEmail);

// Function to validate the Name input in the DonationForm

function validateDonationFormName(e) {
    e.preventDefault();
    var userName = document.forms["DonationForm"]["fname"].value;
    if (userName == null || userName == "") {
        nameAlert.setAttribute('style', 'visibility:visible');
    } else {
      userInput.nameInput = userName;
      saveStorage('UserInputName', userInput.nameInput);
    }
    console.log(userInput);
}


// Function to validate the Location input in the DonationForm

function validateDonationFormLocation(e) {
    e.preventDefault();
    var userLocation = document.forms["DonationForm"]["flocation"].value;
    if (userLocation == null || userLocation == "") {
        locationAlert.setAttribute('style', 'visibility:visible');
    } else {
      userInput.locationInput = userLocation;
      saveStorage('UserInputLocation', userInput.locationInput);
    }
    console.log(userInput);
}

// Function to validate the E-Mail input in the DonationForm

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

//Local Storage

function saveStorage(key, UserData) {
  var temp = JSON.stringify(UserData);
  localStorage.setItem(key, temp);
}

function getStorage(key){
  var temp = localStorage.getItem(key);
  return JSON.parse(temp);
}
