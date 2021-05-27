const myLibrary = [];

const book = (author, title, pages, read) => {
  const getBooks = () => myLibrary;

  const addBookToLibrary = () => {
    myLibrary.push({
      author, title, pages, read,
    });
  };

  return {
    addBookToLibrary, author, title, pages, read, getBooks,
  };
};

const ui = () => {
  const addBookToUi = (book) => {
    const list = document.getElementById('book-list');
    // Create tr element
    const row = document.createElement('tr');
    // Insert cols

    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.pages}</td>
        <td><a href="#" class="change">${book.read}<a></td>
        <td><a href="#" class="delete">X<a></td>`;

    list.appendChild(row);
  };

  const showAlert = (message, className) => {
    // Create a div
    const div = document.createElement('div');
    // Add classes
    div.className = `alert ${className}`;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get paremt
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    // Insert alert
    container.insertBefore(div, form);

    // Timeout after 3 sec
    setTimeout(() => {
      document.querySelector('.alert').remove();
    }, 3000);
  };

  const deleteBook = (target) => {
    if (target.className === 'delete') {
      target.parentElement.parentElement.remove();
    }
  };
  const changeRead = (target) => {
    if (target.className === 'change') {
      if (target.text === 'Yes') {
        target.text = 'No';
      } else if (target.text === 'No') {
        target.text = 'Yes';
      }
    }
  };

  const clearFields = () => {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';
    document.getElementById('read').checked = false;
  };
  return {
    addBookToUi, showAlert, clearFields, deleteBook, changeRead,
  };
};

// Event Listener for Add book
document.getElementById('book-form').addEventListener('submit', (e) => {
  e.preventDefault();
  // get form values
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read');

  // Instantiate book

  const readValue = read.checked ? 'Yes' : 'No';
  const myBook = book(title, author, pages, readValue);
  // Add to library
  myBook.addBookToLibrary();

  // Instantiate UI
  const myUi = ui();

  // Validate
  if (title === '' || author === '' || pages === '') {
    // Error alert
    myUi.showAlert('Please fill in all fields', 'error');
  } else {
    // Add book to list
    myUi.addBookToUi(myBook);

    // Show success
    myUi.showAlert('Book Added', 'success');

    // Clear fields
    myUi.clearFields();
  }
});

// Event Listener for Delete
document.getElementById('book-list').addEventListener('click', (e) => {
  const myUi = ui();

  myUi.deleteBook(e.target);

  e.preventDefault();
});

// Event Listener for Change
document.getElementById('book-list').addEventListener('click', (e) => {
  const myUi = ui();

  myUi.changeRead(e.target);

  e.preventDefault();
});