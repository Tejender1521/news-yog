import React from "react";
import './Loader.scss';
import loadgif from './loader.gif';
const Loader = () => {
  return <img className="main-loader" src={loadgif} alt="loader" />
  // return (
  //   <div id="loader-main">
  //     <h2>Loading Animation</h2>
  //     <div class="mosaic-loader">
  //       <div class="cell d-0"></div>
  //       <div class="cell d-1"></div>
  //       <div class="cell d-2"></div>
  //       <div class="cell d-3"></div>
  //       <div class="cell d-1"></div>
  //       <div class="cell d-2"></div>
  //       <div class="cell d-3"></div>
  //       <div class="cell d-4"></div>
  //       <div class="cell d-2"></div>
  //       <div class="cell d-3"></div>
  //       <div class="cell d-4"></div>
  //       <div class="cell d-5"></div>
  //       <div class="cell d-3"></div>
  //       <div class="cell d-4"></div>
  //       <div class="cell d-5"></div>
  //       <div class="cell d-6"></div>
  //     </div>
  //   </div>
  // );
};

export default Loader;
