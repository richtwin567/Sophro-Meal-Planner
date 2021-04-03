import React from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";

export default function SideBar(props) {
  const links = [
    { path: "overview", label: "Overview" },
    { path: "recipes", label: "Recipes" },
    { path: "my-plan", label: "My Meal Plan" },
    { path: "plan-generator", label: "Meal Plan Generator" },
    { path: "shopping-list", label: "Shopping List" },
    { path: "logout", label: "Logout" },
  ];

  const items = links.map((item, i) => (
    <Link
      to={`/app/${item.path}`}
      className={i === props.selected ? "selected" : undefined}
      onClick={() => props.setSelected(i)}
    >
      {item.label}
    </Link>
  ));

  return (
    <div id="side-bar">
      <div className="section">
        <h1>Hi, {props.user.first_name + " " + props.user.last_name}</h1>
        <Link
          className="btn"
          to="/app/new-recipe"
          onClick={() => props.setSelected(-1)}
        >
          New Recipe
        </Link>
      </div>
      <div className="separator">General</div>
      <div className="links">{items.slice(0, -1)}</div>
      <div className="separator">Controls</div>
      <div className="controls"> {items[items.length - 1]}</div>
    </div>
  );
}
