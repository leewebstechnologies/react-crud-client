import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./books.css";

const Books = () => {
  // eslint-disable-next-line
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      //It will be async() because we are making an API request
      try {
        const res = await axios.get("http://localhost:8800/books");
        setBooks(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8800/books/" + id);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Leewebs Bookshop</h1>
      <div className="books">
        {books.map((book) => (
          <div className="book" key={book.id}>
            {book.cover && <img src={book.cover} alt="" />}
            <h2>{book.title}</h2>
            <p>{book.description}</p>
            <span>{book.price}</span>
            <button className="delete" onClick={() => handleDelete(book.id)}>
              Delete
            </button>
            <button className="update">
              <Link
                style={{ textDecoration: "none" }}
                to={`/update/${book.id}`}
              >
                Update
              </Link>
            </button>
          </div>
        ))}
      </div>
      <button className="add">
        <Link style={{ textDecoration: "none" }} to="/add">
          Add New Book
        </Link>
      </button>
    </div>
  );
};
export default Books;
