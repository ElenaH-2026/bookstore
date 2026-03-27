
function init() {
    renderBookCards();
}

function renderBookCards() {
    let bookCardsRef = document.getElementById('#BookCards');

    for (let indexBook = 0; indexBook < books.length; indexBook++) {
        const bookTitle = books[indexBook].name;
        const price = books[indexBook].price.toFixed(2).toString().replace(".", ",") + " €";
        const likes = books[indexBook].likes;
        const gender = (books[indexBook].gender == "female") ? "Autorin" : "Autor"; 
        const author = books[indexBook].author;
        const published = books[indexBook].publishedYear;
        const genre = books[indexBook].genre;
        const commentsNamesArrayName = indexBook + "_commentsNames";
        const commentsArrayName = indexBook + "_comments";

    
        bookCardsRef.innerHTML += getBookCard(indexBook, bookTitle, price, likes, gender, author, published, genre);
        renderComments(indexBook, commentsNamesArrayName, commentsArrayName);
    }
}

function renderComments(indexBook, commentsNamesArrayName, commentsArrayName) {
    const commentsNamesKey = commentsNamesArrayName;
    const commentsKey = commentsArrayName;
    commentsNamesArrayName = [];
    commentsArrayName = [];

    let commentsRef = document.getElementById('#Comments' + indexBook);
    let commentsArray = books[indexBook].comments;

    if (commentsArray.length > 0) {  
        for (let indexComment = 0; indexComment < commentsArray.length; indexComment++) {
            const commentName = commentsArray[indexComment].name;
            const comment = commentsArray[indexComment].comment;
            
            commentsRef.innerHTML += getComments(commentName, comment);
            commentsNamesArrayName.push(commentName);
            commentsArrayName.push(comment);
        }
    } else {
        document.getElementById('#DefaultText' + indexBook).innerHTML = `Schreibe den ersten Kommentar.`;
    }

    saveCommentsToLocalStorage(commentsNamesKey, commentsNamesArrayName, commentsKey, commentsArrayName);
}

function saveCommentsToLocalStorage(commentsNamesKey, commentsNamesArrayName, commentsKey, commentsArrayName) {
    localStorage.setItem(commentsNamesKey, commentsNamesArrayName);
    localStorage.setItem(commentsKey, commentsArrayName);
}