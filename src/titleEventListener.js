export default function titleListener() {
  document.querySelectorAll('.title').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelector('.home').style.display = 'flex';
      document.querySelector('.menu').style.display = 'none';
      document.querySelector('.contact').style.display = 'none';
    })
  })
}