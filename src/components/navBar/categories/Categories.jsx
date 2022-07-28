import React from "react";
import { Link } from "react-router-dom";

const Categories = (props) => {
  return (
    <li>
      <Link
        to={`/categoria/${props.category}`}
        className="navBar__list--category"
      >
        {props.category}
      </Link>
    </li>
  );
};

export default Categories;
