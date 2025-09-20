// LiveCameras.jsx
import React from "react";

export default function LiveCameras() {
  const streams = [
    {
      title: "Times Square 4K Live",
      url: "https://www.youtube.com/embed/rnXIjl_Rzy4",
    },
    {
      title: "World Live Webcams",
      url: "https://www.youtube.com/embed/ewsHnhloFC0",
    },
    {
      title: "Times Square 24/7 Live Cam",
      url: "https://www.youtube.com/embed/rnXIjl_Rzy4",
    },
    {
      title: "Times Square 24/7 Live Cam",
      url: "https://www.youtube.com/embed/rnXIjl_Rzy4",
    },
    {
      title: "World Live Webcams",
      url: "https://www.youtube.com/embed/ewsHnhloFC0",
    },
    {
      title: "Times Square 24/7 Live Cam",
      url: "https://www.youtube.com/embed/rnXIjl_Rzy4",
    },
    {
      title: "World Live Webcams",
      url: "https://www.youtube.com/embed/ewsHnhloFC0",
    },
  ];

  return (
    <section className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Live Cameras</h1>
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        {streams.map((stream, index) => (
          <div key={index} className="w-full">
            <iframe
              className="w-full h-64 md:h-80 lg:h-96 rounded-lg shadow-lg"
              src={stream.url}
              title={stream.title}
              allowFullScreen
            ></iframe>
            <h2 className="text-center mt-2 font-medium">{stream.title}</h2>
          </div>
        ))}
      </div>
    </section>
  );
}
