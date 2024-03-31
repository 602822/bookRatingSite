const fetchBooksFromDb = () => {
  return new Promise((resolve, reject) => {
    const books = [];
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM books;",
        [],
        (tx, results) => {
          for (let i = 0; i < results.rows.length; i++) {
            const bookData = JSON.parse(results.rows.item(i).book_data);
            books.push(bookData);
            console.log("Book:", bookData);
          }
          // Resolve the promise with the fetched books
          resolve(books);
        },
        (error) => {
          console.log("Error retrieving books:", error);
          reject(error); // Reject the promise if there's an error
        }
      );
    });
  });
};

export { fetchBooksFromDb };
