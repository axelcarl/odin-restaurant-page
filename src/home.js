export default function createHome() {
  let header = document.createElement('div');
  header.classList.add('header');

  let title = document.createElement('div')
  title.innerHTML = 'La Cucina';
  title.classList.add('title')
  header.appendChild(title);

  let btnDiv = document.createElement('div');
  btnDiv.classList.add('btn-container')
  let menuBtn = document.createElement('button');
  menuBtn.addEventListener('click', () => {
    document.querySelector('.home').style.display = 'none';
    document.querySelector('.menu').style.display = 'flex';
  })
  menuBtn.innerHTML = 'MENU';
  menuBtn.classList.add('btn');
  btnDiv.appendChild(menuBtn);
  header.appendChild(btnDiv);


  let footer = document.createElement('div');
  footer.classList.add('footer');
  let footerText = document.createElement('div');
  footerText.innerHTML = 'Want to contact us / make a reservation?';
  footerText.classList.add('footerText')
  footer.appendChild(footerText)

  btnDiv = document.createElement('div');
  btnDiv.classList.add('btn-container')
  let contactBtn = document.createElement('button');
  contactBtn.innerHTML = 'CONTACT';
  contactBtn.classList.add('btn');
  contactBtn.addEventListener('click', () => {
    document.querySelector('.home').style.display = 'none';
    document.querySelector('.contact').style.display = 'flex';
  })
  btnDiv.appendChild(contactBtn);
  footer.appendChild(btnDiv);

  document.querySelector('.home').appendChild(header);
  document.querySelector('.home').appendChild(footer);
}
