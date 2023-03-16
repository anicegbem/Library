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
let span = document.querySelector('span');
let check = document.getElementById("read");
let cancel = document.getElementById("close");
let modal = document.getElementById("form");


function setStatus() {
    if(check.checked == true) {
        check.value = "Read";
    } else {
        check.value = "Not Read";
    }
    

}

function updateStatus(read) {
    read.addEventListener('click', function() {
        if(read.innerText === "Not Read") {
            read.innerText = "Read";
            read.style.background = "#0ea5e9";
            read.style.color = "white";
            myLibrary[myLibrary.length - 1].status = "Read";
    
        } else if (read.innerText === "Read") {
            read.innerText = "Not Read";
            read.style.background = "#e11d48";
            read.style.color = "white";
            myLibrary[myLibrary.length - 1].status = "Not Read"

        }
    })
    
}



function Book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
    
}

function addBookToLibrary() {
    // create the object instance
    setStatus();
    let book = new Book(title.value, author.value, pages.value, check.value);
    // console.log(book);
    // add the object to the array
    myLibrary.push(book);
    // display the items(title, pages, read, author) on screen
    displayBooks();
    
    
    
}

function displayBooks() {
    let titledata = document.createElement('td');
    titledata.style.padding = "20px";
    titledata.textContent = myLibrary[myLibrary.length - 1].title;
    titledata.style.width = "25%";
    // titledata.style.wordBreak = "break-all";
    // titledata.style.border = "1px solid black";

    let authordata = document.createElement('td');
    authordata.style.padding = "20px";
    authordata.textContent = myLibrary[myLibrary.length - 1].author;
    authordata.style.width = "25%";
    // authordata.style.border = "1px solid black"

    let pagedata = document.createElement('td');
    pagedata.style.padding = "20px";
    pagedata.textContent = myLibrary[myLibrary.length - 1].pages;
    pagedata.style.width = "25%";
    // pagedata.style.border = "1px solid black"

    let row = document.createElement('tr');
    row.style.width = "min-content";
    let read = document.createElement('button');
    read.style.width = "70px";
    read.style.fontSize = "13px";
    read.style.padding = "5px";
    read.style.border = "0.5px solid #e5e7eb";
    read.style.borderRadius = "3px";
    read.innerText = `${check.value}`;
    updateStatus(read);
    if(read.textContent === "Read") {
        read.style.background = "#0ea5e9";
        read.style.color = "white"
    } else {
        read.style.background = "#e11d48";
        read.style.color = "white";
    }

    // for(let i = 0; i < myLibrary.length; i++) {
    //     row.dataset.id = `${i}`;
    // }
    
    // setIndex();
    // Indexes appear to be set only on button click


    // row.dataset.id = `${}`
    row.append(titledata, authordata, pagedata);
    let remove = document.createElement('button');
    remove.style.width = "70px";
    remove.style.fontSize = "13px";
    remove.style.padding = "5px";
    remove.style.border = "0.5px solid #e5e7eb";
    remove.style.borderRadius = "3px";
    remove.textContent = "Delete";

    let rd = document.createElement('td');
    // rd.style.padding = "20px";
    rd.style.width = "25%";
    // rd.style.border = "1px solid black"

    let td = document.createElement('td');
    td.style.width = "25%";
    td.style.padding = "20px";
    rd.append(read);
    td.append(remove);
    row.append(rd);
    row.append(td);
    deleteBook(remove, row);
    tbody.append(row);
    table.append(tbody);
    
    // for(let book of myLibrary) {
    //     let titledata = document.createElement('td');
    //     titledata.textContent = book.title;
    //     let authordata = document.createElement('td');
    //     authordata.textContent = book.author;
    //     let pagedata = document.createElement('td');
    //     pagedata.textContent = book.pages;
    //     let row = document.createElement('tr');
    //     row.append(titledata, authordata, pagedata);
    //     let remove = document.createElement('button');
    //     remove.textContent = "delete"
    //     let td = document.createElement('td');
    //     td.append(remove);
    //     row.append(td);
    //     tbody.append(row);
    //     table.append(tbody);
    
    // }
}

function addNewBooks() {
    newbook.addEventListener('click', function() {
        form.style.display = "block";
        // form.style.position = "absolute";
        // form.style.top = "200px";

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
            // modal.style.display = "none";
            // form.style.display = "none";
            form.reset();
            // myLibrary.splice(myLibrary.length - 1, 1);
        }
        
    })
}

function deleteBook(remove, row) {
    remove.addEventListener('click', function() {
        // row.remove();
        
        // Code for removing elements from array can come in here
        let index = [...tbody.children].indexOf(row);
        myLibrary.splice(index, 1);
        row.remove();
        // for(let obj in myLibrary) {
        //     if(row.dataset.id === obj) {
        //         row.style.display = "none";
        //         myLibrary.splice(obj, 1);
        //     }
        // }

    })

}

// function closeForm() {
//     cancel.addEventListener('click', function() {
//         form.style.display = "none";
//         form.reset();
//     })
// }


// function setIndex() {
//     let rows = document.querySelectorAll('tr');
//     let arr = Array.from(rows);
//     for(let i = 0; i < arr.length; i++){
//         arr[i].dataset.id = `${i}`
//     }
//     // console.log(arr);
// }

// function deleteElement() {
//     for(let i = 0; i < arr.length; i++) {
//         arr[i].dataset.id = `${i}`; 

//     }
// }




addNewBooks();
submitBook();
setStatus();
// closeForm();
// setIndex();
// deleteElement();

