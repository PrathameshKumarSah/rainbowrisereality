import React, { useEffect, useState } from 'react';
import { Bed, ChevronDown, ImagePlus, PencilRuler, SquareDashedMousePointerIcon, UploadCloud } from "lucide-react";
import {apiStore} from "../store/apiHandler.js"
import { Loader } from 'lucide-react';
import toast from "react-hot-toast";

const AddProjects = () => {
    const {isUploading, addProjectHandler } = apiStore();
    const [selectedImages, setSelectedImages] = useState([]);
    const initialForm= {
        developer:'',
        title:'',
        category:'Residential',
        status:'Ready to Move',
        area_size:'',
        rooms:'',
        location:'',
        features:'',
        about:'',
        images:[],
        brochure:null,
        area:'',
        city:'',
        state:"Uttar Pradesh"	
      }
    
    const [formData, setFormData] = useState(initialForm);
    const [showCustomInput, setShowCustomInput] = useState(false);

    // form submit handle...
    const validateForm = (e) => {
        e.preventDefault();
        if(!formData.developer){
          toast.error('Please select or add project Developer Details')
          return ;
        }

        const data = new FormData();
        data.append('developer', formData.developer);
        data.append('title', formData.title);
        data.append('category', formData.category);
        data.append('status', formData.status);
        data.append('area_size', formData.area_size);
        data.append('rooms', formData.rooms);
        data.append('location', formData.location);        
        data.append('features', formData.features);
        data.append('about', formData.about);
        data.append('area', formData.area);
        data.append('city', formData.city);
        data.append('state', formData.state);

        formData.images.forEach((image) => {
          data.append("images", image);
        });
        if (formData.brochure) {
          data.append("brochure", formData.brochure);
        }
        console.log('data\n'+data);
        console.log('formdata\n'+formData);

        addProjectHandler(data);
        setFormData(initialForm);
    }

    // handling changes of developer dropdown and input
    const handleDeveloperDropdownChange = (e) => {
        const value = e.target.value;
        if (value === 'custom') {
            setShowCustomInput(true);
            setFormData({ ...formData, developer: '' });
        } else {
            setFormData({ ...formData, developer: e.target.value });  
            setShowCustomInput(false);
        }
    };

    const handleImageChange = (e) => {
      const files = Array.from(e.target.files);
      // max length to accept images..
      let tLen = selectedImages.length+files.length;
      if(tLen>5){
        toast.error("Limit exceeds, only 5 images allow to can upload.")
        return ;
      }
      const filePreviews = files.map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      }));
      setSelectedImages((prevImages) => [...prevImages, ...filePreviews]);
    };

    useEffect(()=>{
      setFormData({ ...formData, images: selectedImages.map((image) => image.file) });
    }, [selectedImages])
  
    const removeImage = (index) => {
      setSelectedImages((prevImages) => {
        const updatedImages = [...prevImages];
        updatedImages.splice(index, 1);
        return updatedImages;
      });
    };


  return (
    <form onSubmit={validateForm}>
      <div className="space-y-12 p-4">
        <div className="border-b border-gray-900/10 pb-12">
          {/* <h2 className="text-l font-semibold text-indigo-600">Add Project</h2> */}
          
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

            {/* developer dropdown */}
            <div className="sm:col-span-3">
              <label htmlFor="developer" className="block text-sm/6 font-medium text-gray-900">
                Select Developer
              </label>
              <div className="mt-2 grid grid-cols-1">
                <select
                  id="type"
                  name="type"
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  value={formData.developer}
                  onChange={handleDeveloperDropdownChange}
                //   onChange={(e) => {setFormData({ ...formData, developer: e.target.value })}}
                >
                  <option value=''>Select Developer</option>
                  <option value={"custom"} className='font-semibold'>Add New Developer</option>
                  <option value={"Godrej"}>Godrej</option>
                  <option value={"Page Three"}>Page Three</option>
                  <option value={"SKA"}>SKA</option>
                  <option value={"DLF"}>DLF</option>
                  <option value={"Gaur"}>Gaur</option>
                </select>
                
                <ChevronDown 
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                />
              </div>
            </div>

            {/* Conditional Custom Input */}
            {showCustomInput && (
                <div className="sm:col-span-3">
                    <label htmlFor="customInput" className="block text-sm/6 font-medium text-gray-900">
                        Enter R-Estate Developer Name
                    </label>
                    <input
                        type="text"
                        id="customInput"
                        name="customInput"
                        value={formData.developer}
                        onChange={(e)=>setFormData({ ...formData, developer: e.target.value })}
                        className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        placeholder="Like Godrej, Page Three..."
                    />
                </div>
            )}

            {/* Project title */}
            <div className="col-span-full">
                <label htmlFor="title" className="block text-md/6 font-medium text-gray-900">
                  Project Title
                </label>
                <div className="mt-2">
                  <input
                    id="Projecttitle"
                    name="title"
                    type="text"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    placeholder="Enter Project Title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                  />
                </div>
              </div>

            {/* Category */}
              <div className="sm:col-span-3">
              <label htmlFor="category" className="block text-sm/6 font-medium text-gray-900">
              Project Type
              </label>
              <div className="mt-2 grid grid-cols-1">
                <select
                  id="type"
                  name="type"
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  value={formData.category}
                  onChange={(e) => {setFormData({ ...formData, category: e.target.value })}}
                  required
                >
                  <option value={"Residential"}>Residential</option>
                  <option value={"Commercial"}>Commercial</option>
                  <option value={"Apartment"}>Apartment</option>
                  <option value={"Townhouse"}>Townhouse</option>
                  <option value={"Farmhouse"}>Farmhouse</option>
                  <option value={"Condos"}>Condos</option>
                  <option value={"Studio"}>Studio</option>
                  <option value={"Chalet"}>Chalet</option>
                </select>
                
                <ChevronDown 
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                />
              </div>
            </div>

            {/* Status */}
            <div className="sm:col-span-3">
              <label htmlFor="status" className="block text-sm/6 font-medium text-gray-900">
              Project Status
              </label>
              <div className="mt-2 grid grid-cols-1">
                <select
                  id="type"
                  name="type"
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  value={formData.status}
                  onChange={(e) => {setFormData({ ...formData, status: e.target.value })}}
                  required
                >
                  <option value={"Ready to Move"}>Ready to Move</option>
                  <option value={"Upcoming"}>Upcoming</option>
                  <option value={"Under Construction"}>Under Construction</option>
                </select>
                
                <ChevronDown 
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                />
              </div>
            </div>

            {/* bed room */}
            <div className="sm:col-span-3">
              <label htmlFor="bed" className="block text-sm/6 font-medium text-gray-900">
                Bed Rooms
              </label>
              <div className="mt-1">
                <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                  <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6 flex"><Bed /> | </div>
                  <input
                    id="bed"
                    name="bed"
                    type="text"
                    placeholder="1 BHK, 2-3 BHK etc."
                    className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                  value={formData.rooms}
                  onChange={(e) => setFormData({ ...formData, rooms: e.target.value })}
                  required
                  />
                </div>
              </div>
            </div>

            {/* Area */}
            <div className="sm:col-span-3">
              <label htmlFor="area" className="block text-sm/6 font-medium text-gray-900">
                Area
              </label>
              <div className="mt-2">
                <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                  <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6 flex"><PencilRuler /> | </div>
                  <input
                    id="area"
                    name="area"
                    type="text"
                    placeholder="Area"
                    className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                  value={formData.area_size}
                  onChange={(e) => setFormData({ ...formData, area_size: e.target.value })}
                  required
                  />
                </div>
              </div>
            </div>

            
            {/* location */}
            <div className="sm:col-span-3">
              <label htmlFor="location" className="block text-sm/6 font-medium text-gray-900">
                Project Location
              </label>
              <div className="mt-2 grid grid-cols-1">
              <input
                    id="location"
                    name="location"
                    type="text"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    placeholder="Project Location like Noida, Greater Noida"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    required
                  />
                
              </div>
            </div>

            {/* Project features */}
            <div className="col-span-full">
                <label htmlFor="features" className="block text-md/6 font-medium text-gray-900">
                  Features/Amenities
                </label>
                <div className="mt-2">
                  <input
                    id="Projectfeatures"
                    name="features"
                    type="text"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    placeholder="Swimming Pool, Fitness Center, Gardens, Clubhouse, etc."
                    value={formData.features}
                    onChange={(e) => setFormData({ ...formData, features: e.target.value })}
                    required
                  />
                </div>
              </div>

            {/* About */}
            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm/6 font-medium text-gray-900">
                Project About
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  placeholder={'Enter Project about'}
                  value={formData.about}  
                  onChange={(e) => setFormData({ ...formData, about: e.target.value })}
                  required
                />
              </div>
            </div>

            {/* Multiple Images */}
            <div className="col-span-full border-b pb-4" >
              <label htmlFor="cover-photo" className="block text-sm/6 font-medium text-gray-900">
                Upload Images <span className='text-red-700'>(Note: Max 5 Images uploads)</span>
              </label>
              {/* <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <ImagePlus aria-hidden="true" className="mx-auto size-12 text-gray-300" />
                  
                  <p className="text-xs/5 text-gray-600">PNG, JPG up to 5MB</p>
                </div>
              </div> */}
              
              <div className="mt-4 flex items-center text-sm/6 text-gray-600">
                <label htmlFor="cover-photo" className="block mr-3 text-sm/6 font-medium text-gray-900">
                  Add: 
                </label>
                    <label
                      htmlFor="file-upload"
                      className="flex justify-center items-center rounded-md cursor-pointer bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      <ImagePlus className='mr-1' />
                      <span>Add Image</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" accept="image/*" 
                      // value={formData.img}
                      onChange={handleImageChange}
                      multiple={true}
                      required
                      />
                    </label>
                  </div>
              {/* <p>Img path: {formData.img}</p> */}
              {/* Selected images display */}
              {selectedImages.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4 mt-4">
                  {selectedImages.map((image, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={image.preview}
                        alt={`Selected ${index}`}
                        className="w-full h-20 object-cover rounded-lg shadow-md"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Upload brochure */}
            <div className="col-span-full" >
              <label htmlFor="brochure" className="block text-sm/6 font-medium text-gray-900">
                Select Brochure
              </label>
              {/* <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <ImagePlus aria-hidden="true" className="mx-auto size-12 text-gray-300" />
                  
                  <p className="text-xs/5 text-gray-600">PNG, JPG up to 5MB</p>
                </div>
              </div> */}
              
              <div className="mt-4 flex items-center text-sm/6 text-gray-600">
                <label htmlFor="brochure" className="block mr-3 text-sm/6 font-medium text-gray-900">
                  Choose File: 
                </label>
                    <label
                      htmlFor="file-brochure"
                      className="flex justify-center items-center rounded-md cursor-pointer bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      <SquareDashedMousePointerIcon className='mr-1' />
                      <span>Select Brochure</span>
                      <input id="file-brochure" name="file-brochure" type="file" className="sr-only" 
                      // value={formData.brochure.name}
                      onChange={(e) => {setFormData({ ...formData, brochure: e.target.files[0] })}}
                      
                      required
                      />
                    </label>
                  </div>
              {/* <p>Img path: {formData.img}</p> */}
              {(formData.brochure!=null && formData.brochure.name) && (
                <p className='mt-3'>
                    Selected File: <span className='font-semibold text-indigo-600'>{formData.brochure.name}</span> 
                </p>
            )}
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base/7 font-semibold text-indigo-600">Project Address Details</h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

            <div className="col-span-full">
              <label htmlFor="street-address" className="block text-sm/6 font-medium text-gray-900">
                Street address
              </label>
              <div className="mt-2">
                <input
                  id="street-address"
                  name="street-address"
                  type="text"
                  autoComplete="street-address"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  value={formData.area}
                  onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="sm:col-span-3 sm:col-start-1">
              <label htmlFor="city" className="block text-sm/6 font-medium text-gray-900">
                City
              </label>
              <div className="mt-">
                <input
                  id="city"
                  name="city"
                  type="text"
                  autoComplete="Noida"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  placeholder="Noida, Noida Extension, Greater Noida..."
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  required
                />
              </div>
            </div>

            {/* State */}
            <div className="sm:col-span-3">
              <label htmlFor="region" className="block text-sm/6 font-medium text-gray-900">
                State
              </label>
              <div className="mt-2">
                <input
                  id="region"
                  name="region"
                  type="text"
                  autoComplete="U.P"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  placeholder="U.P"
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  required
                />
              </div>
            </div>

          </div>
        </div>

      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="reset" className="text-sm/6 font-semibold px-3 py-2 rounded-md text-gray-900 transition-all hover:bg-rose-500 hover:text-white">
          Reset
        </button>
        <button
          type="submit"
          className="flex justify-center items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" disabled={isUploading}>
          {isUploading ? (
            <>
              <Loader className="h-5 w-5 animate-spin" /> &nbsp;
              Uploading...
            </>
          ) : (
          <>
            <UploadCloud size={20} /> &nbsp; Save Details
          </>
          )}
        </button>
      </div>
    </form>
  )
}

export default AddProjects
