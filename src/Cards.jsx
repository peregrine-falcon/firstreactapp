import React from "react";


function Card(props) {
  return (
    <>

      <div className="card" style={{ width: "18rem" }}>
        <img src={props.imgsrc} className="card-img-top" alt="mypic" />
        <div className="card-body">
          <h5 className="card-title">{props.title} </h5>
          <p className="card-text"> A Netflix Original </p>
        </div>
      </div>


    </>
  );
}

export default Card;