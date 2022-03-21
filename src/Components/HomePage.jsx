import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
export const HomePage = () => {

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          paddingTop: "175px",
        }}
      >
        {/* Iterate over products and show links */}
        {[].map((el) => {
          return <Link to={``}>{/* Show product image and name */}</Link>;
        })}
      </div>
    </>
  );
};
