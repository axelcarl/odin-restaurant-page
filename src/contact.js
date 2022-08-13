export default function createContact() {
  let header = document.createElement('div');
  header.classList.add('contact');

  let title = document.createElement('div')
  title.innerHTML = 'La Cucina';
  title.classList.add('title')
  header.appendChild(title);

  let btnDiv = document.createElement('div');
  btnDiv.classList.add('btn-container')
  let menuBtn = document.createElement('button');
  menuBtn.addEventListener('click', () => {
    document.querySelector('.menu').style.display = 'flex';
    document.querySelector('.contact').style.display = 'none';
  })
  menuBtn.innerHTML = 'MENU';
  menuBtn.classList.add('btn');
  btnDiv.appendChild(menuBtn);
  header.appendChild(btnDiv);

  let contactInfo = document.createElement('div');
  contactInfo.classList.add('contact-info')
  let phoneNumber = document.createElement('div');
  phoneNumber.innerHTML = '+02354345234'
  contactInfo.appendChild(phoneNumber)
  let email = document.createElement('div');
  email.innerHTML = 'restaurant@lacucina.com'
  contactInfo.appendChild(email)
  header.appendChild(contactInfo)
  document.querySelector('.contact').appendChild(header);
}
