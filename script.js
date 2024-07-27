document.addEventListener('DOMContentLoaded', () => {
    const quotes = [
      { text: "The only limit to our realization of tomorrow is our doubts of today.", category: "Motivation" },
      { text: "Life is what happens when you're busy making other plans.", category: "Life" },
      { text: "Get busy living or get busy dying.", category: "Motivation" }
    ];
  
    function showRandomQuote() {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const quote = quotes[randomIndex];
      const quoteDisplay = document.getElementById('quoteDisplay');
      quoteDisplay.textContent = `${quote.text} - ${quote.category}`;
    }
  
    function addQuote() {
      const newQuoteText = document.getElementById('newQuoteText').value;
      const newQuoteCategory = document.getElementById('newQuoteCategory').value;
      if (newQuoteText && newQuoteCategory) {
        quotes.push({ text: newQuoteText, category: newQuoteCategory });
        document.getElementById('newQuoteText').value = '';
        document.getElementById('newQuoteCategory').value = '';
        alert('New quote added successfully!');
      } else {
        alert('Please fill in both fields.');
      }
    }
  
    document.getElementById('newQuote').addEventListener('click', showRandomQuote);
    document.getElementById('addQuoteButton').addEventListener('click', addQuote);
  });
  