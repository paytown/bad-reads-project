import React from 'react';
import Books from './books/Books';

export default function App() {
  const books = [{
    title: 'sean',
    author: 'seanjean',
    imageUrl: 'https://images.gr-assets.com/books/1529026760l/39832183.jpg'
  }];
  return (
    <Books books={books}/>
  );
}
