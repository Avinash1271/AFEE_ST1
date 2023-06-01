var books = [
    { "title": "My Talented book", "author": "ABC" },
    { "title": "My Third Book", "author": "XYZ" },
    { "title": "First Book", "author": "CDE" }
];
var searchInput = document.getElementById("searchInput");
var resultsDiv = document.getElementById("results");
searchInput.addEventListener("input", handleSearch);
function handleSearch() {
    var searchText = searchInput.value.trim().toLowerCase();
    var filteredBooks = books.filter(function (book) {
        return book.title.toLowerCase().includes(searchText);
    });
    displayResults(filteredBooks);
}
function displayResults(books) {
    resultsDiv.innerHTML = "";
    books.forEach(function (book) {
        var div = document.createElement("div");
        div.textContent = "".concat(book.title, " - ").concat(book.author);
        resultsDiv.appendChild(div);
    });
}
