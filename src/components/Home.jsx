import React, { useState } from "react";
import Book from "../assets/background.png";
import Card from "./Card";
import axios from "axios";

function Home() {
  const [search, setSearch] = useState("");
  const [bookData, setBookData] = useState([]);
  const searchBook = (event) => {
    if (event.key === "Enter") {
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyDEJFKEIwzLWpnpQGjZiobz182huDUGync&maxResults=40`
        )
        .then((res) => setBookData(res.data.items))
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>
            a room without books is like
            <br /> a body without a soul
          </h1>
        </div>
        <div className="row2">
          <h2>Find your book</h2>
          <div className="search">
            <input
              type="text"
              placeholder="Enter Book Name or Title"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={searchBook}
            />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </div>
          <img src={Book} alt="book" />
        </div>
      </div>
      <div className="container"> {<Card book={bookData} />} </div>
    </>
  );
}

export default Home;
