let quotes = JSON.parse(localStorage.getItem('quotes')) || [{
  text: "This is a sample quote.",
  category: "General"
}];

let categories = Array.from(new Set(quotes.map(quote => quote.category)));

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
});
