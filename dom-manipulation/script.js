let quotes = JSON.parse(localStorage.getItem('quotes')) || [{
  text: "This is a sample quote.",
  category: "General"
}];

let categories = Array.from(new Set(quotes.map(quote => quote.category)));
const SERVER_URL = "https://jsonplaceholder.typicode.com/posts"; // Example server URL for simulation

function saveQuotes() {
  localStorage.setItem('quotes', JSON.stringify(quotes));
  localStorage.setItem('categories', JSON.stringify(categories));
}

function loadQuotes() {
  const storedQuotes = JSON.parse(localStorage.getItem('quotes'));
  const storedCategories = JSON.parse(localStorage.getItem('categories'));
  if (storedQuotes) {
      quotes = storedQuotes;
  }
  if (storedCategories) {
      categories = storedCategories;
  }
  populateCategories();
}

function displayQuote(quote) {
  saveLastViewedQuote(quote.text);
  document.getElementById('quoteDisplay').innerText = quote.text;
}

function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  displayQuote(quote);
}

function saveLastViewedQuote(quote) {
  sessionStorage.setItem('lastViewedQuote', quote);
}

function getLastViewedQuote() {
  return sessionStorage.getItem('lastViewedQuote');
}

function exportToJsonFile() {
  const dataStr = JSON.stringify(quotes);
  const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);

  const exportFileDefaultName = 'quotes.json';

  let linkElement = document.createElement('a');
  linkElement.setAttribute('href', dataUri);
  linkElement.setAttribute('download', exportFileDefaultName);
  linkElement.click();
}

function importFromJsonFile(event) {
  const fileReader = new FileReader();
  fileReader.onload = function(event) {
      const importedQuotes = JSON.parse(event.target.result);
      quotes.push(...importedQuotes);
      categories = Array.from(new Set(quotes.map(quote => quote.category)));
      saveQuotes();
      populateCategories();
      alert('Quotes imported successfully!');
  };
  fileReader.readAsText(event.target.files[0]);
}

function addQuote(text, category) {
  quotes.push({ text, category });
  if (!categories.includes(category)) {
      categories.push(category);
      populateCategories();
  }
  saveQuotes();
}

function filterQuotes() {
  const selectedCategory = document.getElementById('categoryFilter').value;
  let filteredQuotes = quotes;
  if (selectedCategory !== 'all') {
      filteredQuotes = quotes.filter(quote => quote.category === selectedCategory);
  }
  displayFilteredQuotes(filteredQuotes);
}

function displayFilteredQuotes(filteredQuotes) {
  const quoteDisplay = document.getElementById('quoteDisplay');
  quoteDisplay.innerHTML = '';
  filteredQuotes.forEach(quote => {
      const quoteElement = document.createElement('p');
      quoteElement.textContent = quote.text;
      quoteDisplay.appendChild(quoteElement);
  });
}

function populateCategories() {
  const categoryFilter = document.getElementById('categoryFilter');
  categoryFilter.innerHTML = '<option value="all">All Categories</option>';
  categories.forEach(category => {
      const option = document.createElement('option');
      option.value = category;
      option.textContent = category;
      categoryFilter.appendChild(option);
  });
}

function saveLastSelectedCategory(category) {
  localStorage.setItem('lastSelectedCategory', category);
}

function getLastSelectedCategory() {
  return localStorage.getItem('lastSelectedCategory') || 'all';
}

document.getElementById('exportQuotesButton').addEventListener('click', exportToJsonFile);
document.getElementById('importFile').addEventListener('change', importFromJsonFile);
document.getElementById('newQuoteButton').addEventListener('click', displayRandomQuote);
document.getElementById('addQuoteButton').addEventListener('click', () => {
  const quoteText = prompt('Enter the quote:');
  const quoteCategory = prompt('Enter the category:');
  addQuote(quoteText, quoteCategory);
});

document.getElementById('categoryFilter').addEventListener('change', function() {
  const selectedCategory = this.value;
  saveLastSelectedCategory(selectedCategory);
  filterQuotes();
});

document.addEventListener('DOMContentLoaded', () => {
  loadQuotes();
  const lastViewedQuote = getLastViewedQuote();
  if (lastViewedQuote) {
      displayQuote({ text: lastViewedQuote, category: '' });
  }
  const lastSelectedCategory = getLastSelectedCategory();
  document.getElementById('categoryFilter').value = lastSelectedCategory;
  filterQuotes();
  syncQuotes();
  setInterval(syncQuotes, 60000); // Sync with the server every minute
});

async function fetchQuotesFromServer() {
  const response = await fetch(SERVER_URL);
  const serverQuotes = await response.json();
  return serverQuotes.map(item => ({ text: item.title, category: "Server" }));
}

async function postQuotesToServer(quote) {
  await fetch(SERVER_URL, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(quote),
  });
}

async function syncQuotes() {
  const serverQuotes = await fetchQuotesFromServer();
  const serverQuoteTexts = serverQuotes.map(quote => quote.text);
  const localQuoteTexts = quotes.map(quote => quote.text);

  // Find new quotes from the server and add them to local quotes
  const newQuotes = serverQuotes.filter(quote => !localQuoteTexts.includes(quote.text));
  if (newQuotes.length > 0) {
      quotes.push(...newQuotes);
      saveQuotes();
      populateCategories();
      alert("New quotes have been added from the server!");
  }

  // Find new local quotes and post them to the server
  const newLocalQuotes = quotes.filter(quote => !serverQuoteTexts.includes(quote.text));
  for (const quote of newLocalQuotes) {
      await postQuotesToServer(quote);
  }

  // Optionally, we could implement further conflict resolution here
}
