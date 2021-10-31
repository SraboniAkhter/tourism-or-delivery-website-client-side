import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddServices.css'

const AddServices = () => {
    const [imageURL,setImageURL] = useState(null);
 const { register, handleSubmit ,reset } = useForm();

  const onSubmit = data => {
       console.log(data);
      const serviceData = {
          name: data.name,
          description: data.description,
          price: data.price,
          imageURL:imageURL
      }
      console.log(serviceData);
    axios.post('https://howling-plague-64679.herokuapp.com/services',serviceData)
    // axios.post('http://localhost:5000/services',serviceData)
    .then(res => {
        if(res.data.insertedId) {
            alert('added successfully');
            reset()
        }
    })
    };

  const handleImageAdd = service => {
      const imageStore = new FormData();
      imageStore.set('key','5aadb17e758cd32a97ba74e511a1a6b6')
      imageStore.append('image',service.target.files[0]);

    //   image added
      axios.post('https://api.imgbb.com/1/upload',imageStore)
      .then(function (response) {
          setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
          console.log(error);
      })

  }
    return (
        <div className="add-service">
            <h3>Add  Your Services</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 30 })} placeholder="Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="price" />
                 <input type="file" placeholder="image" onChange={handleImageAdd} />
                <br />
                <input className="btn btn-warning text-white" type="submit" />
                </form>
        </div>
    );
};

export default AddServices;