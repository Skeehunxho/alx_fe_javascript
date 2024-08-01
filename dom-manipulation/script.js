// Quote array
let quotes = [];

// Declare server URL
const serverUrl = 'https://jsonplaceholder.typicode.com/posts';

// Load quotes from local storage
function loadQuotes() {
    const storedQuotes = localStorage.getItem('quotes');
    if (storedQuotes) {
        quotes = JSON.parse(storedQuotes);
    } else {
        quotes = [
            {
                "category": "success",
                "quotes": [
                    {
                        "text": "Success is not final, failure is not fatal: it is the courage to continue that counts.",
                        "author": "Winston Churchill"
                    },
                    {
                        "text": "The secret of success is to do the common thing uncommonly well.",
                        "author": "John D. Rockefeller Jr."
                    },
                    {
                        "text": "I find that the harder I work, the more luck I seem to have.",
                        "author": "Thomas Jefferson"
                    },
                    {
                        "text": "Success is walking from failure to failure with no loss of enthusiasm.",
                        "author": "Winston Churchill"
                    },
                    {
                        "text": "The way to get started is to quit talking and begin doing.",
                        "author": "Walt Disney"
                    },
                    {
                        "text": "Don't be afraid to give up the good to go for the great.",
                        "author": "John D. Rockefeller"
                    },
                    {
                        "text": "Success usually comes to those who are too busy to be looking for it.",
                        "author": "Henry David Thoreau"
                    },
                    {
                        "text": "If you really look closely, most overnight successes took a long time.",
                        "author": "Steve Jobs"
                    },
                    {
                        "text": "The difference between successful people and very successful people is that very successful people say 'no' to almost everything.",
                        "author": "Warren Buffett"
                    },
                    {
                        "text": "Success is not how high you have climbed, but how you make a positive difference to the world.",
                        "author": "Roy T. Bennett"
                    },
                    {
                        "text": "I never dreamed about success. I worked for it.",
                        "author": "Estée Lauder"
                    },
                    {
                        "text": "Success is liking yourself, liking what you do, and liking how you do it.",
                        "author": "Maya Angelou"
                    },
                    {
                        "text": "The road to success and the road to failure are almost exactly the same.",
                        "author": "Colin R. Davis"
                    },
                    {
                        "text": "Success is not in what you have, but who you are.",
                        "author": "Bo Bennett"
                    },
                    {
                        "text": "The only place where success comes before work is in the dictionary.",
                        "author": "Vidal Sassoon"
                    },
                    {
                        "text": "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.",
                        "author": "Colin Powell"
                    },
                    {
                        "text": "Success is stumbling from failure to failure with no loss of enthusiasm.",
                        "author": "Winston S. Churchill"
                    },
                    {
                        "text": "The size of your success is measured by the strength of your desire, the size of your dream, and how you handle disappointment along the way.",
                        "author": "Robert Kiyosaki"
                    },
                    {
                        "text": "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
                        "author": "Albert Schweitzer"
                    },
                    {
                        "text": "The successful warrior is the average man, with laser-like focus.",
                        "author": "Bruce Lee"
                    },
                    {
                        "text": "Success is getting what you want. Happiness is wanting what you get.",
                        "author": "Dale Carnegie"
                    },
                    {
                        "text": "The secret of success is to know something nobody else knows.",
                        "author": "Aristotle Onassis"
                    },
                    {
                        "text": "The whole secret of a successful life is to find out what is one's destiny to do, and then do it.",
                        "author": "Henry Ford"
                    },
                    {
                        "text": "Success is the sum of small efforts, repeated day in and day out.",
                        "author": "Robert Collier"
                    },
                    {
                        "text": "The secret to success is to know something nobody else knows.",
                        "author": "Aristotle Onassis"
                    },
                    {
                        "text": "Success is not about the destination, it's about the journey.",
                        "author": "Zig Ziglar"
                    },
                    {
                        "text": "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will.",
                        "author": "Vince Lombardi"
                    },
                    {
                        "text": "Success is peace of mind, which is a direct result of self-satisfaction in knowing you made the effort to become the best of which you are capable.",
                        "author": "John Wooden"
                    },
                    {
                        "text": "The key to success is to focus our conscious mind on things we desire not things we fear.",
                        "author": "Brian Tracy"
                    },
                    {
                        "text": "Success is not measured by what you accomplish, but by the opposition you have encountered, and the courage with which you have maintained the struggle against overwhelming odds.",
                        "author": "Orison Swett Marden"
                    },
                    {
                        "text": "The only place success comes before work is in the dictionary.",
                        "author": "Vince Lombardi"
                    },
                    {
                        "text": "Success is not the absence of failure; it's the persistence through failure.",
                        "author": "Aisha Tyler"
                    },
                    {
                        "text": "Success is not built on success. It's built on failure. It's built on frustration. Sometimes it's built on catastrophe.",
                        "author": "Sumner Redstone"
                    },
                    {
                        "text": "Success is a lousy teacher. It seduces smart people into thinking they can't lose.",
                        "author": "Bill Gates"
                    },
                    {
                        "text": "Success is the progressive realization of a worthy goal or ideal.",
                        "author": "Earl Nightingale"
                    }
                ]
            },
            {
                "category": "motivation",
                "quotes": [
                    {
                        "text": "The only way to do great work is to love what you do.",
                        "author": "Steve Jobs"
                    },
                    {
                        "text": "Believe you can and you're halfway there.",
                        "author": "Theodore Roosevelt"
                    },
                    {
                        "text": "Your time is limited, don't waste it living someone else's life.",
                        "author": "Steve Jobs"
                    },
                    {
                        "text": "It always seems impossible until it's done.",
                        "author": "Nelson Mandela"
                    },
                    {
                        "text": "Don't watch the clock; do what it does. Keep going.",
                        "author": "Sam Levenson"
                    },
                    {
                        "text": "The future belongs to those who believe in the beauty of their dreams.",
                        "author": "Eleanor Roosevelt"
                    },
                    {
                        "text": "Success is not final, failure is not fatal: it is the courage to continue that counts.",
                        "author": "Winston Churchill"
                    },
                    {
                        "text": "Strive not to be a success, but rather to be of value.",
                        "author": "Albert Einstein"
                    },
                    {
                        "text": "The only limit to our realization of tomorrow will be our doubts of today.",
                        "author": "Franklin D. Roosevelt"
                    },
                    {
                        "text": "Do what you can, with what you have, where you are.",
                        "author": "Theodore Roosevelt"
                    },
                    {
                        "text": "Everything you've ever wanted is on the other side of fear.",
                        "author": "George Addair"
                    },
                    {
                        "text": "Dream big and dare to fail.",
                        "author": "Norman Vaughan"
                    },
                    {
                        "text": "You miss 100% of the shots you don't take.",
                        "author": "Wayne Gretzky"
                    },
                    {
                        "text": "I have not failed. I've just found 10,000 ways that won't work.",
                        "author": "Thomas A. Edison"
                    },
                    {
                        "text": "The greatest glory in living lies not in never falling, but in rising every time we fall.",
                        "author": "Nelson Mandela"
                    },
                    {
                        "text": "Life is 10% what happens to you and 90% how you react to it.",
                        "author": "Charles R. Swindoll"
                    },
                    {
                        "text": "Whether you think you can or you think you can't, you're right.",
                        "author": "Henry Ford"
                    },
                    {
                        "text": "The best way to predict the future is to create it.",
                        "author": "Peter Drucker"
                    },
                    {
                        "text": "You are never too old to set another goal or to dream a new dream.",
                        "author": "C.S. Lewis"
                    },
                    {
                        "text": "The only person you are destined to become is the person you decide to be.",
                        "author": "Ralph Waldo Emerson"
                    },
                    {
                        "text": "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
                        "author": "Jimmy Dean"
                    },
                    {
                        "text": "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
                        "author": "Christian D. Larson"
                    },
                    {
                        "text": "Don't let yesterday take up too much of today.",
                        "author": "Will Rogers"
                    },
                    {
                        "text": "You don't have to be great to start, but you have to start to be great.",
                        "author": "Zig Ziglar"
                    },
                    {
                        "text": "Press forward. Do not stop, do not linger in your journey, but strive for the mark set before you.",
                        "author": "George Whitefield"
                    },
                    {
                        "text": "The only way to achieve the impossible is to believe it is possible.",
                        "author": "Charles Kingsleigh"
                    },
                    {
                        "text": "Start where you are. Use what you have. Do what you can.",
                        "author": "Arthur Ashe"
                    },
                    {
                        "text": "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
                        "author": "Roy T. Bennett"
                    },
                    {
                        "text": "If you want to achieve greatness stop asking for permission.",
                        "author": "Anonymous"
                    },
                    {
                        "text": "Things work out best for those who make the best of how things work out.",
                        "author": "John Wooden"
                    },
                    {
                        "text": "Success is walking from failure to failure with no loss of enthusiasm.",
                        "author": "Winston Churchill"
                    },
                    {
                        "text": "Just one small positive thought in the morning can change your whole day.",
                        "author": "Dalai Lama"
                    },
                    {
                        "text": "Opportunities don't happen, you create them.",
                        "author": "Chris Grosser"
                    },
                    {
                        "text": "Love your family, work super hard, live your passion.",
                        "author": "Gary Vaynerchuk"
                    },
                    {
                        "text": "It's not whether you get knocked down, it's whether you get up.",
                        "author": "Vince Lombardi"
                    }
                ]
            },
            {
                "category": "wisdom",
                "quotes": [
                    {
                        "text": "The only true wisdom is in knowing you know nothing.",
                        "author": "Socrates"
                    },
                    {
                        "text": "The journey of a thousand miles begins with one step.",
                        "author": "Lao Tzu"
                    },
                    {
                        "text": "Knowing yourself is the beginning of all wisdom.",
                        "author": "Aristotle"
                    },
                    {
                        "text": "The only way to do great work is to love what you do.",
                        "author": "Steve Jobs"
                    },
                    {
                        "text": "It is the mark of an educated mind to be able to entertain a thought without accepting it.",
                        "author": "Aristotle"
                    },
                    {
                        "text": "The greatest wealth is to live content with little.",
                        "author": "Plato"
                    },
                    {
                        "text": "The unexamined life is not worth living.",
                        "author": "Socrates"
                    },
                    {
                        "text": "Happiness is not something ready-made. It comes from your own actions.",
                        "author": "Dalai Lama"
                    },
                    {
                        "text": "The secret of getting ahead is getting started.",
                        "author": "Mark Twain"
                    },
                    {
                        "text": "Be the change that you wish to see in the world.",
                        "author": "Mahatma Gandhi"
                    },
                    {
                        "text": "The only true wisdom is in knowing you know nothing.",
                        "author": "Socrates"
                    },
                    {
                        "text": "Life is really simple, but we insist on making it complicated.",
                        "author": "Confucius"
                    },
                    {
                        "text": "In the end, it's not the years in your life that count. It's the life in your years.",
                        "author": "Abraham Lincoln"
                    },
                    {
                        "text": "The best revenge is massive success.",
                        "author": "Frank Sinatra"
                    },
                    {
                        "text": "The purpose of our lives is to be happy.",
                        "author": "Dalai Lama"
                    },
                    {
                        "text": "Get busy living or get busy dying.",
                        "author": "Stephen King"
                    },
                    {
                        "text": "Those who cannot change their minds cannot change anything.",
                        "author": "George Bernard Shaw"
                    },
                    {
                        "text": "If you tell the truth, you don't have to remember anything.",
                        "author": "Mark Twain"
                    },
                    {
                        "text": "The only way to have a friend is to be one.",
                        "author": "Ralph Waldo Emerson"
                    },
                    {
                        "text": "I have not failed. I've just found 10,000 ways that won't work.",
                        "author": "Thomas A. Edison"
                    },
                    {
                        "text": "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
                        "author": "Ralph Waldo Emerson"
                    },
                    {
                        "text": "It does not matter how slowly you go as long as you do not stop.",
                        "author": "Confucius"
                    },
                    {
                        "text": "Everything has beauty, but not everyone sees it.",
                        "author": "Confucius"
                    },
                    {
                        "text": "Whenever you find yourself on the side of the majority, it is time to pause and reflect.",
                        "author": "Mark Twain"
                    },
                    {
                        "text": "The greatest glory in living lies not in never falling, but in rising every time we fall.",
                        "author": "Nelson Mandela"
                    },
                    {
                        "text": "The only impossible journey is the one you never begin.",
                        "author": "Tony Robbins"
                    },
                    {
                        "text": "Wisdom is not a product of schooling but of the lifelong attempt to acquire it.",
                        "author": "Albert Einstein"
                    },
                    {
                        "text": "The secret of change is to focus all of your energy not on fighting the old, but on building the new.",
                        "author": "Socrates"
                    },
                    {
                        "text": "The only true wisdom is in knowing you know nothing.",
                        "author": "Socrates"
                    },
                    {
                        "text": "The greatest wealth is to live content with little.",
                        "author": "Plato"
                    },
                    {
                        "text": "Know thyself.",
                        "author": "Socrates"
                    },
                    {
                        "text": "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.",
                        "author": "Plato"
                    }
                ]
            },
            {
                "category": "relationship",
                "quotes": [
                    {
                        "text": "The best thing to hold onto in life is each other.",
                        "author": "Audrey Hepburn"
                    },
                    {
                        "text": "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
                        "author": "Dr. Seuss"
                    },
                    {
                        "text": "Love is composed of a single soul inhabiting two bodies.",
                        "author": "Aristotle"
                    },
                    {
                        "text": "To love and be loved is to feel the sun from both sides.",
                        "author": "David Viscott"
                    },
                    {
                        "text": "The greatest happiness of life is the conviction that we are loved.",
                        "author": "Victor Hugo"
                    },
                    {
                        "text": "Love does not consist in gazing at each other, but in looking outward together in the same direction.",
                        "author": "Antoine de Saint-Exupéry"
                    },
                    {
                        "text": "The meeting of two personalities is like the contact of two chemical substances: if there is any reaction, both are transformed.",
                        "author": "Carl Jung"
                    },
                    {
                        "text": "A successful marriage requires falling in love many times, always with the same person.",
                        "author": "Mignon McLaughlin"
                    },
                    {
                        "text": "The secret of a happy marriage remains a secret.",
                        "author": "Henny Youngman"
                    },
                    {
                        "text": "Love is not about how many days, months, or years you have been together. Love is about how much you love each other every single day.",
                        "author": "Unknown"
                    },
                    {
                        "text": "The best love is the kind that awakens the soul and makes us reach for more, that plants a fire in our hearts and brings peace to our minds.",
                        "author": "Nicholas Sparks"
                    },
                    {
                        "text": "Love is friendship that has caught fire.",
                        "author": "Ann Landers"
                    },
                    {
                        "text": "A great marriage is not when the 'perfect couple' comes together. It is when an imperfect couple learns to enjoy their differences.",
                        "author": "Dave Meurer"
                    },
                    {
                        "text": "The greatest marriages are built on teamwork. A mutual respect, a healthy dose of admiration, and a never-ending portion of love and grace.",
                        "author": "Fawn Weaver"
                    },
                    {
                        "text": "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
                        "author": "Lao Tzu"
                    },
                    {
                        "text": "Love is not about possession. Love is about appreciation.",
                        "author": "Osho"
                    },
                    {
                        "text": "The best and most beautiful things in this world cannot be seen or even heard, but must be felt with the heart.",
                        "author": "Helen Keller"
                    },
                    {
                        "text": "To love is nothing. To be loved is something. But to love and be loved, that's everything.",
                        "author": "T. Tolis"
                    },
                    {
                        "text": "A loving relationship is one in which the loved one is free to be himself — with the partner loving him for what he really is, not for what she wants him to be.",
                        "author": "Leo Buscaglia"
                    },
                    {
                        "text": "The most important thing in life is to learn how to give out love, and to let it come in.",
                        "author": "Morrie Schwartz"
                    },
                    {
                        "text": "Love is a game that two can play and both win.",
                        "author": "Eva Gabor"
                    },
                    {
                        "text": "The purpose of a relationship is not to have another who might complete you, but to have another with whom you might share your completeness.",
                        "author": "Neale Donald Walsch"
                    },
                    {
                        "text": "Love doesn't make the world go round. Love is what makes the ride worthwhile.",
                        "author": "Franklin P. Jones"
                    },
                    {
                        "text": "The giving of love is an education in itself.",
                        "author": "Eleanor Roosevelt"
                    },
                    {
                        "text": "Love is the only force capable of transforming an enemy into a friend.",
                        "author": "Martin Luther King Jr."
                    },
                    {
                        "text": "Love is a canvas furnished by nature and embroidered by imagination.",
                        "author": "Voltaire"
                    },
                    {
                        "text": "The art of love is largely the art of persistence.",
                        "author": "Albert Ellis"
                    },
                    {
                        "text": "Love is an endless act of forgiveness.",
                        "author": "Beyoncé"
                    },
                    {
                        "text": "The course of true love never did run smooth.",
                        "author": "William Shakespeare"
                    },
                    {
                        "text": "Love is like the wind, you can't see it but you can feel it.",
                        "author": "Nicholas Sparks"
                    },
                    {
                        "text": "In love there are two things: bodies and words.",
                        "author": "Joyce Carol Oates"
                    },
                    {
                        "text": "Where there is love there is life.",
                        "author": "Mahatma Gandhi"
                    },
                    {
                        "text": "Love is a better teacher than duty.",
                        "author": "Albert Einstein"
                    },
                    {
                        "text": "Love is the flower you've got to let grow.",
                        "author": "John Lennon"
                    },
                    {
                        "text": "True love stories never have endings.",
                        "author": "Richard Bach"
                    }
                ]
            },
            {
                "category": "funny",
                "quotes": [
                    {
                        "text": "I'm not afraid of death. I just don't want to be there when it happens.",
                        "author": "Woody Allen"
                    },
                    {
                        "text": "Behind every great man is a woman rolling her eyes.",
                        "author": "Jim Carrey"
                    },
                    {
                        "text": "I used to think I was indecisive, but now I'm not so sure.",
                        "author": "Unknown"
                    },
                    {
                        "text": "I'm not arguing, I'm just explaining why I'm right.",
                        "author": "Unknown"
                    },
                    {
                        "text": "I'm not lazy, I'm just on energy-saving mode.",
                        "author": "Unknown"
                    },
                    {
                        "text": "I don't need Google, my wife knows everything.",
                        "author": "Unknown"
                    },
                    {
                        "text": "I don't always have time to do the things I want to do, but when I do, I don't want to.",
                        "author": "Unknown"
                    },
                    {
                        "text": "I don't need anger management. You just need to stop making me angry.",
                        "author": "Unknown"
                    },
                    {
                        "text": "I don't have a bad handwriting, I have my own font.",
                        "author": "Unknown"
                    },
                    {
                        "text": "I don't need Google, my mom knows everything.",
                        "author": "Unknown"
                    }
                ]
            }
        ];
    }
}

