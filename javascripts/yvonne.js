// Function to validate the E-Mail input in the DonationForm

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

var userInput = [];
var DonationForm = document.getElementById("donationForm");

//Function to clear form after valid input

function ClearFields (validateArray){
  if (validateArray.indexOf(false) < 0){
    DonationForm.reset();
    localStorage.removeItem('DonationsForm');
  }
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



//Event Listeners for Submit Button

DonationForm.addEventListener("submit", validateDonationForm);
DonationForm.addEventListener("keyup", storeFormValues);


// Function to validate the Name input in the DonationForm

function validateDonationForm(e) {
    e.preventDefault();
    var validateArray = [];
    for (var i = 0; i < e.target.length; i++) {
      var el = e.target[i];
      var InputValue = el.value;
      var InputID = el.id;
      var ElP = el.nextElementSibling;
      var checkEmail = false;
        if (InputID != "SubmitButton" && InputID !=  "DonationAmount" &&  InputID != "DonationPreference") { //don't include the button
          userInput.push(InputValue);
          console.log(InputValue);
          if (InputValue == null || InputValue == ""){ //checks if something is written in box
            ElP.setAttribute('style', 'visibility:visible');
            validateArray.push(false);
          } else {
            ElP.setAttribute('style', 'visibility:hidden')
            checkEmail = true;
            validateArray.push(true);
          }
          if (checkEmail && InputID == 'DonationEmail') { //checks if something is a valid email
            var validEmail = validateEmail(InputValue);
              if (validEmail) { //checks if input is true or false (and email is valid)
                ElP.setAttribute('style', 'visibility:hidden');
                validateArray.push(true);
              } else {
                ElP.setAttribute('style', 'visibility:visible');
                validateArray.push(false);
              }
          }
      }
    }
    ClearFields(validateArray); //clearing fields after valid input
  }


//Local Storage

function storeFormValues (e) {
  console.log(e);
  var elForm = e.target.form;
  var localStorageArray = [];
  for (var i = 0; i < elForm.length; i++) {
    var el = elForm[i];
    var InputValue = el.value;
    var InputID = el.id;
    if (InputID != "SubmitButton" && InputID !=  "DonationAmount" &&  InputID != "DonationPreference"){
      var InputObject = {};
      InputObject.InputValue = InputValue;
      InputObject.InputID = InputID;
      localStorageArray.push(InputObject);
    }
  }
  saveStorage('DonationsForm', localStorageArray);
}

function populateForm (){ //puts saved data into form
  var DonationFormStorage = getStorage('DonationsForm');
  if (DonationFormStorage !== null) { //if there's something inside storage use it populate form
    for (var i = 0; i < DonationFormStorage.length; i++) {
      var inputId = DonationFormStorage[i].InputID;
      var inputValue = DonationFormStorage[i].InputValue;
      var elInput = document.getElementById(inputId);
      elInput.value = inputValue;
    }
  }
}

populateForm();
