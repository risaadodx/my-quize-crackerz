import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div>
        <h2>Web Dev Learn</h2>
      </div>
      <div>
        <Link to="/topics">Topics</Link>
        <Link to="/statistics">Statistics</Link>
        <Link to="/blog">Blog</Link>
      </div>
    </div>
  );
};

export default Header;
