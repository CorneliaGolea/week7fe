import React from "react";
import "./Card.css";

const Card = ({ book }) => {
  console.log(book);
  return <div className="card">{book.title}</div>;
};

export default Card;
