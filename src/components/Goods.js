import React from "react";
import { useFetchHook } from "../hooks/useFetchHook";

import { URL } from "../url";
import { Card } from "./Card";

export const Goods = () => {
  const { state } = useFetchHook(URL.DATA);

  return (
    <ul>
      {state.map(item => (
        <li key={item.id} className="card">
          <Card {...{ item }} />
        </li>
      ))}
    </ul>
  );
};
