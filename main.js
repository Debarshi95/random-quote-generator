const Quotes = [
    [
        "Whatever you can do, or dream you can, begin it. Boldness has genius, power and magic in it.",
    ],
    [
        "Whatever the mind of man can conceive and believe, it can achieve.",
    ],
    [
        "The best time to plant a tree was 20 years ago. The second best time is now.",
    ],
    [
        "You can’t fall if you don’t climb. But there’s no joy in living your whole life on the ground.",
    ],
    [
        "It’s your place in the world; it’s your life. Go on and do all you can with it, and make it the life you want to live.",
    ]
];

const authors = [["Johann Wolfgang von Goethe"], ["Napoleon Hill"], ["Chinese Proverb"],
["Unknown"], ["Mae Jemison"]];


const changeQuoteBtn = document.querySelector("#new-quote");
const backBg = document.querySelector("body");
const changeQuotes = document.querySelector("#text");
const tweetQuoteBtn = document.querySelector("#tweet-quote");
const tumblrQuoteBtn = document.querySelector('#tumblr-quote');
const quotesAuthor = document.querySelector("#author");

const randomBgColors = ['MediumSeaGreen', 'orange', 'brown', 'skyblue', 'SlateBlue', 'Tomato'];


changeQuoteBtn.addEventListener('click', changeQuote);

function changeQuote() {
    let colorsList = Math.floor(Math.random() * randomBgColors.length);
    let generatedColors = randomBgColors[colorsList];
    backBg.style.backgroundColor = generatedColors;
    changeQuoteBtn.style.backgroundColor = generatedColors;
    tweetQuoteBtn.style.backgroundColor = generatedColors;
    tumblrQuoteBtn.style.backgroundColor = generatedColors;
    let newQuote = Math.floor(Math.random() * Quotes.length)
    let newAuthor = Math.floor(Math.random() * authors.length)

    changeQuotes.innerHTML = Quotes[newQuote];
    quotesAuthor.innerHTML = authors[newAuthor];

}
