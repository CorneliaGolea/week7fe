import "./App.css";
import CardContainer from "./components/cardContainer/CardContainer";
import PostContainer from "./components/postContainer/PostContainer";
import { useEffect, useState } from "react";

function App() {
  const [reset, setReset] = useState();

  // useEffect(() => {
  //   async function onRenderGetBooks() {
  //     const books = await getAllBooks();
  //     await setBooks(books);
  //   }
  //   onRenderGetBooks();
  // }, [reset]);

  return (
    <div className="App">
      <h1>Hello world</h1>

      <CardContainer />
      <PostContainer />
    </div>
  );
}

export default App;
