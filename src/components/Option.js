import React from "react";

const Option = (props) => (
  <div className="option">
    <li className="option__text" key={props.id}>
      <p>
        {props.count}. {props.name}
      </p>
    </li>
    <button
      onClick={(e) => {
        props.handleRemoveOption(props.name);
      }}
      className="btn btn--link remove-btn"
    >
      Remove
    </button>
  </div>
);

export default Option;
