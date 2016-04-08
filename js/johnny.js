/*---------------------------------------------------------------------------*\
 * Data                                                                      *
\*---------------------------------------------------------------------------*/

/**
 * Error messages for each input
 **/
var messages = {
  inputFirstName: {
    required: 'The first name is required.'
  },
  inputLastName: {
    required: 'The last name is required.'
  },
  inputEmail: {
    required: 'The email is required.',
    valid: 'The email must be a valid email.'
  },
  inputSubject: {
    required: 'The subject is required.'
  },
  textareaMessage: {
    required: 'The message is required.'
  }
};

/*---------------------------------------------------------------------------*\
 * Functions                                                                 *
\*---------------------------------------------------------------------------*/

/**
 * Check if is a valid email
 **/
function checkEmail(value) {
  // Regular expression for matching an email
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(value);
}

/**
 * Checks if the input isn't empty when the input is required
 **/
function checkRequired(value) {
  if (value != '') {
    return true;
  }

  return false;
}

/**
 * Process when user click submit
 **/
function onSubmit(event) {
  // Stop form from submitting
  event.preventDefault();

  // Get form from event object
  var elForm = event.target;

  // Variables needed for AJAX call
  var formUrl = elForm.action;
  var formType = elForm.method;
  var formData = {};

  // Store true or false values for each validation
  var validationArr = [];

  // Loop through form inputs
  for (var i = 0; i < elForm.length; i++) {
    var elInput = elForm[i];
    var inputName = elInput.name;

    // If <input> isn't a submit button
    if (inputName != 'submit') {
      var inputId = elInput.id;
      var inputValue = elInput.value.trim();
      var elP = elInput.nextElementSibling;

      formData[inputName] = inputValue;

      // Validation for empty/required
      var validationPass = checkRequired(inputValue);
      validationArr.push(validationPass);

      if (validationPass == false) {
        elP.textContent = messages[inputId].required;
      }

      // Validation for email
      if (inputId == 'inputEmail' && validationPass == true) {
        validationPass = checkEmail(inputValue);
        validationArr.push(validationPass);
        elP.textContent = messages[inputId].valid;
      }

      // Toggle error message by class
      if (validationPass == true) {
        elP.className = 'hide';
      } else {
        elP.className = '';
      }
    }
  }

  // Form validation pass, no false value(s) in array
  if (validationArr.indexOf(false) < 0) {
    postForm(formUrl, formData, formType, 'xml');
  }
}

/**
 * Checks if the input isn't empty when the input is required
 **/
function onKeyUp(event) {
  var contactFormArr = [];

  // Get form
  var elForm = event.target.form;

  // Loop through form <input>
  for (var i = 0; i < elForm.length; i++) {
    var elFormInput = elForm[i];

    // <input> isn't submit button
    if (elFormInput.name != 'submit') {
      // Add object of the <input> ID and value
      contactFormArr.push({
        id: elFormInput.id,
        value: elFormInput.value
      });
    }
  }

  // Convert array to string for JSON
  var contactFormStr = JSON.stringify(contactFormArr);

  // Store the string in localStorage
  localStorage.setItem('contactForm', contactFormStr);
}

/**
 * AJAX call to post form to a Google form
 **/
function postForm(formUrl, formData, formType, formDataType) {
  $.ajax({
    url: formUrl,
    data: formData,
    type: formType,
    dataType: formDataType,
    statusCode: {
      200: postFormSuccess()
    }
  });
}

/**
 * Form was successfully processed from an AJAX call
 **/
function postFormSuccess() {
  var parentDiv = elForm.parentNode;

  // Create div for alert
  var elDivAlert = document.createElement('div');
  elDivAlert.className = 'alert alert-success alert-dismissible';
  elDivAlert.setAttribute('role', 'alert');

  // Create close button for alert
  var elButtonClose = document.createElement('button');
  elButtonClose.className = 'close';
  elButtonClose.setAttribute('type', 'button');
  elButtonClose.setAttribute('data-dismiss', 'alert');
  elButtonClose.setAttribute('aria-label', 'Close');

  // Create the "x" for close button
  var elSpanClose = document.createElement('span');
  elSpanClose.setAttribute('aria-hidden', 'true');
  elSpanClose.innerHTML = '&times;';

  // Create message for alert
  var elSpanAlert = document.createElement('span');
  elSpanAlert.textContent = 'Thank you! Your message has been successfully sent. We will contact you very soon!';

  // Build the alert div and place it before the form
  parentDiv.insertBefore(elDivAlert, elForm);
  elDivAlert.appendChild(elButtonClose);
  elButtonClose.appendChild(elSpanClose);
  elDivAlert.appendChild(elSpanAlert);

  // Clear the form
  elForm.reset();

  // Remove key from localStorage so form doesn't repopulate on refresh, new tab, or new window
  localStorage.removeItem('contactForm');
}

/**
 * Repoulate inputs from localStorage
 **/
function repopulateFormInputs() {
  var contactFormStorage = localStorage.getItem('contactForm');

  // localStorage of contact form exist
  if (contactFormStorage !== null) {
    // Convert localStorage to an array
    var contactFormArr = JSON.parse(contactFormStorage);

    // Loop through the arr
    for (var i = 0; i < contactFormArr.length; i++) {
      // ID of <input>
      var id = contactFormArr[i].id;

      // Value of <input>
      var value = contactFormArr[i].value;

      // Get <input> by ID
      var elFormInput = document.getElementById(id);

      // Set value for <input>
      elFormInput.value = value;
    }
  }
}

/*---------------------------------------------------------------------------*\
 * Initialize                                                                *
\*---------------------------------------------------------------------------*/

repopulateFormInputs();

var elForm = document.getElementById('formContact');

elForm.addEventListener('keyup', onKeyUp);
elForm.addEventListener('submit', onSubmit);
