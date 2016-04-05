//Event Listeners for Submit Button

SubmitButton.addEventListener("click", validateDonationFormName);
SubmitButton.addEventListener("click", validateDonationFormLocation);
// SubmitButton.addEventListener("submit", validateEmail);

// Function to validate the Name input in the DonationForm

function validateDonationFormName(e) {
    e.preventDefault();
    var checkIt = document.forms["DonationForm"]["fname"].value;
    if (checkIt == null || checkIt == "") {
        nameAlert.setAttribute('style', 'visibility:visible');
        return false;
    }
}

// Function to validate the Location input in the DonationForm

function validateDonationFormLocation(e) {
    e.preventDefault();
    var checkIt2 = document.forms["DonationForm"]["flocation"].value;
    if (checkIt2 == null || checkIt2 == "") {
        locationAlert.setAttribute('style', 'visibility:visible');
        return false;
    }
}

// Function to validate the E-Mail input in the DonationForm

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
