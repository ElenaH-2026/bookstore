let allBooksData= [];
let allLikeData= {"likes":[], "liked":[]};
let allComments = {};



function init() {
    getBooksAndLikeData();
            console.table(allBooksData);
            console.table(allLikeData);
    renderBookCards();
    getBooksComments(); 
            console.table(allComments);
    renderComments();
}

function getBooksAndLikeData() {
    for (let indexBook = 0; indexBook < books.length; indexBook++) {
        let bookData = [];

        bookData.bookTitle = books[indexBook].name;
        bookData.price = books[indexBook].price.toFixed(2).toString().replace(".", ",") + " €";
        bookData.gender = (books[indexBook].gender == "female") ? "Autorin" : "Autor"; 
        bookData.author = books[indexBook].author;
        bookData.published = books[indexBook].publishedYear;
        bookData.genre = books[indexBook].genre;

        allBooksData.push(bookData);

        allLikeData.likes.push(books[indexBook].likes);
        allLikeData.liked.push( books[indexBook].liked);
    }
}

function getBooksComments() {
    for (let indexBook = 0; indexBook < books.length; indexBook++) {
        let namesKey = indexBook + "_commentsNames";
        let commentsKey = indexBook + "_comments";
        namesArray = [];
        commentsArray = [];

        for (let indexComment = 0; indexComment < books[indexBook].comments.length; indexComment++) {
            namesArray.push(books[indexBook].comments[indexComment].name);
            commentsArray.push(books[indexBook].comments[indexComment].comment); 
        }

        allComments[namesKey] = namesArray;
        allComments[commentsKey] = commentsArray;
        localStorage.setItem(namesKey, []);
        localStorage.setItem(commentsKey, []);
    }
}

function saveCommentsToLocalStorage(params) {
    localStorage.setItem(key1, array1);
    localStorage.setItem(key2, array2);
}

function addComment(indexBook) {
    let id_name = '#NameInput' + indexBook;
    let id_comment = '#CommentInput' + indexBook;

    let nameInputRef = document.getElementById(id_name);
    let nameInput = nameInputRef.value;
    let commentInputRef = document.getElementById(id_comment);
    let commentInput = commentInputRef.value;

    if(commentInput != ""){
        nameInput != "" ? allComments[indexBook + "_commentsNames"].push(nameInput) : allComments[indexBook + "_commentsNames"].push("Anonym");
        allComments[indexBook + "_comments"].push(commentInput);
    }

    console.table(allComments[indexBook + "_commentsNames"]);
    console.table(allComments[indexBook + "_comments"]);

}


function renderBookCards() {
    let bookCardsRef = document.getElementById('#BookCards');
    for (let indexBook = 0; indexBook < allBooksData.length; indexBook++) {
        bookCardsRef.innerHTML += getBookCard(
            indexBook, 
            allBooksData[indexBook].bookTitle, 
            allBooksData[indexBook].price, 
            allBooksData[indexBook].gender, 
            allBooksData[indexBook].author, 
            allBooksData[indexBook].published, 
            allBooksData[indexBook].genre,
            allLikeData.likes[indexBook]
            );

        // renderLike(indexBook);
    }
}

function renderLike(indexBook) {
    let likeRef = document.getElementById('#Like' + indexBook);
    likeRef.innerHTML = " ";
    let likes = allLikeData.likes[indexBook];
    likeRef.innerHTML = getLikeInformation(likes);
}

function renderComments() {
    for (let indexBook = 0; indexBook < allBooksData.length; indexBook++) {

        let defaultRef = document.getElementById('#DefaultText' + indexBook);
        let commentsRef = document.getElementById('#Comments' + indexBook);
        let commentsNames = allComments[indexBook + "_commentsNames"];
        let comments = allComments[indexBook + "_comments"];
        

        if (comments.length > 0) {  
            for (let indexComment = 0; indexComment < comments.length; indexComment++) {
                const commentName = commentsNames[indexComment];
                const comment = comments[indexComment];
                
                commentsRef.innerHTML += getComments(commentName, comment);
            }
        } else {
            defaultRef.innerHTML = getDefaultText();
        }
    }
}
