
import joker from '../img/Tvseries.png'
import React from "react";
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Uplans() {
  return (
    <>
      <div style={{ height: "650px" }} className="bg-black text-center">
        <div style={{ paddingTop: "80px" }}>
          <div className="d-flex justify-content-evenly align-items-center">
            <div class="card border-0" style={{ width: "25rem"}}>
              <div className="bg-dark rounded" style={{height:"200px"}}>
              <ReactPlayer className="card-img-top rounded" url={'https://www.youtube.com/watch?v=zAGVQLHvwOY'} width={400} height={200} />
              </div>
              <div class="card-body">
                <h5 class="card-title fw-bold">Premium</h5>
                <p class="card-text text-start fw-bold">-$29.00/Month</p>
                <p class="card-text text-start">-Get 1 Merchandise</p>
                <p class="card-text text-start">-Free Popcorn LMFAO</p>
                <a href="#" class="btn  btn-danger fw-bold">
                  Subscribe
                </a>
              </div>
            </div>

            <div class="card border-0 bg-dark text-light" style={{ width: "25rem" }}>
              <div className="bg-dark rounded" style={{height:"200px"}}>
              <ReactPlayer className="card-img-top rounded" url={'https://www.youtube.com/watch?v=L9giOct92Js'} width={400} height={200} />
              </div>
              <div class="card-body">
                <h5 class="card-title fw-bold">Economy</h5>
                <p class="card-text text-start fw-bold">-$30.00/Month</p>
                <p class="card-text text-start">-Get 4 Merchandise</p>
                <p class="card-text text-start">-Free Popcorn LMFAO</p>
                <a href="#" class="btn  btn-danger fw-bold">
                  Subscribe
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
