import React, { useState } from "react";
import Modal from "./Modal";

function Card({ book }) {
  const [show, setShow] = useState(false);
  const [bookItem, setBookItem] = useState();
  console.log(book);
  return (
    <div>
      {book.map((books) => {
        let thumbnail =
          books.volumeInfo.imageLinks &&
          books.volumeInfo.imageLinks.smallThumbnail;
        if (thumbnail != undefined) {
          return (
            <>
              <div
                key={books.id}
                className="card"
                onClick={() => {
                  setShow(true);
                  setBookItem(books);
                }}
              >
                <img src={thumbnail} alt="book" />
                <div className="bottom">
                  <h3 className="title">{books.volumeInfo.title}</h3>
                </div>
              </div>
              <Modal
                show={show}
                books={bookItem}
                onClose={() => setShow(false)}
              />
            </>
          );
        } else {
          return <div className="error">Results not found!</div>;
        }
      })}
    </div>
  );
}

export default Card;
