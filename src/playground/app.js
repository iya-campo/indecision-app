console.log("React Components!");

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleRemoveOptions = this.handleRemoveOptions.bind(this);
    this.handleRemoveOption = this.handleRemoveOption.bind(this);
    this.handleMakeDecision = this.handleMakeDecision.bind(this);
    this.state = {
      id: props.id + props.options.length,
      decision: undefined,
      options: props.options,
    };
  }
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
  handleAddOption(option) {
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
  }
  handleRemoveOptions() {
    this.setState(() => ({ options: [], decision: undefined }));
  }
  handleRemoveOption(option) {
    this.setState((prevState) => ({
      options: prevState.options.filter((e) => e.name !== option),
    }));
  }
  handleMakeDecision() {
    if (this.state.options.length > 0) {
      const random = Math.floor(Math.random() * this.state.options.length);
      this.setState(() => ({ decision: this.state.options[random].name }));
    }
  }
  render() {
    const subtitle = "Put your life in the hands of a computer.";
    return (
      <div className="container mt-2">
        <Header subtitle={subtitle} />
        <Action hasOptions={this.state.options.length > 0} handleMakeDecision={this.handleMakeDecision} decision={this.state.decision} />
        <Options options={this.state.options} handleRemoveOptions={this.handleRemoveOptions} handleRemoveOption={this.handleRemoveOption} />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: [],
  id: 0,
};

const Header = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
      {props.subtitle && <p>{props.subtitle}</p>}
    </header>
  );
};

Header.defaultProps = {
  title: "Indecision App",
};

const Action = (props) => {
  return (
    <div>
      <button className="btn btn-primary bg-info border-0 mb-3 mr-2" onClick={props.handleMakeDecision} disabled={!props.hasOptions}>
        What should I do?
      </button>
      {props.decision && <h3>{props.decision}</h3>}
    </div>
  );
};

const Options = (props) => {
  return (
    <div>
      <button className="btn btn-primary bg-danger border-0 mb-3" onClick={props.handleRemoveOptions}>
        Remove All
      </button>

      <p>{props.options.length > 0 ? "Here are some cool things you can do today:" : "...Nope, nothing to do."}</p>
      {/* {this.props.options && <p>Option Count: {this.props.options.length}</p>} */}

      <ul className="list-group options-list mb-3">
        {props.options.map((option) => (
          <Option key={option.id} name={option.name} handleRemoveOption={props.handleRemoveOption} />
        ))}
      </ul>
    </div>
  );
};

const Option = (props) => {
  return (
    <div className="mb-1 d-flex">
      <li className="list-group-item p-2 w-50" key={props.id}>
        {props.name}
      </li>
      <button
        onClick={(e) => {
          props.handleRemoveOption(props.name);
        }}
        className="btn btn-primary bg-transparent border-0 text-secondary remove-btn"
      >
        &times;
      </button>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined,
    };
  }
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    this.setState(() => ({ error }));
    if (!error) {
      e.target.elements.option.value = "";
    }
  }
  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleAddOption}>
          <p className="mb-1">Enter a valid value to add an item.</p>
          <div className="input-group">
            <input name="option" type="text" className="form-inline border-0" placeholder="e.g. Baseball" />
            <button className="btn btn-primary border-0 bg-info submit-btn">Submit</button>
          </div>
          {this.state.error && <small className="text-danger">ERROR: {this.state.error}</small>}
        </form>
      </div>
    );
  }
}

// const Sample = (props) => {
//   return (
//     <div className="container">
//       <p>
//         {props.title}
//         {props.subtitle}
//       </p>
//     </div>
//   );
// };

ReactDOM.render(<IndecisionApp />, document.getElementById("root"));
