import React, { use, useEffect } from "react";
import { AuthContext } from "../../components/context/AuthProvider";
import { toast } from "react-toastify";
const Profile = () => {
  const { user, register, setUser, updateUser } = use(AuthContext);
  const handleSave = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    updateUser({ displayName: name, photoURL: photo })
      .then(() => {
        toast.success("Profile updated successfully");
        setUser({ ...user, displayName: name, photoURL: photo });
      })
      .then((error) => {
        setUser(user);
      });
  };
  useEffect(() => {
    document.title = "My - Profile";
  }, []);
  return (
    <div className="flex items-center flex-col md:flex-row gap-8 px-4 md:px-0">
      {/* right side  */}
      <div className="flex flex-col gap-1 w-full md:w-[40%] bg-gray-200 p-8 rounded-md">
        <p className="text-center text-2xl font-medium border-b pb-4 border-[#14141426]">
          Personal Information
        </p>
        <div className="w-full flex items-center justify-center my-4">
          <img
            className="w-20 h-20 rounded-full object-cover bg-center"
            src={user.photoURL}
            alt=""
          />
        </div>
        <p className="font-semibold text-lg">
          Name :{" "}
          <span className="font-medium text-gray-800">{user.displayName}</span>
        </p>
        <p className="font-semibold text-lg">
          Email :{" "}
          <span className="font-medium text-gray-800">{user.email}</span>
        </p>
      </div>
      {/* LEFT SIDE  */}
      <div className="flex flex-col gap-1 w-full md:w-[60%] bg-gray-200 p-8 rounded-md">
        <p className="text-center text-2xl font-medium border-b pb-4 border-[#14141426]">
          Update your Information
        </p>
        <form
          onSubmit={handleSave}
          className="flex justify-center mt-5 flex-col gap-4"
        >
          <input
            className=" px-4 py-2 rounded bg-white outline-none"
            type="text"
            name="name"
            placeholder="Enter your name"
          />
          <input
            className=" px-4 py-2 rounded bg-white outline-none"
            type="text"
            name="photo"
            placeholder="Enter your PhotoURL"
          />
          <button className=" bg-[#AD49E1] text-white font-medium md:px-8 md:py-2.5 px-4 py-2  rounded">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
