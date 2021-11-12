console.log("my name is kamal nayan goyal")

//constructor 

function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;

}

function Display() {

}

// add prototype 

Display.prototype.add = function (book) {
    let tablebody = document.getElementById('tablebody');
    let stringui = `
    <td>${book.name}</td>
    <td>${book.author}</td>
    <td>${book.type}</td>`

    tablebody.innerHTML += stringui;
}

Display.prototype.clear = function () {
    let libraryform = document.getElementById('libraryForm');
    libraryform.reset();

}

// validate function 

Display.prototype.validate = function(book){
    if (book.name.length < 2 || book.author.length < 2) {
        return false;
    }
    else {
        return true;
    }
}

Display.prototype.show = function(type,displayMessage){
    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>Message:</strong> ${displayMessage}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`

  setTimeout(function() {
      message.innerHTML='';
  }, 4000);
}


// add submit event listner to libraryform 

let libraryform = document.getElementById('libraryForm');
libraryform.addEventListener('submit', librayformsubmit);

function librayformsubmit(e) {
    let name = document.getElementById('BookName').value;
    let author = document.getElementById('Author').value;

    let Fiction = document.getElementById('Fiction');
    let Programing = document.getElementById('Programing');
    let Cooking = document.getElementById('Cooking');

    let type;

    if (Fiction.checked) {
        type = Fiction.value;
    }
    else if (Programing.checked) {
        type = Programing.value;
    }
    else if (Cooking.checked) {
        type = Cooking.value;

    }
    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success','Well done, The book added successfully.');
    }
    else {
        display.show('warning','Sorry you can not add this book.');
    }



    e.preventDefault();
}
