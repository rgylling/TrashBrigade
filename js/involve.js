//*************************************************//
//               VARIABLES                        //
//************************************************//

//Global Variables
var userInput = [];
var DonationForm = document.getElementById("donationForm");


//*************************************************//
//               FUNCTIONS                        //
//************************************************//

// Function to validate the E-Mail input in the DonationForm - regular expression found on web
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

//Function to clear form after valid input
function ClearFields (validateArray, formData){
  if (validateArray.indexOf(false) < 0){ //makes sure input is valid
    var formUrl = DonationForm.action;
    var formType = DonationForm.method;

    $.ajax({         //google forms
      url: formUrl,
      data: formData,
      type: formType,
      dataType: 'xml',
      statusCode: {
        0: function () {
          DonationForm.reset(); // clears form
          localStorage.removeItem('DonationsForm'); // clears local storage
          var div = document.createElement("div"); // build DOM tree and new elements for message box
          div.setAttribute("role", "alert");
          div.className = "alert alert-success alert-dismissible";
          var button = document.createElement("button");
          button.setAttribute("type", "button");
          button.setAttribute("data-dismiss", "alert");
          button.setAttribute("aria-label", "Close");
          button.className = "close";
          var span = document.createElement("span");
          span.setAttribute("aria-hidden", "true");
          span.innerHTML = "&times;";
          var spanText = document.createElement("span");
          spanText.textContent = "Thank you for your donation! We appreciate your help";
          button.appendChild(span);
          div.appendChild(button);
          div.appendChild(spanText);
          var parent = DonationForm.parentNode;
          parent.insertBefore(div, DonationForm);
        }
      }
    });
  }
}

// Function to validate the Name input in the DonationForm

function validateDonationForm(e) {
    e.preventDefault();
    var validateArray = [];
    var formData = {};
    for (var i = 0; i < e.target.length; i++) {
      var el = e.target[i];
      var InputName = el.name;
      var InputValue = el.value;
      var InputID = el.id;
      var ElP = el.nextElementSibling;
      var checkEmail = false;
      if (InputID != "SubmitButton" && InputID !=  "DonationAmount" &&  InputID != "DonationPreference") { //don't include the button
        userInput.push(InputValue);
        // console.log(InputValue);
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
      formData[InputName] = InputValue;
    }
    ClearFields(validateArray, formData); //clearing fields after valid input
  }


  //*************************************************//
  //          FUNCTIONS FOR LOCAL STORAGE            //
  //************************************************//

//Local Storage Basics - get it and save it

function saveStorage(key, UserData) {
  var temp = JSON.stringify(UserData);
  localStorage.setItem(key, temp);
}

function getStorage(key){
  var temp = localStorage.getItem(key);
  return JSON.parse(temp);
}

//Function to store Info

function storeFormValues (e) {
  console.log(e);
  var elForm = e.target.form;
  var localStorageArray = [];
  for (var i = 0; i < elForm.length; i++) {
    var el = elForm[i];
    var InputValue = el.value;
    var InputID = el.id;
    var InputObject = {};
    InputObject.InputValue = InputValue;
    InputObject.InputID = InputID;
    localStorageArray.push(InputObject);
  }
  saveStorage('DonationsForm', localStorageArray);
}

//Function to populate the Form if Local Storage exists

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

//*************************************************//
//         EVENT LISTENERS                        //
//************************************************//

//Event Listeners for Submit Button

DonationForm.addEventListener("submit", validateDonationForm);
DonationForm.addEventListener("keyup", storeFormValues);
