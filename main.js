const list = document.querySelectorAll('.list');

function activeLink() {
  list.forEach((e) => e.classList.remove('active'));
  this.classList.add('active')
}

list.forEach((e) => e.addEventListener('click', activeLink))