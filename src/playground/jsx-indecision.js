console.log("React app started!");

// * JSX - JavaScript XML

const app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer.",
  options: [
    // {
    //   id: 0,
    //   name: "Eat ramen.",
    // },
    // {
    //   id: 1,
    //   name: "Sleep all day.",
    // },
    // {
    //   id: 2,
    //   name: "Play video games!",
    // },
  ],
};

let decision;
const makeDecision = () => {
  if (app.options.length > 0) {
    const random = Math.floor(Math.random() * app.options.length);
    decision = app.options[random].name;

    renderIndecisionApp();
  }
};

const checkOptions = (optionsCount) => {
  if (optionsCount > 0) {
    return (
      <ol>
        {app.options.map((option) => (
          <li key={option.id}>{option.name}</li>
        ))}
      </ol>
    );
  }
};

const removeAll = () => {
  app.options = [];
  decision = null;
  renderIndecisionApp();
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    console.log("Form Submitted.");
    const newOption = {
      id: app.options.length,
      name: option,
    };
    app.options.push(newOption);
    e.target.elements.option.value = "";
    renderIndecisionApp();
  }
};

const renderIndecisionApp = () => {
  const template = (
    <div className="container mt-2">
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}

      {/* <p className="mb-1">Options Count: {app.options.length}</p> */}
      <button disabled={app.options.length === 0 ? true : false} className="btn btn-primary bg-info border-0 mb-3 mr-2" onClick={makeDecision}>
        What should I do?
      </button>
      <button className="btn btn-primary bg-danger border-0 mb-3" onClick={removeAll}>
        Remove All
      </button>

      {app.options && decision && <h3>{decision}</h3>}

      <p>{app.options.length > 0 ? "Here are some cool things you can do today:" : "...Nope, nothing to do."}</p>
      {app.options && checkOptions(app.options.length)}

      <form action="" onSubmit={onFormSubmit}>
        <p className="mb-1">Enter valid value to add item.</p>
        <div className="input-group">
          <input name="option" type="text" className="form-inline border-0" placeholder="e.g. Baseball" />
          <button className="btn btn-primary border-0 bg-info submit-btn">Submit</button>
        </div>
      </form>
    </div>
  );
  ReactDOM.render(template, document.getElementById("root"));
};

renderIndecisionApp();
