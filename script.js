const books = [];
const form = document.querySelector('form');
const section = document.querySelector('section');
function addBook(event) {
  event.preventDefault();
  books.push({ id: parseInt(Math.random() * 1000), title: form.title.value, author: form.author.value });
  displayBooks();
  form.reset();
}
function removeBook(event) {
  if (event.target.id !== '') {
    for (let i = 0; i < books.length; i++) {
      if (books[i].id === parseInt(event.target.id)) { 
        books.splice(i, 1);
        displayBooks();
        break;
      }
    }
  }
}
function displayBooks() {
  section.innerHTML = '';
  const fragment = new DocumentFragment();
  books.forEach((book) => {
    const article = document.createElement('article');
    let articleHTML = `<div>${book.title}</div>`;
    articleHTML += `<div>${book.author}</div>`;
    articleHTML += `<button id="${book.id}">Remove</button>`;
    articleHTML += '<hr>';
    article.innerHTML = articleHTML;
    fragment.appendChild(article);
  });
  section.appendChild(fragment);
}
section.addEventListener('click', removeBook);
form.addEventListener('submit', addBook);
displayBooks();