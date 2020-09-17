const btn = document.querySelector('.fix');
btn.addEventListener('click', () => {
  scrollTo(0,5);
})

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const span = document.querySelector('#submit');
  span.innerHTML = '<i style="color: white" class="fa fa-circle-o-notch fa-spin"></i>';
const name = document.querySelector('form').nm.value;
const email = document.querySelector('form').email.value;
const msg = document.querySelector('form').msg.value;

const url = `https://tuliv.in/Fk/mail.php?from=${email}&name=${name}&msg=${msg}`;
fetch(url)
span.style.color = 'white';
document.querySelector('#sub').style.color = "white";
document.querySelector('#sub').style.background = "dodgerblue";
span.textContent = 'message sent'
  
})
