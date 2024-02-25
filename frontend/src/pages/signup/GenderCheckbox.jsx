import React from "react";

const GenderCheckbox = () => {
  return (
    <div className="flex">
      <div className="form-control p-2">
        <label className="{`label gap-5 cursor-pointer`}">
          <span className="label-text p-2">Male</span>
          <input type="checkbox" className="checkbox border-primary" />
        </label>
      </div>
      <div className="form-control p-2">
        <label className="{`label gap-2 cursor-pointer`}">
          <span className="label-text p-2">Female</span>
          <input type="checkbox" className="checkbox border-primary" />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
