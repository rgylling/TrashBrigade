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

function checkEmail(value) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(value);
}

function checkRequired(value) {
  if (value != '') {
    return true;
  }

  return false;
}

function onSubmit(event) {
  event.preventDefault();

  var elForm = event.target;
  var formUrl = elForm.action;
  var formType = elForm.method;
  var formData = {};
  var validationArr = [];

  for (var i = 0; i < elForm.length; i++) {
    var elInput = elForm[i];
    var inputName = elInput.name;

    if (inputName != 'submit') {
      var inputId = elInput.id;
      var inputValue = elInput.value.trim();
      var elP = elInput.nextElementSibling;

      formData[inputName] = inputValue;

      var validationPass = checkRequired(inputValue);
      validationArr.push(validationPass);

      if (validationPass == false) {
        elP.textContent = messages[inputId].required;
      }

      if (inputId == 'inputEmail' && validationPass == true) {
        validationPass = checkEmail(inputValue);
        validationArr.push(validationPass);
        elP.textContent = messages[inputId].valid;
      }

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

function onKeyUp(event) {
  var contactFormArr = [];
  var elForm = event.target.form;

  for (var i = 0; i < elForm.length; i++) {
    var elFormInput = elForm[i];

    if (elFormInput.name != 'submit') {
      contactFormArr.push({
        id: elFormInput.id,
        value: elFormInput.value
      });
    }
  }

  var contactFormStr = JSON.stringify(contactFormArr);
  localStorage.setItem('contactForm', contactFormStr);
}

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

function postFormSuccess() {
  var parentDiv = elForm.parentNode;

  var elDivAlert = document.createElement('div');
  elDivAlert.className = 'alert alert-success alert-dismissible';
  elDivAlert.setAttribute('role', 'alert');

  var elButtonClose = document.createElement('button');
  elButtonClose.className = 'close';
  elButtonClose.setAttribute('type', 'button');
  elButtonClose.setAttribute('data-dismiss', 'alert');
  elButtonClose.setAttribute('aria-label', 'Close');

  var elSpanClose = document.createElement('span');
  elSpanClose.setAttribute('aria-hidden', 'true');
  elSpanClose.innerHTML = '&times;';

  var elSpanAlert = document.createElement('span');
  elSpanAlert.textContent = 'Thank you! Your message has been successfully sent. We will contact you very soon!';

  parentDiv.insertBefore(elDivAlert, elForm);
  elDivAlert.appendChild(elButtonClose);
  elButtonClose.appendChild(elSpanClose);
  elDivAlert.appendChild(elSpanAlert);

  elForm.reset();
  localStorage.removeItem('contactForm');
}

function repopulateFormInputs() {
  var contactFormStorage = localStorage.getItem('contactForm');

  if (contactFormStorage !== null) {
    var contactFormArr = JSON.parse(contactFormStorage);

    for (var i = 0; i < contactFormArr.length; i++) {
      var id = contactFormArr[i].id;
      var value = contactFormArr[i].value;
      var elFormInput = document.getElementById(id);
      elFormInput.value = value;
    }
  }
}

repopulateFormInputs();

var elForm = document.getElementById('formContact');

elForm.addEventListener('keyup', onKeyUp);
elForm.addEventListener('submit', onSubmit);
