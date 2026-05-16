
import React, { useEffect, useState } from "react";
import { Pencil, Save, Trash2, ShieldBan, Users, Mail,ShieldCheck } from "lucide-react";
import axios from "axios";
import { API } from "../config/api";

const DashboardUsers = () => {
  const [users, setUsers] = useState([]);
 

    // get all users
  const getUsers = async () => {
    try {
      const res = await axios.get(`${API}/auth/users`);
      
      setUsers(res.data.users);

    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);
   
  // handel delete user here
  const handleDeleteUser = async (id) => {

  const confirmDelete = window.confirm(
    "Are you sure you want to delete this user?"
  );

  if (!confirmDelete) return;

  try {

    const res = await axios.delete(
      `${API}/auth/users/${id}`
    );

    console.log(res.data);

    // remove deleted user from UI
    setUsers(
      users.filter((user) => user._id !== id)
    );

    alert("User Deleted Successfully");

  } catch (error) {
    console.log(error);
  }
};

  // handle edit user role 
  const handleRoleChange = async (id, role) => {
  try {

    const res = await axios.put(
      `${API}/auth/users/${id}`,
      { role }
    );

    

    // update UI instantly
    setUsers(
      users.map((user) =>
        user._id === id
          ? { ...user, role }
          : user
      )
    );

    alert("User Role Updated");

  } catch (error) {
    console.log(error);
  }
};
const handleEdit = (id) => {

  setUsers(
    users.map((user) =>
      user._id === id
        ? { ...user, isEditing: true }
        : user
    )
  );

};
const handleSave = (id) => {

  setUsers(
    users.map((user) =>
      user._id === id
        ? { ...user, isEditing: false }
        : user
    )
  );

};

// handle blockuser
const handleBlock = async(id)=>{
 try {
    const res = await axios.put(
      `${API}/auth/block-user/${id}`
    );
    console.log(res)
    if (res.data.success) {
      getUsers(); // refresh users

    }
    
  } catch (error) {
    console.log(error);
    alert("Something went wrong");
  }


}


  return (
    <div className="w-full">

      {/* TOP */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8">

        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Users Management
          </h1>

          <p className="text-gray-500 mt-2">
            Manage users, roles and permissions
          </p>
        </div>

        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-4 rounded-3xl shadow-lg w-fit">
          <p className="text-sm opacity-90">
            Total Users
          </p>

          <h2 className="text-3xl font-bold">
            {users.length}
          </h2>
        </div>
      </div>

      {/* DESKTOP TABLE */}
      <div className="hidden lg:block bg-white rounded-[35px] shadow-xl border border-cyan-100 overflow-hidden">

        <table className="w-full">

          <thead className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white">

            <tr>

              <th className="p-6 text-left">
                User
              </th>

              <th className="p-6 text-left">
                Email
              </th>

              <th className="p-6 text-left">
                Role
              </th>

              <th className="p-6 text-left">
                Actions
              </th>

            </tr>
          </thead>

          <tbody>

            {users.map((user) => (

              <tr
                key={user._id}
                className="border-b hover:bg-cyan-50 transition"
              >

                {/* USER */}
                <td className="p-6">

                  <div className="flex items-center gap-4">

                    <div className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {user.name.charAt(0)}
                    </div>

                    <div>
                      <h2 className="font-bold text-gray-800">
                        {user.name}
                      </h2>

                      <p className="text-sm text-gray-500">
                        User ID : #{user._id}
                      </p>
                    </div>

                  </div>
                </td>

                {/* EMAIL */}
                <td className="p-6">

                  <div className="flex items-center gap-2 text-gray-700">

                    <Mail size={18} />

                    {user.email}

                  </div>
                </td>

                {/* ROLE */}
                <td className="p-6">

                  {user.isEditing ? (

                    <select
                      value={user.role}
                      onChange={(e) =>
                        handleRoleChange(
                          user._id,
                          e.target.value
                        )
                      }
                      className="border border-cyan-200 px-4 py-2 rounded-xl outline-none focus:border-cyan-500 bg-cyan-50"
                    >
                      <option value="user">
                        User
                      </option>

                      <option value="admin">
                        Admin
                      </option>

                    </select>

                  ) : (

                    <span
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold ${
                        user.role === "admin"
                          ? "bg-green-100 text-green-700"
                          : "bg-cyan-100 text-cyan-700"
                      }`}
                    >

                      <ShieldCheck size={16} />

                      {user.role}

                    </span>

                  )}

                </td>

                {/* ACTIONS */}
                <td className="p-6">
                  <div className="flex items-center gap-3 flex-wrap">
                    {user.isEditing ? (
                      <button
                        onClick={() =>
                          handleSave(user._id)
                        }
                        className="flex items-center gap-2 bg-green-500 hover:bg-green-600 transition text-white px-5 py-3 rounded-2xl shadow-md"
                      >
                        <Save size={18} />
                        
                      </button>

                    ) : (

                      <button
                        onClick={() =>
                          handleEdit(user._id)
                        }
                        className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 transition text-white px-5 py-3 rounded-2xl shadow-md"
                      >
                        <Pencil size={18} />
                      </button>

                    )}

                    <button
                      className={`flex items-center gap-2 transition text-white px-5 py-3 rounded-2xl shadow-md ${
                        user.blocked
                          ? "bg-green-500 hover:bg-green-600"
                          : "bg-yellow-400 hover:bg-yellow-500"
                      }`}
                      onClick={() => handleBlock(user._id)}
                    >

                      {user.blocked ? (
                        <ShieldCheck size={18} />
                      ) : (
                        <ShieldBan size={18} />
                      )}

                    </button>

                    <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 transition text-white px-5 py-3 rounded-2xl shadow-md cursor-pointer"
                     onClick={()=>handleDeleteUser(user._id)}>
                      <Trash2 size={18} />
                    </button>

                  </div>
                </td>

              </tr>
            ))}

          </tbody>
        </table>
      </div>

      {/* MOBILE CARDS */}
      <div className="lg:hidden space-y-5">

        {users.map((user) => (

          <div
            key={user._id}
            className="bg-white rounded-[30px] shadow-lg border border-cyan-100 overflow-hidden"
          >

            {/* TOP */}
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-5 text-white">

              <div className="flex items-center gap-4">

                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-2xl font-bold">
                  {user.name.charAt(0)}
                </div>

                <div>

                  <h2 className="text-xl font-bold">
                    {user.name}
                  </h2>

                  <p className="text-cyan-100 text-sm mt-1">
                    User ID : #{user._id}
                  </p>

                </div>
              </div>
            </div>

            {/* BODY */}
            <div className="p-5 space-y-5">

              {/* EMAIL */}
              <div className="flex items-start gap-3">

                <div className="bg-cyan-100 p-3 rounded-2xl text-cyan-700">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="text-gray-500 text-sm">
                    Email
                  </p>

                  <h3 className="font-semibold text-gray-800 break-all">
                    {user.email}
                  </h3>
                </div>
              </div>

              {/* ROLE */}
              <div className="flex items-center justify-between">

                <p className="text-gray-500 font-medium">
                  User Role
                </p>

                {user.isEditing ? (

                  <select
                    value={user.role}
                    onChange={(e) =>
                      handleRoleChange(
                        user._id,
                        e.target.value
                      )
                    }
                    className="border border-cyan-200 px-4 py-2 rounded-xl outline-none focus:border-cyan-500 bg-cyan-50"
                  >
                    <option value="user">
                      User
                    </option>

                    <option value="admin">
                      Admin
                    </option>

                  </select>

                ) : (

                  <span
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold ${
                      user.role === "admin"
                        ? "bg-green-100 text-green-700"
                        : "bg-cyan-100 text-cyan-700"
                    }`}
                  >

                    <ShieldCheck size={16} />

                    {user.role}

                  </span>

                )}

              </div>

              {/* ACTIONS */}
              <div className="grid grid-cols-2 gap-4 pt-2">

                {user.isEditing ? (

                  <button
                    onClick={() =>
                      handleSave(user._id)
                    }
                    className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 transition text-white py-4 rounded-2xl shadow-md font-semibold"
                  >
                    <Save size={18} />
                    Save
                  </button>

                ) : (

                  <button
                    onClick={() =>
                      handleEdit(user._id)
                    }
                    className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 transition text-white py-4 rounded-2xl shadow-md font-semibold"
                  >
                    <Pencil size={18} />
                    Edit
                  </button>

                )}

                <button
                    className={`flex items-center gap-2 transition text-white px-5 py-3 rounded-2xl shadow-md ${
                      user.blocked
                        ? "bg-green-500 hover:bg-green-600"
                        : "bg-yellow-400 hover:bg-yellow-500"
                    }`}
                    onClick={() => handleBlock(user._id)}
                  >
                    
                      {user.blocked ? (
                      <>
                        <ShieldCheck size={18} />
                        Unblock
                      </>
                    ) : (
                      <>
                        <ShieldBan size={18} />
                        Block
                      </>
                    )}

                  </button>

                <button className="col-span-2 flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 transition text-white py-4 rounded-2xl shadow-md font-semibold"
                 onClick={() => handleDeleteUser(user._id)}>

                  <Trash2 size={18} />

                  Delete User

                </button>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardUsers;