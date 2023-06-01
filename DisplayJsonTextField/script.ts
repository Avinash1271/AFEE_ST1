interface Book {
    title: string;
    author: string;
  }

  const books: Book[] = [
    { "title": "My Talented book", "author": "ABC" },
    { "title": "My Third Book", "author": "XYZ" },
    { "title": "First Book", "author": "CDE" }
  ];

  const searchInput: HTMLInputElement = document.getElementById("searchInput") as HTMLInputElement;
  const resultsDiv: HTMLDivElement = document.getElementById("results") as HTMLDivElement;

  searchInput.addEventListener("input", handleSearch);

  function handleSearch(): void {
    const searchText: string = searchInput.value.trim().toLowerCase();
    const filteredBooks: Book[] = books.filter((book: Book) =>
      book.title.toLowerCase().includes(searchText)
    );

    displayResults(filteredBooks);
  }

  function displayResults(books: Book[]): void {
    resultsDiv.innerHTML = "";

    books.forEach((book: Book) => {
      const div: HTMLDivElement = document.createElement("div");
      div.textContent = `${book.title} - ${book.author}`;
      resultsDiv.appendChild(div);
    });
  }