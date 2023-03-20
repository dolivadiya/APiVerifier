import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const ApiManual = () => {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const storedResponse = JSON.parse(
      sessionStorage.getItem("verifierResponse")
    );
    if (storedResponse) {
      setResponse(storedResponse);
    }
  }, []);

  const handleClear = () => {
    setResponse(null);
    sessionStorage.removeItem("verifierResponse");
  };

  const handleCLick = () => {
    if (!response) {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => {
          setResponse(data);
          sessionStorage.setItem("verifierResponse", JSON.stringify(data));
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">API Manual Verifier</h5>

            <button onClick={handleCLick}>View</button>
            <br />
            <br />
            <button onClick={handleClear}>Clear</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApiManual;
