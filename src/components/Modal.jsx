import React from "react";
import Book from "../assets/book.jpg";

function Modal() {
  return (
    <>
      <div className="overlay">
        <div className="overlay-inner">
          <button className="close">
            <i className="fas fa-times"></i>
          </button>
          <div className="inner-box">
            <img src={Book} alt="" />
            <div className="info">
              <h1>ReactJS by Example- building modern app with react</h1>
              <h3>Lorem ipsum</h3>
              <br />
              <h4>
                Lorem ipsum dolor <span>2016-04-21</span>
              </h4>
              <br />
              <a href="#">
                <button>More</button>
              </a>
            </div>
          </div>
          <h4 className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            tempore ullam suscipit.
          </h4>
        </div>
      </div>
    </>
  );
}

export default Modal;
