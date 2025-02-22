import React, { useContext, useState } from "react";
import { format } from "date-fns";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { AuthContext } from "./../provider/AuthProvider";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Update from "./Update";

const ShowCard = ({ task, refetch }) => {
  const { _id, title, date, description, category } = task;
  const [modalId, setModalId] = useState();

  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    })
      .then((result) => {
        if (result.isConfirmed) {
          axiosSecure.delete(`/delete-task/${id}`).then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
            refetch();
          });
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${err.message} Try Again`,
        });
      });
  };

  return (
    <div>
      <div className=" border rounded-2xl  ">
        <div className="card card-compact bg-base-200 text-white min-w-72 max-w-96 shadow-xl">
          <div className="card-body">
            <div className=" flex justify-between items-center gap-5 ">
              <h2 className="card-title">{title}</h2>
              <div className="flex gap-3 items-center">
                <Link to={`/update/${_id}`} >
                  <FaRegEdit className=" size-6 hover:text-blue-600" />
                </Link>
                <AiOutlineDelete
                  onClick={() => handleDelete(_id)}
                  className=" size-6 hover:text-red-600"
                />
              </div>
            </div>{" "}
            <date>{format(date, "hh:mm a")}</date>
            <div
              className={` w-fit p-2 font-semibold text-white rounded
             ${
               category === "To Do"
                 ? "bg-green-600"
                 : category === "Doing"
                 ? "bg-yellow-600"
                 : category === "Done"
                 ? "bg-blue-600"
                 : "bg-gray-300"
             }`}
            >
              {category}
            </div>
            <p>{description}</p>
            {/* <div className="card-actions justify-end">
             
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCard;
