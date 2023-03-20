import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

const ApiVideos = () => {
  const [videos, setvideos] = useState([]);
  const [modelISOpen, setModalIsOpen] = useState(false);
  const [CurrentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("http://97.74.94.225:8282/besstMainApi/df/videoSection")
      .then((res) => res.json())
      .then((data) => setvideos(data))
      .catch((err) => console.log(err));
  }, []);

  const videoClick = (i) => {
    setCurrentIndex(i);
    setModalIsOpen(true);
  };

  const videoClose = () => {
    setModalIsOpen(false);
    setCurrentIndex(0);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Videos</h5>
          {videos.map((video, index) => (
            <div key={index}>
              <img
                src={video.url}
                alt={video.title}
                onClick={() => videoClick(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApiVideos;
