import React from "react";
import Option from "./Option";

const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your Options</h3>
      <button className="btn btn--link" onClick={props.handleRemoveOptions}>
        Remove All
      </button>
    </div>
    {props.options.length == 0 && <p className="widget__msg">...Nope, nothing to do.</p>}
    {/* {this.props.options && <p>Option Count: {this.props.options.length}</p>} */}

    <ul className="list-group options-list">
      {props.options.map((option, index) => (
        <Option key={option.id} name={option.name} count={index + 1} handleRemoveOption={props.handleRemoveOption} />
      ))}
    </ul>
  </div>
);

export default Options;
