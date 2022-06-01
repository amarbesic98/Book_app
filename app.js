class Book {
    constructor(title,author,isbn){
        this.title = title;
        this.author = author;
        this.isbn=isbn;

    }
}

class UI {
    static displayBooks() {
        const StoredBooks = [
            {
                title:"Book one",
                author:'Me',
                isbn:'33434'
            },
            {
                title:"Book two",
                author:'You',
                isbn:'11231'
            }
        ];
        const books = StoredBooks;

    
        books.forEach((book)=> UI.addBookToList(book))
    }

    static addBookToList(book){

       
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
      `;

      list.appendChild(row);

    }

    static clearFields(){
        document.querySelector('#title').value="";
        document.querySelector('#author').value="";
        document.querySelector('#isbn').value="";


    }
    static deleteBook(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }


    }
}


//event: display books
document.addEventListener('DOMContentLoaded', UI.displayBooks);


//event add a book
document.querySelector('#book-form').addEventListener('submit', (e)=> {
    
    e.preventDefault(); 
    
    //get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    //validate

    if(title === '' || author === '' || isbn === '') {
        alert('Please fill in all fields', 'danger');
      } else {
        // Instatiate book
        const book = new Book(title, author, isbn);
    
        // Add Book to UI
        UI.addBookToList(book);

        

        UI.clearFields();
      }

})

//event remove a book 

document.querySelector('#book-list').addEventListener('click',(e)=>{

    UI.deleteBook(e.target);

})