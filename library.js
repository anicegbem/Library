let myLibrary = ['The Famished Road'];
let table = document.querySelector('table');
let newbook = document.getElementById('new');
let form = document.querySelector('form');
let submit = document.getElementById('submit');

function Book(title) {
    this.title = title
    // this.author = author
    // this.pages = pages
    // this.read = read
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages ${this.read}`;
    }
}

function addBookToLibrary() {
    // let input = prompt("Enter the books of choice");
    // let book = new Book(input);
    // myLibrary.push(book.title);
    // displayBooks();
    
}

function displayBooks() {
    for(let book of myLibrary) {
        let data = document.createElement("td");
        data.textContent = book;
        let row = document.createElement('tr');
        row.append(data);
        table.append(row);

    }
}

function addNewBooks() {
    newbook.addEventListener('click', function() {
        form.style.display = "block";

    })
}

submit.addEventListener('click', stopSubmit, false);

function stopSubmit(event) {
    event.preventDefault();
}

addBookToLibrary();
addNewBooks();