// Save quotes to local storage
function saveQuotes() {
    localStorage.setItem('quotes', JSON.stringify(quotes));
}

// Populate categories in the filter dropdown
function populateCategories() {
    const select = document.getElementById('categoryFilter');
    select.innerHTML = '<option value="all">All Categories</option>';
    const categories = [...new Set(quotes.map(q => q.category))];
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category.toLowerCase();
        option.textContent = category;
        select.appendChild(option);
    });
}

// Function to display quotes based on the selected category
function filterQuotes() {
    const category = document.getElementById('categoryFilter').value;
    const quoteDisplay = document.getElementById('quoteDisplay');
    quoteDisplay.innerHTML = '';
    let filteredQuotes = [];
    if (category === 'all') {
        quotes.forEach(q => filteredQuotes.push(...q.quotes));
    } else {
        const categoryObj = quotes.find(q => q.category.toLowerCase() === category.toLowerCase());
        if (categoryObj) {
            filteredQuotes = categoryObj.quotes;
        }
    }
    filteredQuotes.forEach(quote => {
        const quoteElement = document.createElement('div');
        quoteElement.innerHTML = `
            <p>"${quote.text}"</p>
            <p>- ${quote.author}</p>
        `;
        quoteDisplay.appendChild(quoteElement);
    });
    // Save the selected filter to local storage
    localStorage.setItem('selectedCategory', category);
}

