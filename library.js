let myLibrary = [];
let table = document.querySelector('table');
let newbook = document.getElementById('new');
let form = document.querySelector('form');
let submit = document.getElementById('submit');
let author = document.getElementById('author');
let title = document.getElementById('title');
let pages = document.getElementById('pages');
let heads = document.querySelectorAll('th');
let tbody = document.querySelector('tbody');

function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
    // this.read = read
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages ${this.read}`;
    }
}

function addBookToLibrary() {
    // create the object instance
    let book = new Book(title.value, author.value, pages.value);
    console.log(book);
    // add the object to the array
    myLibrary.push(book);
    // display the items(title, pages, read, author) on screen
    displayBooks();
    
}

function displayBooks() {
    for(let book of myLibrary) {
        let titledata = document.createElement('td');
        titledata.textContent = book.title;
        let authordata = document.createElement('td');
        authordata.textContent = book.author;
        let pagedata = document.createElement('td');
        pagedata.textContent = book.pages;
        let row = document.createElement('tr');
        row.append(titledata, authordata, pagedata);
        tbody.append(row);
        table.append(tbody);
    
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

function submitBook() {
    submit.addEventListener('click', function() {
        if(title.value !== '' && author.value !== '' && pages.value !== '') {
            addBookToLibrary();
            table.style.display = "block";
            form.style.display = "none";
            form.reset();
        }
        
    })
}


addNewBooks();
submitBook();

