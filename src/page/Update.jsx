import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const Update = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { id } = useParams();

  const { data: taskData = {}, refetch } = useQuery({
    queryKey: ["taskData",id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/task-details/${id}`);
      return res.data;
    }
    
  });
    console.log(taskData);


  //   const handleUpdate = async () => {
  //     const { id } = useParams();
  //     const task = {
  //       title,
  //       description,
  //       category,
  //     };

  //     const taskUpdate = await axiosSecure.patch(`/update-task/${id}`, task);

  //     if (taskUpdate.data.modifiedCount > 0) {
  //       Swal.fire({
  //         position: "top-center",
  //         icon: "success",
  //         title: "Pet Updated successfully",
  //         showConfirmButton: false,
  //         timer: 1500,
  //       });
  //       refetch();
  //     } else {
  //       Swal.fire({
  //         icon: "error",
  //         title: "Oops...",
  //         text: "Something went wrong!",
  //       });
  //     }
  //   };

  return (
    <div>
      <div className=" bg-green-900">
        <div className="flex min-h-full  flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="  rounded-md sm:mx-auto  sm:w-full sm:max-w-sm">
            <div className="sm:mx-auto   sm:w-full sm:max-w-sm">
              <h2 className=" text-center text-green-100 text-2xl/9 font-bold tracking-tight ">
                Update Your Project
              </h2>
            </div>

            <div className="mt-10   sm:mx-auto sm:w-full sm:max-w-sm">
              <form
                // onSubmit={handleUpdate}
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
                        defaultValue={taskData.title}
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
                        defaultValue={taskData.category}
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
                  defaultValue={taskData.description}
                  name="description"
                  className="block w-full rounded-md bg-green-100  px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  placeholder="Description"
                ></textarea>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-green-400  px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Update Task
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
