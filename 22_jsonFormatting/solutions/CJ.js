const fs = require('fs');

fs.readFile('./../books.json', 'utf8', function (error, json) {
  const books = JSON.parse(json).data;

  const bookProperties = ['book_id', 'title', 'genre', 'description', 'cover'];
  const authorProperties = ['author_id', 'first_name', 'last_name', 'biography', 'portrait'];
  const cache = {};

  function setProperty(data){
    return function(object, property) {
      object[property] = data[property]
      return object;
    }
  }

  function getBook(row) {
    return cache[row.title] || bookProperties.reduce(setProperty(row), { authors: [] });
  }

  function getAuthor(row) {
    return cache[row.first_name + row.last_name] || (() => {
      const author = authorProperties.reduce(setProperty(row), {});
      cache[author.first_name + author.last_name] = author;
      return author;
    })();
  }

  const results = books.reduce(function(results, row){
    const book = getBook(row);

    if(!cache[row.title]) {
      cache[row.title] = book;
      results.push(book);
    }

    const author = getAuthor(row);

    book.authors.push(author);

    return results;
  }, []);

  fs.writeFile('books.json', JSON.stringify(results));
});
