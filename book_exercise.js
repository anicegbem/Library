function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages ${this.read}`;
    }
}

// const report = new Book('The Famished Road', 'Ben Okri', 245, 'read');
// console.log(report.info());
const updike = new Book('Rabbit Run', 'John Updike', 500, 'not read yet');
console.log(updike.info());