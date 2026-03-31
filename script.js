let allBooksData= [];
let allLikeData= {"likes":[], "liked":[]};
let allComments = {};

function init() {
    getBooksData();
    renderBookCards();
    getLikeData();
            console.table(allLikeData);
    getBooksComments(); 
    getLikeDataAndCommentsFromLokalStorage();
    renderAllLikes();
    renderAllComments();
}

function getLikeDataAndCommentsFromLokalStorage() {
    getLikeDataFromLokalStorage();
    getCommentsFromLokalStorage();
}

function getLikeDataFromLokalStorage() {
    let localLikes = JSON.parse(localStorage.getItem("likes"));
    let localLiked = JSON.parse(localStorage.getItem("liked"));

    if (localLikes != null) {
        allLikeData.likes = localLikes;
        allLikeData.liked = localLiked;
    }
}

function getCommentsFromLokalStorage() {
    for (let indexBook = 0; indexBook < allBooksData.length; indexBook++) {
        let localCommentsNames = JSON.parse(localStorage.getItem(indexBook + "_commentsNames"));
        let localComments = JSON.parse(localStorage.getItem(indexBook + "_comments"));

        if (localComments != null) {
            allComments[indexBook + "_commentsNames"] = localCommentsNames;
            allComments[indexBook + "_comments"] = localComments;
        }
    } 
}

function getBooksData() {
    for (let indexBook = 0; indexBook < books.length; indexBook++) {
        let bookData = [];

        bookData.bookTitle = books[indexBook].name;
        bookData.price = books[indexBook].price.toFixed(2).toString().replace(".", ",") + " €";
        bookData.gender = (books[indexBook].gender == "female") ? "Autorin" : "Autor"; 
        bookData.author = books[indexBook].author;
        bookData.published = books[indexBook].publishedYear;
        bookData.genre = books[indexBook].genre;

        allBooksData.push(bookData);
    }
}

function getLikeData() {
    for (let indexBook = 0; indexBook < books.length; indexBook++) {
        allLikeData.likes.push(books[indexBook].likes);
        allLikeData.liked.push(books[indexBook].liked);
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
    }
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
            allBooksData[indexBook].genre);
    }
}

function renderAllLikes() {
    for (let indexBook = 0; indexBook < allLikeData.likes.length; indexBook++) {
        renderLike(indexBook); 
    }
}

function renderLike(indexBook) {
    let likeRef = document.getElementById('#LikeContainer' + indexBook);
    let likes = allLikeData.likes[indexBook];
    likeRef.innerHTML = getLikeInformation(indexBook, likes);
}

function renderAllComments() {
    for (let indexBook = 0; indexBook < allBooksData.length; indexBook++) {
        renderComments(indexBook);
    }
}

function renderComments(indexBook) {
    let defaultRef = document.getElementById('#DefaultText' + indexBook);
    defaultRef.innerHTML = "";
    let commentsRef = document.getElementById('#Comments' + indexBook);
    commentsRef.innerHTML = "";
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

function addComment(indexBook) {
    let nameInputRef = document.getElementById('#NameInput' + indexBook);
    let commentInputRef = document.getElementById('#CommentInput' + indexBook);
    let namesKey = indexBook + "_commentsNames";
    let commentsKey = indexBook + "_comments";

    if(commentInputRef.value != "") {
        nameInputRef.value != "" ? allComments[namesKey].push(nameInputRef.value) : allComments[namesKey].push("Anonym");
        allComments[commentsKey].push(commentInputRef.value);
    }

    renderANDsaveSupplementedComment(indexBook, namesKey, commentsKey);
    nameInputRef.value = "";
    commentInputRef.value = "";
}

function renderANDsaveSupplementedComment(indexBook, namesKey, commentsKey) {
    renderComments(indexBook);
    localStorage.setItem(namesKey, JSON.stringify(allComments[namesKey]));
    localStorage.setItem(commentsKey, JSON.stringify(allComments[commentsKey]));
    
}

function like_dislike(indexBook) {
    let likeRef = document.getElementById('#LikeSymbol' + indexBook);
    likeRef.classList.toggle("Liked");
}