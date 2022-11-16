// interactive cards
const displayedCardNumber = document.querySelector('.cards__front-number');
const userCardNumber = document.querySelector('#card__input-number');

const displayedName = document.querySelector('.cards__front-name');
const userName = document.querySelector('#card__input-name');

const displayedMM = document.querySelector('.cards__front-date-mm');
const userMM = document.querySelector('#card__input-mm');

const displayedYY = document.querySelector('.cards__front-date-yy');
const userYY = document.querySelector('#card__input-yy');

const displayedCVC = document.querySelector('.cards__back-cvc');
const userCVC = document.querySelector('#card__input-cvc');

const submitBtn = document.querySelector('.card__button');

const completedSection = document.querySelector('.completed__container');
const form = document.querySelector('.card__container');

function setCardNumber(e) {
  displayedCardNumber.innerText = format(e.target.value);
}

userCardNumber.addEventListener('keyup', setCardNumber);

function setCardName(e) {
  displayedName.innerText = e.target.value;
  if (!displayedName.innerText) {
    displayedName.innerText = userName.placeholder;
  }
}

userName.addEventListener('keyup', setCardName);

function setCardMonth(e) {
  displayedMM.innerText = e.target.value;
  if (!displayedMM.innerText) {
    displayedMM.innerText = userMM.placeholder;
  }
}

userMM.addEventListener('keyup', setCardMonth);

function setCardYear(e) {
  displayedYY.innerText = e.target.value;
  if (!displayedYY.innerText) {
    displayedYY.innerText = userYY.placeholder;
  }
}

userYY.addEventListener('keyup', setCardYear);

function setCardCVC(e) {
  displayedCVC.innerText = e.target.value;
  if (!displayedCVC.innerText) {
    displayedCVC.innerText = userCVC.placeholder;
  }
}

userCVC.addEventListener('keyup', setCardCVC);

function format(s) {
  return s.toString().replace(/\d{4}(?=.)/g, '$&');
}

function handleSubmit(e) {
  e.preventDefault();
  if (!userName.value) {
    userName.classList.add('error');
    userName.parentElement.classList.add('error__message');
  } else {
    userName.classList.remove('error');
    userName.parentElement.classList.remove('error__message');
  }

  if (!userCardNumber.value) {
    userCardNumber.classList.add('error');
    userCardNumber.parentElement.classList.add('error__message');
  } else {
    userCardNumber.classList.remove('error');
    userCardNumber.parentElement.classList.remove('error__message');
  }

  if (!userMM.value) {
    userMM.classList.add('error');
    userMM.parentElement.classList.add('error__message');
  } else {
    userMM.classList.remove('error');
    userMM.parentElement.classList.remove('error__message');
  }

  if (!userYY.value) {
    userYY.classList.add('error');
    userYY.parentElement.classList.add('error__message');
  } else {
    userYY.classList.remove('error');
    userYY.parentElement.classList.remove('error__message');
  }

  if (!userCVC.value) {
    userCVC.classList.add('error');
    userCVC.parentElement.classList.add('error__message');
  } else {
    userCVC.classList.remove('error');
    userCVC.parentElement.classList.remove('error__message');
  }
}

submitBtn.addEventListener('click', handleSubmit);

// prevent number inputs
function preventNumberInput(event) {
  var code = event.which ? event.which : event.keyCode;
  if ((code < 48 || code > 57) && code > 31) {
    return false;
  }

  return true;
}

// credit card format
function cc_format(value) {
  var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
  var matches = v.match(/\d{4,16}/g);
  var match = (matches && matches[0]) || '';
  var parts = [];

  for (let i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4));
  }

  if (parts.length) {
    return parts.join(' ');
  } else {
    return value;
  }
}

onload = function () {
  document.getElementById('card__input-number').oninput = function () {
    this.value = cc_format(this.value);
  };
};
