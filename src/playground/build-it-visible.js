console.log("Build It! Visibility Pupper");

class VisibilityPupper extends React.Component {
  constructor(props) {
    super(props);
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.state = {
      visible: false,
    };
  }
  toggleVisibility() {
    this.setState((prevState) => {
      return {
        visible: !prevState.visible,
      };
    });
  }
  render() {
    return (
      <div className="container text-center mt-2">
        <h1>Visibility Pupper</h1>

        <button className="btn btn-primary bg-info border-0 mt-3" onClick={this.toggleVisibility}>
          {this.state.visible ? "Hide Details" : "Show Details"}
        </button>

        <div className={"happy-msg " + (this.state.visible ? "show" : "hidden")}>
          <p className="mt-5">Hello there, beautiful person on the Internet! ♡</p>
          <img className="happy-dog" src="https://i.pinimg.com/originals/de/92/3e/de923e0e137e1cbbc3cdbac9081c382e.gif" alt="" />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<VisibilityPupper />, document.getElementById("root"));

// let visible = false;

// const toggleVisibility = () => {
//   visible = !visible;
//   renderVisibilityToggle();
// };

// const renderVisibilityToggle = () => {
//   const template = (
//     <div className="container text-center mt-2">
//       <h1>Visibility Pupper</h1>

//       <button className="btn btn-primary bg-info border-0 mt-3" onClick={toggleVisibility}>
//         {visible ? "Hide Details" : "Show Details"}
//       </button>

//       <div className={"happy-msg " + (visible ? "show" : "hidden")}>
//         <p className="mt-5">Hello there, beautiful person on the Internet! ♡</p>
//         <img className="happy-dog" src="https://i.pinimg.com/originals/de/92/3e/de923e0e137e1cbbc3cdbac9081c382e.gif" alt="" />
//       </div>
//     </div>
//   );
//   ReactDOM.render(template, document.getElementById("root"));
// };

// renderVisibilityToggle();
