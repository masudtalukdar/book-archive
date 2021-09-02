// get the value of the input field and set onClick
const searchBook = () => {
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  console.log(searchText);
};

const loadBooksDetail = (books) => {
  const url = `http://openlibrary.org/search.json?q=php`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displaySearchResult(data.books));
};

// create div
const displaySearchResult = (books) => {
  const searchResult = document.getElementById('book-detail');
  //   searchResult.textContent = '';
};

books.forEach((books) => {
       const div = document.getElementById('book-detail');
       div.classList.add('card');
       div.innerHTML = `
        <div id="book-detail" class="card-body">
          <h5 class="book-name">Book Name:${searchText}</h5>
          <h4 class="author-name">Writer:</h4>
          <h4 class="publisher-name">Publisher:</h4>
          <h4 class="published-date">First published Year:</h4>
        </div>
       `;
       searchResult.appendChild(div);
 };
