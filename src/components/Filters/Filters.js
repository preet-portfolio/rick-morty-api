import React from "react";
import Gender from "./Category/Gender";
import Status from "./Category/Status";
import Species from "./Category/Species";

const Filters = () => {
  return (
    <div className="col-3">
      <div className="text-center fw-bold fs-4 md-2">Filter</div>
      <div
        style={{ cursor: "pointer" }}
        className="text-center text-decoration-underline text-primary"
      >
        Clear Filters
      </div>
      <div className="accordion" id="accordionExample">
        <Status />
        <Species />
        <Gender />
      </div>
    </div>
  );
};

export default Filters;
