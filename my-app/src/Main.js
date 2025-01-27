import React, { Component } from 'react';

const initState = {
  books: [
    {
      id: 1,
      title: "مقدمة ابن خلدون",
      author: "ابن خلدون",
      isbn: "12894990830",
    },
    {
      id: 2,
      title: "الجواب الكافي لمن سأل عن الدواء الشافي",
      author: "ابن القيم",
      isbn: "893847239479",
    },
  ],
};

class Main extends Component {
  render() {
    return (
      <main>
        <h2>Available Books</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {initState.books.map((book) => (
            <div
              key={book.id}
              style={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '10px',
                width: '200px',
              }}
            >
              <h3>{book.title}</h3>
              <p><strong>Author:</strong> {book.author}</p>
              <p><strong>ISBN:</strong> {book.isbn}</p>
            </div>
          ))}
        </div>
      </main>
    );
  }
}

export default Main;