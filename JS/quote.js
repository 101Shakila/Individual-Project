//Shakila Samaradiwakara 8886070
//Objects , jquery, functions, timers, event listener, arrow functions

$(document).ready(function () {


    //object array containing the authors and respective quote
    let quoteList = [
        {
            "quote": "Genius is one percent inspiration and ninety-nine percent perspiration.",
            "author": "Thomas Edison"
        },
        {
            "quote": "You can observe a lot just by watching.",
            "author": "Yogi Berra"
        },
        {
            "quote": "A house divided against itself cannot stand.",
            "author": "Abraham Lincoln"
        },
        {
            "quote": "Difficulties increase the nearer we get to the goal.",
            "author": "Johann Wolfgang von Goethe"
        },
        {
            "quote": "Fate is in your hands and no one elses",
            "author": "Byron Pulsifer"
        },
        {
            "quote": "Be the chief but never the lord.",
            "author": "Lao Tzu"
        },
        {
            "quote": "Nothing happens unless first we dream.",
            "author": "Carl Sandburg"
        },
        {
            "quote": "Well begun is half done.",
            "author": "Aristotle"
        },
        {
            "quote": "Life is a learning experience, only if you learn.",
            "author": "Yogi Berra"
        },
        {
            "quote": "Self-complacency is fatal to progress.",
            "author": "Margaret Sangster"
        },
        {
            "quote": "Peace comes from within. Do not seek it without.",
            "author": "Buddha"
        },
        {
            "quote": "What you give is what you get.",
            "author": "Byron Pulsifer"
        },
        {
            "quote": "We can only learn to love by loving.",
            "author": "Iris Murdoch"
        },
        {
            "quote": "Life is change. Growth is optional. Choose wisely.",
            "author": "Karen Clark"
        },
        {
            "quote": "You'll see it when you believe it.",
            "author": "Wayne Dyer"
        },
        {
            "quote": "Today is the tomorrow we worried about yesterday.",
            "author": "Shakila Sama"
        }
    ]


    const randomQuote = () => {


        //lets get a random quote based on the index
        let quoteIndex = Math.floor(Math.random() * quoteList.length);

        let quoteChosen = quoteList[quoteIndex].quote;
        let authorChosen = quoteList[quoteIndex].author;


        //capture the locaiton of where the text is displayed
        let quoteDisplay = $(".quote");
        let authorDisplay = $(".author");


        //display the randomly chosen quote and author from the jquery Object and fadein and out for asthetics
        //.html() returns the HTML content of the first element in the jQuery object or sets the HTML content for all elements in the jQuery object.
        quoteDisplay.fadeOut(200, function () {
            $(this).html(`"${quoteChosen}"`).fadeIn();
        });

        authorDisplay.fadeOut(200, function () {
            $(this).html(`"${authorChosen}"`).fadeIn();
        });


    }

    //function to show a random quote after a certain time - in this case 0.5 seconds.
    const randomQuoteTimer = () => {

        //activate the function randomQuote after 3 seconds to show a random quote after 0.5 seconds after starting.
        setTimeout(randomQuote, 500);

    }


    randomQuoteTimer();

    //Jquery event handler method
    $("#buttonQuote").click(function (evt) {
        evt.preventDefault(); //prevents the default action
        randomQuote();

    })


});