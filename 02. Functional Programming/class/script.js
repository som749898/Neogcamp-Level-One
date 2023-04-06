const books = [
  { title: 'The Alchemist', author: 'Paulo Coelho', pages: 197 },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', pages: 281 },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', pages: 180 },
]

const getTotalPages = books => books.reduce(((acc,{pages}) => acc + pages),0);

console.log(getTotalPages(books)) // Output: 658