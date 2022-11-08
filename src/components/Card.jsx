import React from "react";
import Modal from "./Modal";

function Card({ book }) {
  console.log(book);
  return (
    <div>
      {book.map((books) => {
        let thumbnail =
          books.volumeInfo.imageLinks &&
          books.volumeInfo.imageLinks.smallThumbnail;
        let amount = books.saleInfo.saleability && books.saleInfo.saleability;
        if (thumbnail != undefined || amount != undefined) {
          return (
            <>
              <div key={books.id} className="card">
                <img src={thumbnail} alt="book" />
                <div className="bottom">
                  <h3 className="title">{books.volumeInfo.title}</h3>
                  <p className="amount">{amount}</p>
                </div>
              </div>
              <Modal />
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
