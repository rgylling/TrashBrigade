// Function to validate the E-Mail input in the DonationForm

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

var userInput = [];
var DonationForm = document.getElementById("donationForm");

//Local Storage

function saveStorage(key, UserData) {
  var temp = JSON.stringify(UserData);
  localStorage.setItem(key, temp);
}

function getStorage(key){
  var temp = localStorage.getItem(key);
  return JSON.parse(temp);
}

var DonationFormStorage = getStorage('DonationsForm');

//Event Listeners for Submit Button

DonationForm.addEventListener("submit", validateDonationForm);
DonationForm.addEventListener("keyup", storeFormValues);


// Function to validate the Name input in the DonationForm

function validateDonationForm(e) {
    e.preventDefault();
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
          } else {
            ElP.setAttribute('style', 'visibility:hidden')
            checkEmail = true;
          }
          if (checkEmail && InputID == 'DonationEmail') { //checks if something is a valid email
            var validEmail = validateEmail(InputValue);
              if (validEmail) { //checks if input is true or false (and email is valid)
                ElP.setAttribute('style', 'visibility:hidden');
              } else {
                ElP.setAttribute('style', 'visibility:visible');
              }
          }
      }
    }
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
      localStorageArray.push(InputValue);
    }
  }
  saveStorage('DonationsForm', localStorageArray);
}
