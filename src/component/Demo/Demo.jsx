import React from "react";
import Jsonprettier from "../Jsonprettier/Jsonprettier";
import "./Demo.css";
import Loader from "../Loader/Loader";
import { motion } from "framer-motion";

import Mapbox from "../Map/Map";



const Demo = () => {
  const [search, setSearch] = React.useState("");
  const [data, setData] = React.useState(null);
  const [manipulatedSearch, setManipulatedSearch] = React.useState(null);
  const [status, setStatus] = React.useState("search");
  const [searchData, setSearchData] = React.useState(null);
  const [loader, setLoader] = React.useState(false);
  const [isclose, setIsclose] = React.useState(false);

  const fetchData = (e) => {
    setLoader(true);
    if (search.length <= 0) return;
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      key: search,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:5000/mordecai", requestOptions)
      .then((response) => response.json())
      .then((result) => manipulateData(result))
      .catch((error) => console.log("error", error));
  };

  const manipulateData = (data) => {
    const tempObj = {};
    const tempData = JSON.parse(data.replaceAll("'", '"'));
    setSearchData(tempData);
    tempData.map((item, index) => {
      tempObj[item.word] = true;
    });
    setData(tempObj);
    const tempManipulatedSearch = search.replaceAll(".", " ").split(" ");
    setTimeout(() => {
      setManipulatedSearch(tempManipulatedSearch);
      setStatus("result");
      setLoader(false);
    }, 2000);
  };

  const render = () => {
    
    switch (status) {
      case "search":
        return (
          <div className="text-area-container">
            <textarea
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="demo-textarea"
              placeholder="Enter text to search"
            />
          </div>
        );
      case "result":
        return (
          <div className="result-container">
            {manipulatedSearch?.map((item, index) => {
              console.log(item);
              return (
                <>
                  <span
                    key={index}
                    style={{
                      background: data[item] ? "pink" : "transparent",
                      padding: data[item] ? "0 .2rem 0 .2rem" : "",
                    }}
                  >
                    {item}
                  </span>
                  {index !== manipulatedSearch.length - 1 && <span> </span>}
                </>
              );
            })}
          </div>
        );
      case "jsonData":
        return (
          <div className="result-container">
            <Jsonprettier data={searchData} />
          </div>
        );
      default:
        break;
    }
  };

  return (
    <div className="demo-main-container">
      <Mapbox />
      <div className="demo-search">
        <motion.i
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          class="fa-regular fa-circle-xmark close-button"
          onClick={() => setStatus("search")}
        ></motion.i>
        <div className="demo-search-subcontainer">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="demo-search-subcontainer-item"
            onClick={() => {
              setStatus(manipulatedSearch ? "result" : "search");
            }}
          >
            <i className="fa fa-search icon-item" aria-hidden="true"></i>
            <p className="icon-item-text">Search</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="demo-search-subcontainer-item"
            onClick={() => {
              manipulatedSearch && setStatus("jsonData");
            }}
          >
            <i className="fa fa-eye icon-item" aria-hidden="true"></i>
            <p className="icon-item-text">Result</p>
          </motion.div>
        </div>
        {!loader ? render() : <Loader />}
        {/* {render()} */}
        <div className="demo-footer">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              if (!manipulatedSearch) fetchData();
              else {
                setStatus("search");
                setManipulatedSearch(null);
              }
            }}
          >
            {!manipulatedSearch ? "Submit" : "Back"}
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Demo;
