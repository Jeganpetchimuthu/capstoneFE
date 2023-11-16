import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";

function Home(item) {
  const [data, setData] = useState([{ image: "" }]);

  useEffect(() => {
    axios
      .get("https://capstonebe-sfwx.onrender.com/api/img")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err, "it has on error"));
  });
  return (
    <div className="Home-components">
      <h3 className="img-head">Watch</h3>
      {data.map((singleData) => {
        if (singleData.image) {
          const base64String = btoa(
            String.fromCharCode(...new Uint32Array(singleData.image.data.data))
          );
          return (
            <div key={item._id} className="img-flex">
              <img src={`data:image/png;base64,${base64String}`} alt="img" />
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default Home;
