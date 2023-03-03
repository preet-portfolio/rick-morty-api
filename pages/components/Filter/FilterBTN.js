import React from "react";

const FilterBTN = ({ input, task, setPageNumber, index, name, items }) => {
  // const handleLabelClick = (event) => {
  //   if (typeof task === "function") {
  //     task(input);
  //     setPageNumber(1);
  //   }
  // };

  return (
    <div>
      <style jsx="true">
        {`
          .x:checked + label {
            background-color: #0b5ed7;
            color: white;
          }
          input[type="radio"] {
            display: none;
          }
        `}
      </style>

      <div className="form-check">
        <input
          onClick={() => {
            setPageNumber(1);
            task(items);
          }}
          className="form-check-input x"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        <label
          // onClick={handleLabelClick}
          className="btn btn-outline-primary"
          htmlFor={`${name}-${index}`}
        >
          {items}
        </label>
      </div>
    </div>
  );
};

export default FilterBTN;
