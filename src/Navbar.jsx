import React from "react";
import SearchIcon from "@material-ui/icons/Search";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <div className="nav-title">
            <img className="icon" src="logo.jpg" alt="Netflix" />
          </div>{" "}
        </div>{" "}
        <div className="nav-btn">
          <label for="nav-check">
            <span> </span> <span> </span> <span> </span>{" "}
          </label>{" "}
        </div>
        <div className="nav-links">
          <a href="" target="_blank">
            {" "}
            Tv Shows{" "}
          </a>{" "}
          <a href="" target="_blank">
            {" "}
            Movies{" "}
          </a>{" "}
          <a href="" target="_blank">
            {" "}
            Recently Added{" "}
          </a>{" "}
          <a href="" target="_blank">
            {" "}
            My List{" "}
          </a>{" "}
          <a id="search" href="" target="_blank">
            {" "}
            <SearchIcon />{" "}
          </a>{" "}
        </div>{" "}
      </div>
    </>
  );
};

export default Navbar;
