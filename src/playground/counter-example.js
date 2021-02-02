console.log("Counter Example");

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleMinus = this.handleMinus.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    const data = localStorage.getItem("num");
    const count = parseInt(data, 10);
    if (!isNaN(count)) {
      this.setState(() => ({ count }));
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem("num", this.state.count);
    }
  }
  handleAdd() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }
  handleMinus() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 0,
      };
    });
  }
  render() {
    return (
      <div className="container mt-2">
        <h1>Count: {this.state.count}</h1>
        <button className="btn btn-primary m-1 border-0 bg-secondary" onClick={this.handleAdd}>
          +1
        </button>
        <button className="btn btn-primary m-1 border-0 bg-secondary" onClick={this.handleMinus}>
          -1
        </button>
        <button className="btn btn-primary m-1 border-0 bg-danger" onClick={this.handleReset}>
          Reset
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Counter count={100} />, document.getElementById("root"));

// let count = 0;

// const add = () => {
//   count++;
//   console.log("Plus 1: " + count);
//   renderCounterApp();
// };

// const minus = () => {
//   count--;
//   console.log("Minus 1: " + count);
//   renderCounterApp();
// };

// const reset = () => {
//   count = 0;
//   console.log("Reset: " + count);
//   renderCounterApp();
// };

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div className="container mt-2">
//       <h1>Count: {count}</h1>
//       <button onClick={add} className="btn btn-primary m-1">
//         +1
//       </button>
//       <button onClick={minus} className="btn btn-primary m-1">
//         -1
//       </button>
//       <button onClick={reset} className="btn btn-primary m-1">
//         Reset
//       </button>
//     </div>
//   );

//   ReactDOM.render(templateTwo, document.getElementById("root"));
// };

// renderCounterApp();
