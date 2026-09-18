

const contactForm = document.querySelector('.js-form-section');
const  submitBtn = document.querySelector('.js-submit-button'); 
const statusMsg = document.querySelector('.status');
let timerId;
const coolDownTime = 3000;
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

    statusMsg.classList.remove('is-hidden');
    statusMsg.classList.add('is-visible');

    submitBtn.disabled = true;
    submitBtn.classList.add('is-disabled')

  clearTimeout(timerId);

  timerId = setTimeout(() => {
    statusMsg.classList.remove('is-visible');
    statusMsg.classList.add('is-hidden');

  submitBtn.disabled = false;
  submitBtn.classList.remove('is-disabled');
  } ,
coolDownTime)

});