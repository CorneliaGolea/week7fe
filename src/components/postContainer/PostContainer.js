import React from "react";
import "./PostContainer.css";
import { useState } from "react";
// import Post from "../post/Post";

const addBook = async (title, author, genre) => {
  console.log("!!!!!!!!!!");
  try {
    const response = await fetch("http://localhost:5001/books", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, author, genre }),
    });
    console.log(response);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const PostContainer = () => {
  const [createBook, setCreateBook] = useState({
    title: "",
    author: "",
    genre: "",
  });

  function handleChange(e) {
    e.preventDefault();
    setCreateBook({ ...createBook, [e.target.name]: e.target.value });
    console.log(createBook);
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    await addBook(createBook.title, createBook.author, createBook.genre);
  };
  console.log(createBook);
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>
          Title
          <input type="text" name="title" onChange={handleChange} />
        </label>
        <label>
          Author
          <input type="text" name="author" onChange={handleChange} />
        </label>
        <label>
          Genre
          <input type="text" name="genre" onChange={handleChange} />
        </label>
        <button type="submit">CREATE</button>
      </form>
    </div>
  );
};

export default PostContainer;
