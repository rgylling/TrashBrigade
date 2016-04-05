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

function checkRequired(value) {
  if (value != '') {
    return true;
  }

  return false;
}

function checkEmail(value) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(value);
}

function onClick(event) {
  event.preventDefault();

  for (var i = 0; i < event.target.length; i++) {
    var elInput = event.srcElement[i];
    var id = elInput.id;
    var value = elInput.value.trim();
    var elP = elInput.nextElementSibling;

    if (messages[id] !== undefined) {
      var validationPass = checkRequired(value);

      if (validationPass == false) {
        elP.textContent = messages[id]['required'];
      }

      if (id == 'inputEmail' && validationPass == true) {
        validationPass = checkEmail(value);
        elP.textContent = messages[id]['valid'];
      }

      if (validationPass == true) {
        elP.className = 'hide';
      } else {
        elP.className = '';
      }
    }
  }
}

var localStoargeContactForm = localStoarge.getItem('contactForm');

var elForm = document.getElementById('formContact');

elForm.addEventListener('submit', onClick);
