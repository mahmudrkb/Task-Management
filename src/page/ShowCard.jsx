import React from "react";

import { format } from "date-fns";
const ShowCard = ({ task }) => {
  const { title,date,description,category } = task;
  return (
    <div>
      <div className=" border rounded-2xl  ">
        <div className="card card-compact bg-base-100 max-w-96 shadow-xl">
          
          <div className="card-body">
            <div className=" flex justify-between items-center gap-5 ">
            <h2 className="card-title">{title}</h2>
            <p>Time: {date &&
                            format(new Date(date), "MMMM dd, yyyy hh:mm a")}</p>
            </div>
            <p>{category}</p>

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
