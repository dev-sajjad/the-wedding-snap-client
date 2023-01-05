import React from "react";
import { toast } from "react-hot-toast";
import ShortBannerImg from "../../../src/assets/ShortBanner/wedding.jpg";
import TopBanner from "../Services/TopBanner";

const AddService = () => {

    const handleAddService = (e) => {
        e.preventDefault()
        const form = e.target;

        const serviceData = {
             service_id : 'package' + form.id.value,
            service_name: form.name.value,
            price: form.price.value,
            image: form.image.value,
            duration: form.duration.value,
            rating: form.rating.value,
            description: form.description.value
        }

        fetch("http://localhost:5000/services", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(data.message)
                    form.reset()
                }
            })
        .catch(error => toast.error(error.message))
        


    }




  const bannerData = {
    name: "Add Service",
      img: ShortBannerImg,
  };

  return (
    <div>
      <TopBanner
        BannerImg={bannerData.img}
        BannerName={bannerData.name}
      ></TopBanner>
          <div className="my-16 bg-slate-300 p-8 rounded-xl ">
              <h2 className="text-2xl lg:text-4xl text-center mb-9  border-transparent border-4 border-b-amber-500 mx-auto w-1/5 font-sans">Service Form</h2>
        <form onSubmit={handleAddService}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-lg font-mono">
                  Service ID*
                </span>
              </label>
              <input
                type="text"
                name="id"
                className="input input-bordered input-warning border-warning bg-yellow-50 w-full max-w-xs"
                required
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-lg font-mono">
                  Service Name*
                </span>
              </label>
              <input
                type="text"
                name="name"
                className="input input-bordered input-warning border-warning bg-yellow-50 w-full max-w-xs"
                required
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-lg font-mono">
                  Duration(Hours)*
                </span>
              </label>
              <input
                type="text"
                name="duration"
                className="input input-bordered input-warning border-warning bg-yellow-50 w-full max-w-xs"
                required
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-lg font-mono">Ratings</span>
              </label>
              <input
                type="text"
                name="rating"
                placeholder="ex: 1/2/3/4/5"
                className="input input-bordered input-warning border-warning bg-yellow-50 w-full max-w-xs"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-lg font-mono">Image URL*</span>
              </label>
              <input
                type="text"
                name="image"
                className="input input-bordered input-warning border-warning bg-yellow-50 w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-lg font-mono">Price*</span>
              </label>
              <input
                type="text"
                name="price"
                className="input input-bordered input-warning border-warning bg-yellow-50 w-full"
                required
              />
            </div>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg font-mono">
                Descriptions*
              </span>
            </label>
            <input
              type="text"
              name="description"
              className="textarea textarea-warning h-60 border-warning bg-yellow-50 w-full"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary btn-md tracking-wide font-mono text-xl w-full mt-6">
            Add Service
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddService;
