import React, { useState } from "react";
import { apiStore } from "../store/apiHandler";
import userIcon from '../assets/user.png';

const Profile = () => {
  const { updateProfileDetails, checkAuth, userData } = apiStore();
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: userData.name,
    email: userData.email,
    phone: userData.phone,
    profileImage: "https://cdn.tailgrids.com/2.2/assets/core-components/images/avatar/image-05.jpg",
  });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUser({ ...user, profileImage: imageUrl });
    }
  };

  const handleSave = async () => {
    setIsEditing(false);
    // Add logic to save updated user details (e.g., API call).
    await updateProfileDetails(user);
    await checkAuth();
    // setUser({ ...user, [name]: authUser.phone });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Profile Section */}
      <div className="flex items-center space-x-6">
        {/* Profile Image */}
        <div className="relative w-28 h-28">
          <img
            src={userIcon}
            alt="Admin Profile"
            className="w-full h-full rounded-full object-cover border border-indigo-500"
          />
          
        </div>
        {/* User Info */}
        <div>
          <h2 className="text-2xl font-bold text-indigo-700">{user.name}</h2>
          <p className="text-indigo-500">Administrator</p>
        </div>
      </div>

      {/* Input Fields */}
      <div className="mt-8 space-y-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-indigo-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleInputChange}
            disabled={!isEditing}
            className={`mt-1 block w-full p-2 border rounded-md ${
              isEditing
                ? "border-indigo-300"
                : "bg-indigo-100 cursor-not-allowed"
            }`}
          />
        </div>
        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-indigo-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
            disabled={!isEditing}
            className={`mt-1 block w-full p-2 border rounded-md ${
              isEditing
                ? "border-indigo-300"
                : "bg-indigo-100 cursor-not-allowed"
            }`}
          />
        </div>
        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-indigo-700">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            value={user.phone}
            onChange={handleInputChange}
            disabled={!isEditing}
            className={`mt-1 block w-full p-2 border rounded-md ${
              isEditing
                ? "border-indigo-300"
                : "bg-indigo-100 cursor-not-allowed"
            }`}
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex justify-end space-x-4">
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
            >
              Save
            </button>
            <button
              onClick={handleEditToggle}
              className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={handleEditToggle}
            className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;
