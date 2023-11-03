// quote part
let dogQuoteBtn = document.querySelector("#dog-quote");

dogQuoteBtn.addEventListener("click", generateQuote);

function generateQuote() {
    let quotes = {
        "-Oprah Winfrey":
            '"Over the years I have felt the truest, purest love—the love of God, really, I imagine thats what Gods love feels like—is the love that comes from your dog."',
        "-John Grogan":
            '"Such short little lives our pets have to spend with us, and they spend most of it waiting for us to come home each day."',
        "-W. Bruce Cameron":
            '"You can usually tell that a man is good if he has a dog who loves him."',
        "John Grogan":
            '"It is amazing how much love and laughter they bring into our lives and even how much closer we become with each other because of them."',
    };
    
    let authors = Object.keys(quotes);
    let author = authors[Math.floor(Math.random() * authors.length)];
    let quote = quotes[author];

    let textQuote = document.querySelector("#quoted");
    textQuote.innerHTML = quote;
    let textAuthor = document.querySelector("#author");
    textAuthor.innerHTML = author;
}
