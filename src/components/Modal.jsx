import React from "react";

function Modal({ show, books, onClose }) {
  if (!show) {
    return null;
  }
  let thumbnail =
    books.volumeInfo.imageLinks && books.volumeInfo.imageLinks.smallThumbnail;

  return (
    <>
      <div className="overlay">
        <div className="overlay-inner">
          <button className="close" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
          <div className="inner-box">
            <img src={thumbnail} alt="" />
            <div className="info">
              <h1>{books.volumeInfo.title}</h1>
              <h3>{books.volumeInfo.authors}</h3>
              <h4>
                {books.volumeInfo.publisher}
                <span>{books.volumeInfo.publishedDate}</span>
              </h4>
              <br />
              <a
                href={books.volumeInfo.previewLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>More</button>
              </a>
            </div>
          </div>
          <h4 className="description">{books.volumeInfo.description}</h4>
        </div>
      </div>
    </>
  );
}

export default Modal;
