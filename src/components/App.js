import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import userEvent from "@testing-library/user-event";



function App() {
  return (
    <div className="App">
      <Header name="Overreacted"/>
      <About about />
      <ArticleList posts ={blogData.posts}/>
    </div>
  );
}

export default App;