// Function to display a random quote from the selected category
function showRandomQuote() {
    const category = document.getElementById('quoteCat').value;
    const categoryObj = quotes.find(q => q.category.toLowerCase() === category.toLowerCase());
    if (categoryObj) {
        const categoryQuotes = categoryObj.quotes;
        const randomQuote = categoryQuotes[Math.floor(Math.random() * categoryQuotes.length)];
        const quoteDisplay = document.getElementById('quoteDisplay');
        quoteDisplay.innerHTML = `
            <p>"${randomQuote.text}"</p>
            <p>- ${randomQuote.author}</p>
        `;
    } else {
        alert('No quotes found for the selected category.');
    }
}

// Function to add a new quote
function createAddQuoteForm() {
    const text = document.getElementById('newQuoteText').value;
    const author = document.getElementById('newQuoteAuthor').value;
    const category = document.getElementById('newQuoteCategory').value;
    if (text && author && category) {
        const categoryObj = quotes.find(q => q.category.toLowerCase() === category.toLowerCase());
        if (categoryObj) {
            categoryObj.quotes.push({ text, author });
        } else {
            quotes.push({
                category,
                quotes: [{ text, author }]
            });
            addCategoryToSelect(category);
        }

        // Save quotes to local storage
        saveQuotes();

        // Clear input fields
        document.getElementById('newQuoteText').value = '';
        document.getElementById('newQuoteAuthor').value = '';
        document.getElementById('newQuoteCategory').value = '';
        alert('Quote added successfully!');
    } else {
        alert('Please fill in all the fields.');
    }
}

