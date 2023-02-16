import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Home = () => {
    const [selectedFile, setSelectedFile] = useState();
    const {register,handleSubmit}=useForm();
    const formData=new FormData();
    const imageHostKey=process.env.REACT_APP_imgbb_key;
    console.log(imageHostKey);
    const handleSubmitform = (data) => {
      console.log(data.description,data.image[0])
      const image=data.image[0];
      formData.append('image',image);
      const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
      fetch(url,{
        method:'POST',
        body:formData
      }).then(res=>res.json())
        .then(imgData=>{
            console.log(imgData);
            
            if(imgData.success){
                const imageData={
                    description:data.description,
                    imageUrl:imgData.data.url,
                    likeCount:0,
                    commentArray:[]
                }
                fetch('http://localhost:2000/imageupload', {
                    method: "POST",
                    headers: {
                      "content-type": "application/json",
                    },
                    body: JSON.stringify(imageData),
                  })
                    .then((res) => res.json)
                    .then((data) => {
                      console.log(data);
                    });
            }
        })
    }
  return (
    <div class="flex justify-center">
      <div>
        <form onSubmit={handleSubmit(handleSubmitform)} className="grid gap-3 grid-cols-1 mt-4">
          <textarea  className="textarea" placeholder="Description" {...register("description",{required:"des required"})}></textarea>
          <input  type="file" className="file-input w-full max-w-xs"  {...register("image",{required:'image required'})} />
          <input
            type="submit"
            className="w-full btn btn-accent"
            value="Submit"
          ></input>
        </form>
        <div>02</div>
      </div>
    </div>
  );
};

export default Home;
