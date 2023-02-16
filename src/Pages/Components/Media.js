import axios from "axios";
import React, { useEffect, useState } from "react";

const Media = () => {
  const [images, setImages] = useState([]);
  const [imageId, setImageId] = useState();
  const [agreement, setAgreement] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:2000/allimages", {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(),
      })
      .then((res) => {
        console.log(res.data);
        setImages(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("form submit", imageId, event.target.description.value,agreement);
    const imgComment = {
      description: event.target.description.value,
      like: agreement,
    };
    fetch(`http://localhost:2000/comment/${imageId}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(imgComment),
    })
      .then((res) => res.json)
      .then((data) => {
        console.log(data);
      });

    event.target.description.value = "";
    setAgreement(false);
  };

  const handleID = (data) => {
    console.log("handle id", data);
    setImageId(data);
  };
  const handleChange = (event) => {
    setAgreement(event.target.checked);
  };

  return (
    <div className="grid gap-3 grid-cols-3 mt-6 mb-5">
      {images.map((img) => (
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={img.imageUrl} alt="Shoes" />
          </figure>
          <div className="card-body">
            <label
              htmlFor="my-modal"
              onClick={() => handleID(img._id)}
              className="btn btn-sm"
            >
              Details
            </label>
          </div>
        </div>
      ))}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <label
            htmlFor="my-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            X
          </label>
          <form onSubmit={handleSubmit} className="grid gap-3 grid-cols-1 mt-4">
            <textarea
              className="textarea"
              name="description"
              placeholder="Comment:"
            ></textarea>
            <input
              type="checkbox"
              name="checkbox"
              defaultChecked={false}
              onChange={handleChange}
              className="checkbox checkbox-accent"
            />

            <input
              type="submit"
              className="w-full btn btn-accent "
              value="Submit"
              id="my-modal"
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Media;
