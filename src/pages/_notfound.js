import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  document.title = "Weather Currently: 404 Error not found";
  return (
    <div>
      <h1>Your endpoint is undefined</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
}