// Function to add a new category to the select element
function addCategoryToSelect(category) {
    const select = document.getElementById('quoteCat');
    const option = document.createElement('option');
    option.value = category.toLowerCase();
    option.textContent = category;
    select.appendChild(option);
}

// Function to export quotes to a JSON file
function exportToJsonFile() {
    const dataStr = JSON.stringify(quotes, null, 2);
    const dataBlob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(dataBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = "quotes.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// Function to import quotes from a JSON file
function importFromJsonFile(event) {
    const fileReader = new FileReader();
    fileReader.onload = function(event) {
        const importedQuotes = JSON.parse(event.target.result);
        quotes.push(...importedQuotes);
        saveQuotes();
        alert('Quotes imported successfully!');
    };
    fileReader.readAsText(event.target.files[0]);
}

// Function to fetch quotes from the server
async function fetchQuotesFromServer() {
    try {
        const response = await fetch(serverUrl);
        const serverQuotes = await response.json();
        return serverQuotes;
    } catch (error) {
        console.error('Error fetching quotes from server:', error);
        return [];
    }
}

// Function to post a new quote to the server
async function postQuoteToServer(quote) {
    try {
        const response = await fetch(serverUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(quote)
        });
        const newQuote = await response.json();
        return newQuote;
    } catch (error) {
        console.error('Error posting quote to server:', error);
        return null;
    }
}

// Function to sync local data with the server
async function syncQuotes() {
    const localQuotes = JSON.parse(localStorage.getItem('quotes')) || [];
    const serverQuotes = await fetchQuotesFromServer();

    // Simple conflict resolution: server data takes precedence
    serverQuotes.forEach(serverQuote => {
        const categoryObj = localQuotes.find(q => q.category.toLowerCase() === serverQuote.category.toLowerCase());
        if (categoryObj) {
            const localQuote = categoryObj.quotes.find(q => q.text === serverQuote.text && q.author === serverQuote.author);
            if (localQuote) {
                // Conflict detected, resolve by taking server data
                localQuote.text = serverQuote.text;
                localQuote.author = serverQuote.author;
            } else {
                categoryObj.quotes.push({ text: serverQuote.text, author: serverQuote.author });
            }
        } else {
            localQuotes.push({
                category: serverQuote.category,
                quotes: [{ text: serverQuote.text, author: serverQuote.author }]
            });
        }
    });

    localStorage.setItem('quotes', JSON.stringify(localQuotes));
    notifyUser('Quotes synced with server!');
    populateCategories();
    filterQuotes();
}

// Periodic data fetching
setInterval(syncQuotes, 60000); // Sync every 60 seconds

// Function to notify user
function notifyUser(message) {
    const notificationDiv = document.getElementById('notification');
    notificationDiv.innerText = message;
}

// Function to manually resolve conflicts
async function resolveConflictsManually() {
    const localQuotes = JSON.parse(localStorage.getItem('quotes')) || [];
    const serverQuotes = await fetchQuotesFromServer();

    // Display conflicts and allow user to resolve them
    console.log('Local Quotes:', localQuotes);
    console.log('Server Quotes:', serverQuotes);
    notifyUser('Conflicts displayed in console for manual resolution.');
}

// Load quotes from local storage on initialization
loadQuotes();
populateCategories();

// Restore the last selected filter
const selectedCategory = localStorage.getItem('selectedCategory');
if (selectedCategory) {
    document.getElementById('categoryFilter').value = selectedCategory;
    filterQuotes();
} else {
    filterQuotes();
}

// Periodically fetch quotes from the server
setInterval(fetchQuotesFromServer, 60000); // Fetch every 60 seconds

// Event listeners
document.getElementById('newQuote').addEventListener('click', showRandomQuote);
document.getElementById('addQuoteBtn').addEventListener('click', createAddQuoteForm);
document.getElementById('exportBtn').addEventListener('click', exportToJsonFile);
document.getElementById('importFile').addEventListener('change', importFromJsonFile);

// Initialize with a random quote
showRandomQuote();