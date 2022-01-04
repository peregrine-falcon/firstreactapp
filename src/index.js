import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import $ from "jquery";
// import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import Card from "./Cards";
import Navbar from "./Navbar";
import Slider from "./Slider";
import Slidertwo from "./Slidertwo";
import "./index.css";

ReactDOM.render(
  <>
    <div>
      {" "}
      <Navbar />{" "}
    </div>
    <h2> Popular on Netflix </h2>{" "}
    <div>
      {" "}
      <Slider />{" "}
    </div>{" "}
    <h2> Trending Now </h2>{" "}
    <div>
      {" "}
      <Slidertwo />{" "}
    </div>{" "}
    <h2> Watch It Again </h2>{" "}
  </>,
  document.getElementById("root")
);

{
  /* <Card imgsrc="/extraction.jpg" title="Extraction" />
        <Card imgsrc="/ozark.jpeg" title="Ozark" />
        <Card imgsrc="/witcher.png" title="Witcher" />
        <Card imgsrc="/underground.jpg" title="6 Underground" />
        <Card imgsrc="/stranger.jpg" title="Stranger" />
        <Card imgsrc="/elcamino.jpg" title="El Camino" />
        <Card imgsrc="/thecrown.jpg" title="The Crown" />
        <Card imgsrc="/peaky.jpg" title="Peaky Blinders" /> */
}
