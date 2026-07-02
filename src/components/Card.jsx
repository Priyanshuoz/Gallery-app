import React from "react";

const Card = (props) => {
  return (
    <div>
      <a href={props.ele.url} target="noreferrer">
        <div className="h-50 w-55">
          <img
            className="h-full w-full object-cover rounded-2xl"
            src={props.ele.download_url}
            alt=""
          />
        </div>
        <h2 className="font-semibold text-lg">{props.ele.author}</h2>
      </a>
    </div>
  );
};

export default Card;
