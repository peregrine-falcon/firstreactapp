import React from "react";


const Slidertwo = () => {
    return (
        <>


            <div className="container text-center my-3" className="Slider">
                <div id="recipeCarousel" className="carousel slide w-100" data-ride="carousel">
                    <div className="carousel-inner w-100" role="listbox">
                        <div className="carousel-item row no-gutters active">
                            <div className="col-3 float-left"><img className="img-fluid" className="tiger" src="/suits.jpeg" /></div>
                            <div className="col-3 float-left"><img className="img-fluid" className="tiger" src="/social.jpg" /></div>
                            <div className="col-3 float-left"><img className="img-fluid" className="tiger" src="/saul.jpg" /></div>
                            <div className="col-3 float-left"><img className="img-fluid" className="tiger" src="/originals.jpg" /></div>
                        </div>
                        <div className="carousel-item row no-gutters">
                            <div className="col-3 float-left"><img className="img-fluid" className="tiger" src="/elite.jpg" /></div>
                            <div className="col-3 float-left"><img className="img-fluid" className="tiger" src="/dark.png" /></div>
                            <div className="col-3 float-left"><img className="img-fluid" className="tiger" src="/black.jpeg" /></div>
                            <div className="col-3 float-left"><img className="img-fluid" className="tiger" src="/thenun.jpg" /></div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#recipeCarousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#recipeCarousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>


            </div>

        </>
    );
}

export default Slidertwo;

