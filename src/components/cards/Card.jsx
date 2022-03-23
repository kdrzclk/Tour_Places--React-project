import React from "react";
import "./Card.css";
import { data } from "../../helper/data.js";

const Card = () => {
  return (
    <section>
      <div className="d-flex justify-content-center mx-4">
        <div className="row cols-xs-1 cols-sm-1 cols-md-2 cols-lg-3 justify-content-center">
          {data.map((item) => {
            const { id, title, desc, image } = item;
            return (
              <div className="col-lg-4 col-md-6 col-sm-8 col-xs-8" key={id}>
                <div className="card bg-dark text-light p-3">
                  <h2 className="card-title">{title}</h2>
                  <div className="card_hover">
                    <img className="card-image" src={image} alt={title} />
                  </div>

                  <div className="description">
                    <p className="card-description">{desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Card;
