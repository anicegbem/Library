class Book {
    constructor(title, author, pages, status) {
        this.title = title
        this.author = author
        this.pages = pages
        this.status = status

    }
}

function setStatus() {
    if(document.getElementById("read").checked == true) {
        document.getElementById("read").value = "Read";
    } else {
        document.getElementById("read").value = "Not Read";
    }
    

}


// class Book {
//     constructor() {

//     }
// }