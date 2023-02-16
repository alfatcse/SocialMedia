import axios from "axios";
import React, { useEffect, useState } from "react";

const About = () => {
  console.log(process.env.REACT_APP_AboutMe);
  const [data, setData] = useState();
  useEffect(()=>{
  async function dat(){await axios.get(`http://localhost:2000/about/${process.env.REACT_APP_AboutMe}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(),
  }).then((res)=>{
    console.log(res);
    setData(res.data);
  }).catch((e)=>console.log(e))}
    dat();}
  ,[])

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.name.value);
    console.log(event.target.email.value);
    console.log(event.target.university.value);
    console.log(event.target.address.value);
    const aboutme = {
      name: event.target.name.value,
      email: event.target.email.value,
      university: event.target.university.value,
      address: event.target.address.value,
    };
    setData(aboutme);
    fetch(`http://localhost:2000/about/${process.env.REACT_APP_AboutMe}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(aboutme),
    })
      .then((res) => res.json)
      .then((data) => {
        console.log(data);
      });
  };
  
  return (
    <div className="flex  justify-center">
      <div>
        <h1>Name:{data?.name}</h1>
        <h1>Email:{data?.email}</h1>
        <h1>University:{data?.university}</h1>
        <h1>Address:{data?.address}</h1>
        <label htmlFor="my-modal" className="btn btn-sm">
          Edit
        </label>
      </div>
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
            <input name="name" placeholder="Name:"></input>
            <input name="email" placeholder="Email:"></input>
            <input name="university" placeholder="University:"></input>
            <input name="address" placeholder="Address:"></input>
            <input
              type="submit"
              className="w-full btn btn-accent"
              value="Submit"
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
};

export default About;
