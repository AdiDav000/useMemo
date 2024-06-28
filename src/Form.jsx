import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";

const Form = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const filteredData = useMemo(() => {
    console.log("run");
    return data.filter((item) => {
      return item.price > 100
    });
  }, [data]);

  return (
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>{item.title} <br></br>Price : {item.price}<hr></hr></li>
        ))}
      </ul>
  );
};

export default Form;
