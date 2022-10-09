

import { Link } from "react-router-dom";

export default function MedTech() {
  return (
    <ul className="products">
      <li>
        <Link to="medtech-1">medtech 1</Link>
      </li>
      <li>
        <Link to="medtech-3?color=green">medtech 3</Link>
      </li>
    </ul>
  );
}