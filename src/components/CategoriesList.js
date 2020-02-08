import React from "react";
import { useFetchHook } from "../hooks/useFetchHook";

import { URL } from "../url";

export const CategoriesList = () => {
  const { state } = useFetchHook(URL.CATEGORY);
  return (
    <ul className="categories">
      {state.map(item => (
        <li key={item.id}>
          <input type="checkbox"></input>
          <span>{item.name}</span>
        </li>
      ))}
    </ul>
  );
};
