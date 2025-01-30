import React, { useState, useEffect, useRef } from 'react';
import { Bath, Bed, CarFront, PencilRuler, ChevronDown, CloudUpload, Edit, Save } from "lucide-react";
import {apiStore, BASE_URL} from "../store/apiHandler.js"
import { Loader } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

export default function AddProperty() {
  const {id} = useParams();
  const navigate = useNavigate();
  const {isUploading, getPropertyForUpdate, initialFormState, imgFormData, updateImg, isImgUpdating, updatePropertyDetails} = apiStore();
  const fileRef = useRef(null);
  const [formData, setFormData] = useState(initialFormState);
  const [imgData, setImgData] = useState(imgFormData);
  const initialForm= {
    title: '',
    category:'',
    status:'',
    location: '',
    img: '',
    bed: '',
    bath: '',
    parking: '',
    area: '',
    description: '',
    address: '',
    city: '',
    postal_code: '',
    state: "Uttar Pradesh"
  }

  const validateForm = async (e) => {
    e.preventDefault();
    await updatePropertyDetails(formData);
    
    await setFormData(initialForm);
    navigate('/admin/');
  }

  const handleUpdateImg = async () => {
    await updateImg(imgData);
  }

  useEffect(() => {
    getPropertyForUpdate(id);
    setImgData({ ...imgData, id:id});
    console.log("initial state"+initialFormState.status);
    console.log("initial "+formData.status);
  },[])

  useEffect(() => {
    setFormData(initialFormState);
  }, [initialFormState])

  return (
    <form onSubmit={validateForm}>
      <div className="space-y-12 p-4">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-l font-semibold text-indigo-600">Add Property</h2>
          
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
                <label htmlFor="title" className="block text-md/6 font-medium text-gray-900">
                  Property Title
                </label>
                <div className="mt-2">
                  <input
                    id="propertytitle"
                    name="title"
                    type="text"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    placeholder="Enter Property Title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
              <label htmlFor="category" className="block text-sm/6 font-medium text-gray-900">
              Property Type
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
                  <option value={"Villa"}>Villa</option>
                  <option value={"Duplex"}>Duplex</option>
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

            <div className="sm:col-span-3">
              <label htmlFor="location" className="block text-sm/6 font-medium text-gray-900">
                Property Location
              </label>
              <div className="mt-2 grid grid-cols-1">
              <input
                    id="location"
                    name="location"
                    type="text"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    placeholder="Property Location like Noida, Greater Noida"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    required
                  />
                
              </div>
            </div>

            
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
                  value={formData.bed}
                  onChange={(e) => setFormData({ ...formData, bed: e.target.value })}
                  required
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="bath" className="block text-sm/6 font-medium text-gray-900">
                Bath Rooms
              </label>
              <div className="mt-2">
                <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                  <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6 flex"><Bath /> | </div>
                  <input
                    id="bath"
                    name="bath"
                    type="text"
                    placeholder="Number of Bath Rooms"
                    className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                  value={formData.bath}
                  onChange={(e) => setFormData({ ...formData, bath: e.target.value })}
                  required
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="parking" className="block text-sm/6 font-medium text-gray-900">
                Parking
              </label>
              <div className="mt-2">
                <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                  <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6 flex"><CarFront /> | </div>
                  <input
                    id="parking"
                    name="parking"
                    type="text"
                    placeholder="Parking..."
                    className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                  value={formData.parking}
                  onChange={(e) => setFormData({ ...formData, parking: e.target.value })}
                  />
                </div>
              </div>
            </div>

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
                  value={formData.area}
                  onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                  required
                  />
                </div>
              </div>
            </div>


            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm/6 font-medium text-gray-900">
                Property Description
              </label>
              <div className="mt-2">
                <textarea
                  id="description"
                  name="description"
                  rows={3}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  placeholder={'Enter Property Description'}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                />
              </div>
            </div>

          

            <div className="col-span-full" >
              <label htmlFor="cover-photo" className="block text-sm/6 font-medium text-gray-900">
                Property Image
              </label>
              
              <div className="relative w-full lg:w-96 lg:h-72 mx-lg mt-4">
                {/* -- Image -- */}
                <img 
                  src={BASE_URL+"/imgs/"+formData.img} 
                  alt={formData.title} 
                  className="w-full h-full object-cover bg-cover rounded-lg shadow-lg"
                />

                {/* -- Pencil Button -- */}
                <label
                  className="absolute bottom-0 right-0 cursor-pointer transform translate-y-1/2 translate-x-1/2 bg-white border border-gray-300 shadow-md rounded-full p-2 flex items-center justify-center hover:bg-gray-100 group"
                  ref={fileRef}
                  onClick={() => fileRef.current.click()}
                >
                  <Edit className="w-5 h-5 text-gray-600" />

                  {/* Tooltip */}
                  <span className="absolute bottom-full right-1/2 translate-y-2 translate-x-1/2 opacity-0 group-hover:opacity-100 bg-indigo-200 text-black text-xs py-1 px-2 rounded shadow-lg">
                    Change Image
                  </span>
                </label>
                <input id="file-upload" name="file-upload" type="file" className="sr-only" ref={fileRef} accept="image/*" 
                    onChange={(e) => setImgData({ ...imgData, img: e.target.files[0] })}
                />
              </div>

              {imgData.img && 
                <label
                onClick={handleUpdateImg}
                className="mx-auto mt-4 inline-flex justify-center items-center cursor-pointer rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" disabled={isUploading}>
                {isImgUpdating ? (
                  <>
                    <Loader className="h-5 w-5 animate-spin" /> &nbsp;
                    Uploading Image...
                  </>
                ) : (
                <>
                  <CloudUpload size={20} /> &nbsp; Upload Image
                </>
                )}
                </label>
              }
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base/7 font-semibold text-indigo-600">Property Address Details</h2>

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
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-sm/6 font-medium text-gray-900">
                City
              </label>
              <div className="mt-2">
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

            <div className="sm:col-span-2">
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

            <div className="sm:col-span-2">
              <label htmlFor="postal-code" className="block text-sm/6 font-medium text-gray-900">
                PIN code (optional)
              </label>
              <div className="mt-2">
                <input
                  id="postal-code"
                  name="postal-code"
                  type="text"
                  autoComplete="postal-code"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  value={formData.postal_code}
                  onChange={(e) => setFormData({ ...formData, postal_code: e.target.value })}
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
            <Save size={20} /> &nbsp; Save Details
          </>
          )}
        </button>
      </div>
    </form>
  )
}
