// onclick function for search button
const bookArchive = (text) => {
  const books = document.getElementById('search-field').value;

  const url = `https://openlibrary.org/search.json?q=${text}`;

  // fetching url
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayBooks(data.docs));
};
// function for get data and displaying to ui
const displayBooks = (books) => {
  // console.log(books.length);

  const searchResult = document.getElementById('search-result');
  const count = document.getElementById('count');
  count.innerText = books.length;
  books.forEach((book) => {
    console.log(book);
    const div = document.createElement('div');
    div.classList.add('div');
    div.innerHTML = `
    
        <div class="card h-100">
            <div class='p-2'>
             <img src=" https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg" class="card-img-top
            
            " alt="...">
            </div>
            <div id='card-font' class="card-body">
                <h5 class="book-name">${book?.title}</h5>
               <h4 class="author-name">Writer: ${book?.author_name}</h4>
               <h4 class="published-date"> published Year: ${book?.first_publish_year}</h4>
               <h4 class="publisher-name">Publisher: ${book?.publisher}</h4>
            </div>
        </div>
        `;
    searchResult.appendChild(div);
  });
};

const search = document
  .getElementById('button-search')
  .addEventListener('click', () => {
    const searchText = document.getElementById('search-field').value;
    // console.log(searchText);
    bookArchive(searchText);
  });
