import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import ApiManual from "./ApiManual";
const App = () => {
  const [apistatus, setApiStatus] = useState("loading");

  useEffect(() => {
    console.log("useeffect");
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (res.ok) {
          setApiStatus("up");
        } else {
          setApiStatus("down");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div classNameName="container-fluid">
        <h1>Landing Page</h1>
      </div>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">API Auto Verifier</h5>

            {apistatus === "loading" && <Spinner animation="border" />}
            {apistatus === "up" && <p>API is up and running!</p>}
            {apistatus === " down" && <p>Api is down.</p>}
          </div>
        </div>
      </div>
      <ApiManual />
    </>
  );
};

export default App;
