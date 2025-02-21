import React, { useContext } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import ShowCard from "./ShowCard";

const Card = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const from = e.target;
    const title = from.title.value;
    const category = from.category.value;
    const description = from.description.value;
    const date = new Date().toISOString();
    const email = user.email;
    const task = {
      title: title,
      category: category,
      description: description,
      email: email,
      date: date,
    };

    const addTask = await axiosSecure.post("/add-task", task);
    // console.log(addTask.data);
    if (addTask.data.insertedId) {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Task added successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      document.getElementById("my_modal_3").close();
    }
  };

  const { data: tasks = [], refetch } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/show-task/${user.email}`);
      return res.data;
    },
  });

  return (
    <div>
      <div className="container mx-auto p-3 my-5">
        <div className="flex justify-center pb-5">
          <button
            onClick={() => document.getElementById("my_modal_3").showModal()}
            className="  text-green-50   hover:text-green-200  rounded-md py-1 border-2 hover:border-green-200  px-4  flex text-3xl font-semibold gap-3 items-center"
          >
            <IoIosAddCircleOutline />
            Add Project
          </button>

          <dialog id="my_modal_3" className="modal">
            <div className="modal-box  bg-green-800">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle text-green-100 btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <div className="">
                <div className="flex min-h-full  flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                  <div className="  rounded-md sm:mx-auto  sm:w-full sm:max-w-sm">
                    <div className="sm:mx-auto   sm:w-full sm:max-w-sm">
                      <h2 className=" text-center text-green-100 text-2xl/9 font-bold tracking-tight text-gray-900">
                        Add Your Project
                      </h2>
                    </div>

                    <div className="mt-10   sm:mx-auto sm:w-full sm:max-w-sm">
                      <form
                        onSubmit={handleSubmit}
                        action="#"
                        method="POST"
                        className="space-y-6"
                      >
                        <div className="flex gap-4">
                          <div>
                            <label
                              htmlFor="name"
                              className="block text-sm/6 font-medium text-green-100"
                            >
                              Title
                            </label>
                            <div className="mt-2">
                              <input
                                id="name"
                                name="title"
                                type="text"
                                required
                                placeholder="Title"
                                autoComplete="name"
                                className="block w-full rounded-md bg-green-100 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                              />
                            </div>
                          </div>
                          <div>
                            <label
                              htmlFor="photo"
                              className="block text-sm/6 font-medium text-green-100"
                            >
                              Category
                            </label>
                            <div className="mt-2">
                              <select
                                name="category"
                                className="block w-full rounded-md bg-green-100 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                              >
                                <option disabled selected>
                                  Select Your Category
                                </option>
                                <option>To Do</option>
                                <option>Doing</option>
                                <option>Done</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <textarea
                          name="description"
                          className="block w-full rounded-md bg-green-100  px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                          placeholder="Description"
                        ></textarea>

                        <div>
                          <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-green-400  px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          >
                            Add Task
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </dialog>
        </div>

        <div className="grid mt-10 grid-cols-1 lg:grid-cols-3 gap-5 justify-items-center ">
          {tasks.map((task ,index) => (
            <ShowCard  key={index} task={task}></ShowCard>
          ))}
        
        </div>
      </div>
    </div>
  );
};

export default Card;
