import React from "react";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import AddOption from "./AddOption";
import OptionModal from "./OptionModal";

export default class IndecisionApp extends React.Component {
  state = {
    id: 0,
    decision: undefined,
    options: [],
  };
  handleAddOption = (option) => {
    if (!option) {
      return "Please enter a valid value to add an item.";
    } else if (this.state.options.some((e) => e.name === option)) {
      return "This option already exists.";
    }
    const newOption = {
      id: this.state.id,
      name: option,
    };
    this.setState((prevState) => ({
      id: prevState.id + 1,
      options: prevState.options.concat(newOption),
    }));
    console.log("Form Submitted.");
  };
  handleRemoveOptions = () => {
    this.setState(() => ({ options: [], decision: undefined }));
  };
  handleRemoveOption = (option) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((e) => e.name !== option),
    }));
  };
  handleMakeDecision = () => {
    if (this.state.options.length > 0) {
      const random = Math.floor(Math.random() * this.state.options.length);
      this.setState(() => ({ decision: this.state.options[random].name }));
    }
  };
  handleRemoveDecision = () => {
    this.setState(() => ({ decision: undefined }));
  };
  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      if (options) {
        console.log("Fetching Data!");
        this.setState(() => ({ options }));
      }
    } catch (e) {
      // Do nothing
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      console.log("Saving Data...");
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }
  componentWillUnmount() {
    console.log("componentWillUnmount!");
  }
  render() {
    const subtitle = "Put your life in the hands of a computer.";
    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action hasOptions={this.state.options.length > 0} handleMakeDecision={this.handleMakeDecision} decision={this.state.decision} />
          <div className="widget">
            <Options options={this.state.options} handleRemoveOptions={this.handleRemoveOptions} handleRemoveOption={this.handleRemoveOption} />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
          <OptionModal decision={this.state.decision} handleRemoveDecision={this.handleRemoveDecision} />
        </div>
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: [],
  id: 0,
};
