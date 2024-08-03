const feedbackFormStateKey = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

const dataFromLocalStorage = localStorage.getItem(feedbackFormStateKey);
let emailInput = document.querySelector('.feedback-form input[type="email"]');
let messageTextarea = document.querySelector('.feedback-form textarea');

if (dataFromLocalStorage != null) {
  formData = JSON.parse(dataFromLocalStorage);
  emailInput.value = formData.email;
  messageTextarea.value = formData.message;
}

const form = document.querySelector('.feedback-form');

form.addEventListener('input', () => {
  formData = {
    email: emailInput.value.trim(),
    message: messageTextarea.value.trim(),
  };
  localStorage.setItem(feedbackFormStateKey, JSON.stringify(formData));

  if (formData.email != '' && formData.message != '') {
    console.log(formData);
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();
  const elements = event.currentTarget.elements;

  if (
    elements.email.value.trim() === '' ||
    elements.message.value.trim() === ''
  ) {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem(feedbackFormStateKey);
    form.reset();
  }
});
