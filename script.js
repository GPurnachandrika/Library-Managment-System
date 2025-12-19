let books = [];

function addBook() {
  const book = {
    id: bookId.value,
    title: title.value,
    author: author.value,
    price: price.value,
    isAvailable: true
  };
  books.push(book);
  showMessage("✅ Book added successfully");
}

function searchByTitle() {
  const book = books.find(b => b.title.toLowerCase() === searchTitle.value.toLowerCase());
  showBook(book);
}

function searchByAuthor() {
  const book = books.find(b => b.author.toLowerCase() === searchAuthor.value.toLowerCase());
  showBook(book);
}

function rentBook() {
  const book = books.find(b => b.id == rentId.value);
  if (book && book.isAvailable) {
    book.isAvailable = false;
    showMessage("📕 Book rented successfully");
  } else {
    showMessage("❌ Book not available");
  }
}

function returnBook() {
  const book = books.find(b => b.id == rentId.value);
  if (book && !book.isAvailable) {
    book.isAvailable = true;
    showMessage("📗 Book returned successfully");
  } else {
    showMessage("❌ Book was not rented");
  }
}

function showAvailable() {
  displayList(books.filter(b => b.isAvailable), "Available Books");
}

function showRented() {
  displayList(books.filter(b => !b.isAvailable), "Rented Books");
}

function showBook(book) {
  if (!book) {
    showMessage("❌ Book not found");
    return;
  }
  output.innerHTML = `
    <p><b>ID:</b> ${book.id}</p>
    <p><b>Title:</b> ${book.title}</p>
    <p><b>Author:</b> ${book.author}</p>
    <p><b>Price:</b> ₹${book.price}</p>
    <p><b>Status:</b> ${book.isAvailable ? "Available" : "Rented"}</p>
  `;
}

function displayList(list, title) {
  output.innerHTML = `<h3>${title}</h3>` +
    list.map(b => `<p>${b.title} — ${b.author}</p>`).join("");
}

function showMessage(msg) {
  output.innerHTML = `<p>${msg}</p>`;
}
