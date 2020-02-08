import React from "react";
import { useFetchHook } from "../hooks/useFetchHook";

import { URL } from "../url";

export const Dropdown = () => {
  const { state } = useFetchHook(URL.CITIES);
  return (
    <select>
      {state.map(item => (
        <option key={item.id}>{item.name}</option>
      ))}
    </select>
  );
};
