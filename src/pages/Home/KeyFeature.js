import React from "react";

export const KeyFeature = (props) => {
  const { title = "", description = "", image = "" } = props;

  return (
    <>
      <div className="col-md-4 cardMargin">
        <div className="w-100 h-100 p-5 shadow-alt rounded-4">
          <img src={image} alt={title} style={{ width: "95px " }} />
          <h3 className="mt-3 lh-base">{title}</h3>
          <p className="mb-0">{description}</p>
        </div>
      </div>
    </>
  );
};
