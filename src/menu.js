export default function createMenu() {
  let menuItem = document.createElement('div');
  let itemText;

  menuItem.classList.add('menu-div')
  itemText = document.createElement('div');
  itemText.innerHTML = 'Our fixed menu is 4 200 SEK per guest plus your choice of beverages. It is the same menu for lunch and dinner. Beverage pairing, alcoholic and non-alcoholic is available.';
  menuItem.appendChild(itemText)
  document.querySelector('.menu').appendChild(menuItem);

  menuItem = document.createElement('div');
  menuItem.classList.add('menu-div')
  itemText = document.createElement('div');
  itemText.innerHTML = 'Tables for the upcoming month will open for reservation on the 1st of each month at 10 AM local time.';
  menuItem.appendChild(itemText)
  document.querySelector('.menu').appendChild(menuItem);

  menuItem = document.createElement('div');
  itemText = document.createElement('div');
  itemText.innerHTML = '23 seats | 3 floors | 521 m²';
  menuItem.appendChild(itemText)
  menuItem.classList.add('menu-div')
  document.querySelector('.menu').appendChild(menuItem);

  let header = document.createElement('div')
  let headerText = document.createElement('div')
  headerText.innerHTML = 'La Cucina';
  headerText.classList.add('title')
  headerText.classList.add('menu-header-text')
  header.appendChild(headerText);
  header.classList.add('menu-header')

  let btnDiv = document.createElement('div');
  btnDiv.classList.add('menu-btn-container')
  let homeBtn = document.createElement('button');
  homeBtn.addEventListener('click', () => {
    document.querySelector('.home').style.display = 'flex';
    document.querySelector('.menu').style.display = 'none';
  })
  homeBtn.innerHTML = 'HOME';
  homeBtn.classList.add('btn');
  btnDiv.appendChild(homeBtn);
  header.appendChild(btnDiv);

  document.querySelector('.menu').appendChild(header);

  let footer = document.createElement('div');
  footer.classList.add('footer');
  footer.classList.add('footer-absolute');
  let footerText = document.createElement('div');
  footerText.innerHTML = 'Want to contact us / make a reservation?';
  footerText.classList.add('footerText')
  footer.appendChild(footerText)

  btnDiv = document.createElement('div');
  btnDiv.classList.add('btn-container')
  let contactBtn = document.createElement('button');
  contactBtn.addEventListener('click', () => {
    document.querySelector('.menu').style.display = 'none';
    document.querySelector('.contact').style.display = 'flex';
  })
  contactBtn.innerHTML = 'CONTACT';
  contactBtn.classList.add('btn');
  btnDiv.appendChild(contactBtn);
  footer.appendChild(btnDiv)
  document.querySelector('.menu').appendChild(footer);
}