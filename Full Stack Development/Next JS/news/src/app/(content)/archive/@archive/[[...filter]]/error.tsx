"use client";

import React from "react";

const FilterError = ({ error }: any) => {
  return (
    <div className="error">
      <h2>An Error Occurred</h2>
      <p>{error.message}</p>
    </div>
  );
};

export default FilterError;
