import React from "react";
import { Dropdown } from "./components/Dropdown";
import { CategoriesList } from "./components/CategoriesList";
import { Goods } from "./components/Goods";

export default function App() {
  return (
    <div className="container">
      <aside className="container__filters">
        <Dropdown />
        <CategoriesList />
      </aside>
      <article className="container__goods">
        <Goods />
      </article>
    </div>
  );
}
