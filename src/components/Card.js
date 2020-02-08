import React, { Fragment } from "react";

export const Card = ({ item }) => {
  return (
    <Fragment>
      <div className={"card__img" + Math.ceil(item.city / 2)}>
        <span>{item.name}</span>
      </div>
      <h3>Affiliate Marketing - A Beginner's Guide to Earning Online</h3>
      <div className="book-info">
        <span className="category">{item.category}</span>
        <h4 className="price">{`\u0024${item.price}`}</h4>
        {/* // <input type="text" value={`\u0024${item.price}`} readOnly></input> */}
      </div>
    </Fragment>
  );
};
