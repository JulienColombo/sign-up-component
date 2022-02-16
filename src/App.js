import "./styles.css";
import React from "react";

export default function App() {
  const [values, setValues] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  function handleSubmit(e) {
    e.preventDefault();

    alert("You have sent the information, thanks you!");
    return (
      (values.firstName = ""),
      (values.lastName = ""),
      (values.email = ""),
      (values.password = "")
    );
  }

  function handleChange(evt) {
    const { target } = evt;
    const { name, value } = target;

    const newValues = {
      ...values,
      [name]: value
    };

    setValues(newValues);
  }

  return (
    <div className="App">
      <div className="fondoApp">
        <div className="cont--main">
          <div className="contenedor--title">
            <h1 className="title">Learn to code by watching others</h1>
            <h4 className="description">
              See how experienced developers solve problems in real-time.
              Wacthing scripted tutorials is great, but understanding how
              developers think is invaluable.
            </h4>
          </div>
          <div className="contenedor--body">
            <div className="cont-advisor">
              <span className="advisor">
                <strong>Try it free 7 days</strong> then $20/mo. thereafter
              </span>
            </div>
            <div className="cont--form">
              <form onSubmit={handleSubmit} className="form">
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="First name"
                  className="form--input"
                  value={values.firstName}
                  onChange={handleChange}
                ></input>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Last name"
                  className="form--input"
                  value={values.lastName}
                  onChange={handleChange}
                ></input>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email adress"
                  className="form--input"
                  value={values.email}
                  onChange={handleChange}
                ></input>
                <input
                  id="password"
                  name="password"
                  placeholder="Password"
                  type="password"
                  className="form--input"
                  value={values.password}
                  onChange={handleChange}
                ></input>
                <button
                  id="button--form"
                  type="submit"
                  className="form--button"
                >
                  CLAIM FOR FREE TRIAL
                </button>
              </form>
              <span className="term-and-services">
                *by clicking the button, you are agreeing to our{" "}
                <strong> Terms and Services </strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
