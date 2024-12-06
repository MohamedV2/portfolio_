import React from "react";

function NavBar() {
  return (
    <nav className="flex justify-between items-center gap-4">
      <img src="public/vite.svg" alt="" />
      <ul className="flex gap-4 items-center">
        <a href="#">Home</a>
        <a href="#">About Me</a>
        <a href="#">Project</a>
      </ul>
      <a href="#">Contact</a>
    </nav>
  );
}

export default NavBar;
