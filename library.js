let myLibrary = ['famished road'];
let table = document.querySelector('table');

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
    let input = prompt("Enter the books of choice");
    let book = new Book(input);
    myLibrary.push(book.title);
    displayBooks();
    
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

addBookToLibrary();

// const report = new Book('The Famished Road', 'Ben Okri', 245, 'read');
// console.log(report.info());
// const updike = new Book('Rabbit Run', 'John Updike', 500, 'not read yet');
// console.log(updike.info());