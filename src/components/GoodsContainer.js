import React from "react";

import { Goods } from "./Goods";

export const GoodsContainer = ({ filteredData, filterState }) => {
  return filterState.category.length > 0 ? (
    <article className="container__goods">
      <Goods {...{ filteredData }} />
    </article>
  ) : (
    <h1 className="plug">Need to choose category</h1>
  );
};
