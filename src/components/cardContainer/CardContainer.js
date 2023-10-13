import "./CardContainer.css";
// import { getAllBooks } from "../../utils";
import { useState } from "react";
import Card from "../card/Card";

const getAllBooks = async () => {
  console.log("!!!!!!!!!!");
  try {
    const response = await fetch("http://localhost:5001/books");
    console.log(response);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const CardContainer = () => {
  const [books, setBooks] = useState([]);

  const clickHandler = async (e) => {
    e.preventDefault();
    const books = await getAllBooks();
    // console.log(books);
    // console.log("Hello world");
    setBooks(books.books);
  };

  return (
    <div className="card-container">
      <div>
        <button onClick={clickHandler}>GetAllBooks</button>
        <div>
          {books.length >= 1
            ? books.map((book, key) => <Card book={book} />)
            : null}
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
