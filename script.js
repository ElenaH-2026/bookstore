function init() {
    renderBookCards();
}

function renderBookCards() {
    let bookCardsRef = document.getElementById('#BookCards');

    for (let indexBook = 0; indexBook < books.length; indexBook++) {
        const bookTitle = books[indexBook].name;
        const price = books[indexBook].price.toFixed(2).toString().replace(".", ",") + " €";
        const likes = books[indexBook].likes;
        const author = books[indexBook].author;
        const published = books[indexBook].publishedYear;
        const genre = books[indexBook].genre;
        const gender = (books[indexBook].gender == "female") ? "Autorin" : "Autor"; 
    
        bookCardsRef.innerHTML += getBookCard(indexBook, bookTitle, price, likes, gender, author, published, genre);
        renderComments(indexBook);
    }
}

function renderComments(indexBook) {
    let commentsRef = document.getElementById('#Comments' + indexBook);
    commentsRef.innerHTML = getComments('commentName', 'comment');
}